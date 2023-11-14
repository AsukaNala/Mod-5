//here is to manage  mytest route endpoint

const express = require("express");
const router = express.Router(); //ルーターの管理。設計

router.get("/", (req, res) => {
  res.send("The root route!");
});

router.get("/test", (req, res) => {
  res.send("Hello World!");
});

router.get("/test2", (req, res) => {
  res.send("Second Test");
});

module.exports = router; //export for other file to be avale to import it
