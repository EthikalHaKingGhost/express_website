const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const pug = require("pug");

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port, ${PORT}`);
});

//Join Directory name with template paths using views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});
