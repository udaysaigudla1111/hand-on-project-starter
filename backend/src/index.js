






const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const app = express();
const cors = require("cors");
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to mongo db database");
  })
  .catch((err) => {
    console.log("Error connceting to database" + err);
  });
//Middleware

app.use(bodyParser.json());
app.get("/hello-world", (req, res) => {
  res.send("Hello world");
});

app.use("/user", user);
app.listen(process.env.PORT, () => {
  console.log("Backend Server has started at " + process.env.PORT);
});
