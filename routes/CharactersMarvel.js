const express = require("express");

const router = express.Router();

// Controlador
const CharactersMarvel = require("./../controllers/CharactersMarvelController");

router.get("/", CharactersMarvel.getCharacters); // Ruta para obtener todos los personajes
router.get("/:id", CharactersMarvel.getCharacterById); // Ruta para obtener un personaje por su ID
router.get("/filter", CharactersMarvel.getCharactersWithQuery); // Ruta para obtener personajes con parámetros

module.exports = router;