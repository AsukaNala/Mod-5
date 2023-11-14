const express = require("express");
const app = express();
const calculatorRoutes3 = require("./routes/calculatorRoutes3");
const port = 3000;

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use("/", express.static("public"));

app.use("/calculator", calculatorRoutes3);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
