const express = require("express");
const router = express.Router();
const calculatorController3 = require("../controllers/calculatorController3");

router.get("/add", (req, res) => {
  calculatorController3.addNumbers(req, res);
});

router.get("/subs", (req, res) => {
  calculatorController3.subsNumbers(req, res);
});

router.get("/mult", (req, res) => {
  calculatorController3.multNumbers(req, res);
});

router.get("/div", (req, res) => {
  calculatorController3.divNumbers(req, res);
});

module.exports = router;
