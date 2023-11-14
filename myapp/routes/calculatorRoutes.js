const express = require("express");
const calculatorController = require("../controllers/calculatorController");
const router = express.Router();

// new route for adding two numbers

// router.get("/add", (req, res) => {
//   res.send("Add");
// });

//to send back the query parameters(in URL-> send request with query parameters. route?param=value&param=value)

// router.get("/add", (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

//functional add route performing additional on request parameters

router.get("/add", (req, res) => {
  //let number1 = parseInt(req.query.num1); //get arguments are string.To calculate numbers, they need to be changed to numbers(parse them).
  //let number2 = parseInt(req.query.num2);
  //let sum = number1 + number2;
  //console.log(sum);
  //res.status(200); //status(200) is "complete"
  // res.json({ result: sum }); // Instead of 'send' use 'json' to send data in json format instead of just strings. 'send' sends data as it is(string,HTML, binarydata...) and 'json' sends data as json data.
  calculatorController.addNumbers(req, res);
});

module.exports = router; //router  is an object.express.Router();
