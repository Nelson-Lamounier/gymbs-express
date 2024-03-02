const mysql = require("mysql2");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const mysqlConnect = require("./util/database");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/gymbs", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "error.html"));
});

mysqlConnect(() => {
  app.listen(3000);
});

app.listen(3000, () => {
  console.log("Server started on http:localhost:3000");
});
