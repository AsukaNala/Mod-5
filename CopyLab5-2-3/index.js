const express = require("express");
const app = express();
const calculatorRoutes2 = require("./routes/calculatorRoutes2");
const port = 3005;

app.use("/", express.static("public"));

app.use("/calculator", calculatorRoutes2);

app.listen(port, () => console.log(`http://localhost:${port}`));
