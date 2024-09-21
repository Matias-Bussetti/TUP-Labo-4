const express = require("express");

const router = express.Router();

//Rutas
const sample = require("./sample");
const CharactersMarvel = require("./CharactersMarvel");
const PokemonSearch = require("./PokemonSearch");
const PatientsRoutes = require("./PatientsRoutes");

router.use("/sample", sample);

router.use("/api/v1/marvel/characters", CharactersMarvel);

//Rutas Diego
router.use("/api/v1/pokemon/search", PokemonSearch);
router.use("/api/v1/pokemon/search", PokemonSearch);

router.use("/api/v1/patients", PatientsRoutes);

router.get("*", (req, res) => {
  res.json({
    status: 404,
    msg: "not found",
  });
});

module.exports = router;
