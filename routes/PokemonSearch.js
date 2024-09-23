const express = require("express");

const router = express.Router();

// Este es el controlador
const PokemonSearch = require("./../controllers/PokemonSearchController");

// Obtener un Pokémon por ID
router.get("/:id", PokemonSearch.getPokemonSearchID);

// Obtener todos los Pokémon
router.get("/", PokemonSearch.getPokemonSearchAll);

// Buscar Pokémon con parámetros
//router.get("/search", PokemonSearch.getPokemonByQuery);

module.exports = router;