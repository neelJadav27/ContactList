const express = require("express");
const app = express();
const mysql = require("mysql");
const Router = require("./Router");

var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "ContactList",
});

db.connect(function (err) {
  if (err) {
    console.log("DB ERROr");
    throw err;

    return false;
  } else {
    console.log("Connected");
  }
});

new Router(app, db);
app.options("*", cors());
const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
