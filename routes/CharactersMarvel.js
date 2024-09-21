const express = require("express");

const router = express.Router();

// Controlador
const CharactersMarvel = require("./../controllers/CharactersMarvelController");

router.get("/characters", CharactersMarvel.getMarvelCharacters); // Ruta para obtener todos los personajes
router.get("/characters/:id", CharactersMarvel.getMarvelCharacterById); // Ruta para obtener un personaje por su ID
router.get("/characters/filter", CharactersMarvel.getMarvelCharactersWithParams); // Ruta para obtener personajes con parámetros

module.exports = router;