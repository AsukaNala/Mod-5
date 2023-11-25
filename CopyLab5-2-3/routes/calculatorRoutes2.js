const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});
router.get("/subs", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let subs = number1 - number2;
  console.log(subs);
  res.status(200).json({ result: subs });
});

router.get("/mult", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let mult = number1 * number2;
  console.log(mult);
  res.status(200).json({ result: mult });
});

router.get("/div", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let div = !number2 == 0 ? number1 / number2 : "invalid";
  console.log(div);
  res.status(200).json({ result: div });
});

module.exports = router;
