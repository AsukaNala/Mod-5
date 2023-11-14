const express = require("express");
const app = express();
const friendRoutes = require("./routes/friendRoutes");
const port = 3007;

app.use(express.json());

app.use("/", express.static("public"));

app.use("/friends", friendRoutes);
app.listen(port, () => console.log(`http://localhost:${port}`));
