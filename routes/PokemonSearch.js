const express = require("express");

const router = express.Router();

// Este es el controlador
const PokemonSearch = require("./../controllers/PokemonSearchController");

// Obtener todos los Pokémon
router.get("/all", PokemonSearch.getPokemonSearchAll);

// Buscar Pokémon con parámetros
router.get("/search", PokemonSearch.getPokemonByQuery);

// Obtener un Pokémon por ID
router.get("/:id", PokemonSearch.getPokemonSearchID);


module.exports = router;