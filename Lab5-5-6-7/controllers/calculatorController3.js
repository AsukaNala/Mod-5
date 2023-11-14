const Calculator = require("../libraries/Calculator3");
let myCalc = new Calculator();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  //let sum = number1 + number2;
  let sum = myCalc.add(number1, number2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const subsNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  //let subs = number1 - number2;
  let subs = myCalc.subs(number1, number2);
  console.log(subs);
  res.status(200);
  res.json({ result: subs });
};

const multNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  //let mult = number1 * number2;
  let mult = myCalc.mult(number1, number2);
  console.log(mult);
  console.log(mult);
  res.status(200).json({ result: mult });
};

const divNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  //let div = !number2 == 0 ? number1 / number2 : "invalid";
  let div = myCalc.div(number1, number2);
  console.log(div);
  res.status(200).json({ result: div });
};

module.exports = { addNumbers, subsNumbers, multNumbers, divNumbers };
