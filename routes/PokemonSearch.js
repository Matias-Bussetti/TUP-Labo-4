const express = require("express");

const router = express.Router();

// Este es el controlador
const PokemonSearch = require("./../controllers/PokemonSearchController");

router.get("/", PokemonSearch.getPokemonSearch);

module.exports = router;