const { response } = require("express");
const router = require("../routes/admin");
const mysqlConnect = require("../util/database");

class Users {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  save() {
    const db = mysqlConnect();
    db.collection("users").add();
  }
}

router.post("/add_data", function (req, res, next) {
  const username = request.body.username;
  const email = request.body.email;
  const password = request.body.password;

  const query = `INSERT INTO gymbs(username, email, password) VALUES("${username}", "${email}", "${password}")`;

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/sample_data");
    }
  });
});
