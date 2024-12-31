const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { Pool } = require("pg")

const SERVER_PORT = 9000
const server = express()

const db = new Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "Qazwsx123",
  database: "vovashop",
  ssl: false,
})

const coupons = [
  {
    id: 1,
    code: "ABC123",
    discount: 10,
    type: "percentage",
  },
  {
    id: 2,
    code: "XYZ456",
    discount: 20,
    type: "fixed",
  },
]

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`)
})

server.use(cors())
server.use(bodyParser.json({ limit: "15mb" }))

server.get("/", (req, res) => {
  res.send("Hello World")
})

server.get("/coupon/:code", (req, res) => {
  try {
    const { code } = req.params
    const coupon = coupons.find((c) => c.code === code)

    if (!coupon) {
      res.status(404).json({ error: "Coupon not found" }).end()

      return
    }

    res.json(coupon).end()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
})

server.post("/order/create", async (req, res) => {
  try {
    const { shipping, items } = req.body

    if (!shipping || !items || !items.length) {
      res.status(400).json({ error: "Invalid request" }).end()

      return
    }

    const saveOrderToDB = async () => {
      const client = await db.connect()

      try {
        await client.query("BEGIN")

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

        items.forEach((item) =>
          client.query(
            `INSERT INTO order_items (title, price, amount, order_id) 
            VALUES ('${item.title}', ${item.price}, ${item.amount}, ${order.id})`,
          ),
        )

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
    }

    res.status(200).json({ orderId }).end()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Server error" }).end()
  }
})
