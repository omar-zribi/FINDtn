const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const connectDb=require("./config/connectDb")
connectDb()
app.use(express.json())

const User=require("./routes/User.routes")
app.use("/",User)

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is runing on http://localhost:${PORT}`)
);