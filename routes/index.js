 const express = require("express");

 const router = express.Router();

//Rutas
const sample = require("./sample");
const CharactersMarvel = require("./CharactersMarvel");
const PokemonSearch = require("./PokemonSearch");
const LaPiedraFilosofal = require("./LaPiedraFilosofal");
const PatientsRoutes = require("./PatientsRoutes");
const Clientes = require("../routes/Clientes")

router.use("/sample", sample);


//Rutas Eric
router.use("/api/v1/clientes",Clientes);
//
router.use("/api/v1/marvel", CharactersMarvel);
//Rutas Diego
router.use("/api/v1/pokemon/search", PokemonSearch);
//Rutas Eugenia
router.use("/api/v1/personajes", LaPiedraFilosofal);
//
router.use("/api/v1/patients", PatientsRoutes);

router.get("*", (req, res) => {
  res.json({
    status: 404,
    msg: "not found",
  });
});

 module.exports = router;
