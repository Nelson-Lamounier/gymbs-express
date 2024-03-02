const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "public", "index.html"));
});

router.post("/home", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/register", (req, res, next) => {
  res.sendFile(path.join(rootDir, "public", "register.html"));
});

router.post("/register", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/mens", (req, res, next) => {
  res.sendFile(path.join(rootDir, "public", "mancatalog.html"));
});

router.post("/mens", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/sales", (req, res, next) => {
  res.sendFile(path.join(rootDir, "public", "salescatalog.html"));
});

router.post("/sales", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/womans", (req, res, next) => {
  res.sendFile(path.join(rootDir, "public", "womencatalog.html"));
});

router.post("/womans", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/payment", (req, res, next) => {
  res.sendFile(path.join(rootDir, "public", "payment.html"));
});

router.post("/payment", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
