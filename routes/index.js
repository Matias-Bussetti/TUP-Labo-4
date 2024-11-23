const express = require("express");

const router = express.Router();

//Rutas
//const sample = require("./sample");
const CharactersMarvel = require("./CharactersMarvelRoutes");
const PokemonSearch = require("./PokemonSearch");
const LaPiedraFilosofal = require("./LaPiedraFilosofal");
const PatientsRoutes = require("./PatientsRoutes");
const Clientes = require("../routes/Clientes")

//Rutas de prueba
//router.use("/sample", sample);
//Rutas Eric
router.use("/api/v1/clientes",Clientes);
//Rutas Juan
router.use("/api/v1/marvel/chars", CharactersMarvel);
//Rutas Diego
router.use("/api/v1/pokemon", PokemonSearch);
//Rutas Eugenia
router.use("/api/v1/personajes", LaPiedraFilosofal);
//Rutas Matias
router.use("/api/v1/patients", PatientsRoutes);

//Rutas por defecto
router.get("*", (req, res) => {
  res.json({
    status: 404,
    msg: "Endpoint Not Found",
  });
});

module.exports = router;