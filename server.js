const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const SERVER_PORT = 9000
const server = express()

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
