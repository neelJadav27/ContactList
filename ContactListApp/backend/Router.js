const { json } = require("express");

class Router {
  constructor(app, db) {
    this.getContactList(app, db);
    this.addUser(app, db);
  }

  getContactList(app, db) {
    app.get("/getList", (req, res) => {
      db.query("SELECT * FROM contacts", (err, data, fields) => {
        res.json({
          data,
        });
        return data;
      });
    });
  }

  addUser(app, db) {
    app.post("/addContact", (req, res) => {
      let FirstName = req.body.FirstName;
      let Address = req.body.LastName;
      let Email = req.body.Email;
      let PhoneNumber = req.body.PhoneNumber;

      var cols = [FirstName, Address, Email, PhoneNumber];
      console.log(cols);
      var sql =
        "INSERT INTO contacts (FirstName, LastName, Email, PhoneNumber) VALUES ?";
      db.query(sql, [cols], (err, data, fields) => {
        res.json({
          msg: "Contact Added",
        });
        return;
      });
    });
  }
}

module.exports = Router;
