const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { Pool } = require("pg")
// const { error } = require("console")

const SERVER_PORT = 9000
const server = express()

const db = new Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "vovashop",
  ssl: false,
})

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`)
})

server.use(cors())
server.use(bodyParser.json({ limit: "15mb" }))

server.get("/", (req, res) => {
  res.send("Hello World")
})

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      res.status(400).json({ error: "Invalid token" }).end()

      return
    }

    const tokenValid = await db
      .query(
        `SELECT * 
        FROM sessions 
        WHERE token='${token}' AND sessions.created_at > NOW() - INTERVAL '60 minutes';`,
      )
      .then((result) => result.rows[0])

    if (!tokenValid) {
      res.status(401).json({ message: "Not authorized" }).end()

      return
    }

    next()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
}

server.get("/admin/orders", authMiddleware, async (_req, res) => {
  try {
    const orders = await db
      .query(
        `
          SELECT orders.id, orders.first_name, orders.last_name, orders.street_address, 
            orders.apartment, orders.city, orders.email, orders.phone,
            SUM(order_items.amount * order_items.price) AS initial, 
            COALESCE(order_coupon.discount, 0) AS discount,
            SUM(order_items.amount * order_items.price) - COALESCE(order_coupon.discount, 0) AS total
          FROM orders 
            INNER JOIN order_items ON orders.id = order_items.order_id 
            LEFT JOIN order_coupon ON orders.id = order_coupon.order_id
          GROUP BY orders.id, order_coupon.discount;
        `,
      )
      .then((result) => result.rows)

    res.status(200).json(orders).end()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
})

// eslint-disable-next-line consistent-return
server.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({ error: "Invalid values" }).end()

      return
    }

    const user = await db
      .query(
        `
        SELECT * 
        FROM users
        WHERE email=LOWER('${email}') AND password='${password}';
      `,
      )
      .then((result) => result.rows[0])

    if (!user) {
      res.status(404).json({ error: "Invalid email or password" }).end()

      return
    }

    const token = await db
      .query(
        `
        INSERT INTO sessions (token, created_at, user_id)
        VALUES (gen_random_uuid(), NOW(), ${user.id})
        RETURNING token;
      `,
      )
      .then((result) => result.rows[0].token)

    res.status(200).json({ token }).end() // Используйте return, чтобы завершить функцию
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
})

server.delete("/auth/logout", async (req, res) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      res.status(400).json({ error: "Token is required" }).end()
      return
    }

    await db.query(
      `
      DELETE FROM sessions
      WHERE token = '${token}';
      `,
    )

    res.status(200).json({ message: "Logout successful" }).end()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
})

server.get("/admin/user", authMiddleware, async (req, res) => {
  try {
    const token = req.headers.authorization

    const user = await db
      .query(
        `
        SELECT users.id, users.email
        FROM users JOIN sessions ON sessions.user_id = users.id
        WHERE sessions.token='${token}';
      `,
      )
      .then((result) => result.rows[0])

    if (!user) {
      res.status(404).json({ error: "User not found" }).end()

      return
    }

    res.status(200).json(user).end()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
})

server.get("/coupon/:code", async (req, res) => {
  try {
    const { code } = req.params

    const validCoupon = await db
      .query(`SELECT * FROM coupons WHERE code='${code}';`)
      .then((result) => result.rows[0])

    if (!validCoupon) {
      res.status(404).json({ error: "Coupon not found" }).end()
      return
    }

    res.status(200).json(validCoupon).end()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
})

server.get("/admin/order/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params

    const orderItems = await db
      .query(`SELECT * FROM order_items WHERE order_id = ${id}`)
      .then((result) => result.rows)

    res.status(200).json(orderItems).end()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
})

server.post("/order/create", async (req, res) => {
  try {
    const { shipping, items, coupon } = req.body

    if (!shipping || !items || !items.length) {
      res.status(400).json({ error: "Invalid request" }).end()

      return
    }

    const saveOrderToDB = async () => {
      const client = await db.connect()

      try {
        await client.query("BEGIN")

        let validCoupon = null

        if (coupon) {
          validCoupon = await client
            .query(`SELECT * FROM coupons WHERE code='${coupon.code}';`)
            .then((result) => result.rows[0])

          if (!validCoupon) {
            throw new Error("coupon does not exist")
          }
        }

        const order = await client
          .query(
            `INSERT INTO orders (first_name, last_name, street_address, apartment, city, email, phone) 
            VALUES ('${shipping.firstName}', '${shipping.lastName}', '${shipping.streetAddress}', '${shipping.apartment}', '${shipping.city}', '${shipping.email}', '${shipping.phone}') 
            RETURNING *`,
          )
          .then((result) => result.rows[0])

        if (!order.id) {
          throw new Error("Failed to create order")
        }

        await Promise.all(
          items.map(async (item) => {
            await client.query(
              `INSERT INTO order_items (title, price, amount, order_id) 
            VALUES ('${item.title}', ${item.price}, ${item.amount}, ${order.id})`,
            )
          }),
        )

        if (validCoupon) {
          let orderDiscount = validCoupon.discount
          if (validCoupon.type === "percantage") {
            const orderTotal = items.reduce(
              (acc, item) => acc + item.price * item.amount,
              0,
            )

            const roudedDiscount =
              Math.round(
                ((orderTotal * validCoupon.discount) / 100) * 10 ** 2,
              ) /
              10 ** 2

            orderDiscount = roudedDiscount
          }
          await client.query(
            `INSERT INTO order_coupon (code, discount, order_id)
               VALUES ('${validCoupon.code}', ${orderDiscount}, ${order.id})`,
          )
        }

        await client.query("COMMIT")

        return order.id
      } catch (e) {
        await client.query("ROLLBACK")

        return null
      } finally {
        client.release()
      }
    }

    const orderId = await saveOrderToDB()

    if (!orderId) {
      res.status(500).json({ error: "Failed to create order" }).end()

      return
    }

    res.status(200).json({ orderId }).end()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
})
