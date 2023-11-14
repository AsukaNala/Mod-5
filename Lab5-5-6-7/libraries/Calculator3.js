const Logger = require("./Logger");

//Lab5-6 part1;

class Calculator {
  constructor() {
    //this.id = Date.now();

    //Lab5-6 part2;
    this.id = Math.floor(Math.random() * 100000000); //? any numbers of 0?

    this.logger = new Logger("Calculator", this.id); //has to have common id with Calculator id
  }

  #log = (value) => {
    console.log(`[Calculator:${this.id}:] ${value}`); //
  };

  add(num1, num2) {
    const value = num1 + num2;
    //this.#log(value);

    //part3
    this.logger.log(value);
    return value;
  }

  subs(num1, num2) {
    const value = num1 - num2;
    //this.#log(value);

    //part3
    this.logger.log(value);
    return value;
  }

  mult(num1, num2) {
    const value = num1 * num2;
    //this.#log(value);

    //part3
    this.logger.log(value);
    return value;
  }

  div(num1, num2) {
    const value = !num2 == 0 ? num1 / num2 : "invalid";
    //this.#log(value);

    //part3
    this.logger.log(value);
    return value;
  }
}

module.exports = Calculator;
