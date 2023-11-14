const express = require("express"); //require the express package(the same syntax for any npm package)
const app = express(); //a constructor or initiator function
const testRoutes = require("./routes/myTestRoutes"); //receive myTestRoutes file.need the path.
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");

const port = 3000; //set the port(only open one)

const swaggerUi = require("swagger-ui-express"); //import swagger
swaggerDocument = require("./swagger.json"); //create swagger document
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); //create a route for it

app.use(express.json()); //this has to be the top of any use of routes. "express.json()" middleware=> parses json data sent in the request body.

app.use("/", express.static("public"));

//routing
app.use("/mytest", testRoutes); //'/mytest'endpoint is common. other endpoints are managed by testRoutes

app.use("/calculator", calculatorRoutes);

app.use("/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World!"); showing in browser
// }); //"bind a get endpoint to the object app using the /URL(root)"

// app.get("/test", (req, res) => {
//   res.send("This is a test");
// }); //different endpoint
// => to routes folder

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
}); //"let the webserver listen on the provided port(3000), and once the server starts, if successful prntout this message to the console"
