const express = require("express");

const router = express.Router();

// Este es el controlador
const PokemonSearch = require("./../controllers/PokemonSearchController");

// Aca agarro la id pasada por parametro
router.get("/:id", PokemonSearch.getPokemonSearch);

module.exports = router;