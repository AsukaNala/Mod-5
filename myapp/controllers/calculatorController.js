const Calculator = require("../libraries/Calculator"); // inport Calculator class
let myCalc = new Calculator(); // make an instance

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  //let sum = number1 + number2;
  let sum = myCalc.add(number1, number2); //use add method in Calculator class
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

module.exports = { addNumbers }; //why {}? addNumber is a function.When other file imports this, {} makes addNumber as an object.
