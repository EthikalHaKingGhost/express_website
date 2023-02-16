const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});

app.get("/", function (req, res) {
  console.log("Hello World!");
  res.send("Hello World");
});
