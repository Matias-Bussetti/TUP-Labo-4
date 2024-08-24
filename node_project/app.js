//comment
const ExpressServer = require("./models/ExpressServer");
require("dotenv").config();

const server = new ExpressServer();

// server.app.get("/", (req, res) => {
//   return res.json({ mensaje: "hola mundo, puerto " + process.env.PORT });
// });

server.listen();
