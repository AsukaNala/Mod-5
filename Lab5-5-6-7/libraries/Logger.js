//Lab5-6 part3;
class Logger {
  constructor(caller, id) {
    this.caller = caller;
    this.id = id;
  }

  log = (value) => {
    console.log(`[${this.caller}: ${this.id}]: ${value}`);
  };
}

module.exports = Logger;

//What does Logger do here...logs out this.caller and id with given value.
//Where does it work... when caller wants to log out above
