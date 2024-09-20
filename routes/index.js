 const express = require("express");

 const router = express.Router();

 //Rutas
 const sample = require("./sample");
 const CharactersMarvel = require("./CharactersMarvel");
 const Clientes = require('../routes/Cliente');

 router.use('/api/v1/cliente', Clientes);
 
 router.use("/sample", sample);
 router.use("/api/v1/marvel/characters", CharactersMarvel);
 router.get("*", (req, res) => {
   res.json({
     status: 404,
     msg: "not found",
   });
 });

 module.exports = router;
