const express = require("express");
const app = express();
const port = 3000;
const app2 = express();
const port2 = 3001;
const app3 = express();
const port3 = 3002;

app.get("/", (req, res) => {
  res.send("This is Lab1 for Module 5");
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app2.get("/test", (req, res) => {
  res.send("This is another server on different port.");
});
app2.listen(port2, () => {
  console.log(`Second App listening at http://localhost:${port2}`);
});

app3.get("/test2", (req, res) => {
  res.send("This is yet another server on a different port");
});
app3.listen(port3, () => {
  console.log(`Third App listening at http://localhost:${port3}`);
});
