const express = require("express");
const app = express();
const port = 3000;
const productsRoute = require("./routes/productsRoute");

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use("/", express.static("public"));
app.use("/products", productsRoute);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
