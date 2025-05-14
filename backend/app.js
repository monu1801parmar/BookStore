const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();
const conn = require("./conn/conn");

const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart")
const Order = require("./routes/order")

app.use(cors())
app.use(express.json());
// route
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

const startServer = async () => {
  await conn();

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server Started at port ${process.env.PORT}`);
  });
};

startServer();
