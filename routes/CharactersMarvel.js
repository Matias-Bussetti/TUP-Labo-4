const express = require("express");

const router = express.Router();

// Controlador
const CharactersMarvel = require("./../controllers/CharactersMarvelController");

router.get("/", CharactersMarvel.getMarvelCharacters);

module.exports = router;