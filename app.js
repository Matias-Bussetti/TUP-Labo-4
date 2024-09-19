//Env
require("dotenv").config();
const env = process.env;

const express = require("express");

const app = express();

//Routes
const routes = require("./routes/index.js");

app.use("/", routes);

app.listen(parseInt(env.SERVER_PORT) || 3000, () => {
  console.log("Server Open");
});
