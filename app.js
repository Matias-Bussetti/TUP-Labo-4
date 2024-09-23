// Env
require("dotenv").config();
const env = process.env;

const express = require("express");

const app = express();

// Routes
const routes = require("./routes/index.js");

app.use("/", routes);

const port = parseInt(env.PORT) || 3000;
app.listen(port, () => {
  console.log("Server Open at " + port);
});