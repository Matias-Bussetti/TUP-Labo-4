const express = require("express");

const router = express.Router();

const CharactersMarvel = require("../controllers/CharactersMarvelController");

router.get("/all", CharactersMarvel.getAllCharacters); // Ruta para obtener todos los personajes, el limite es de 100
router.get("/:id", CharactersMarvel.getCharacterById); // Ruta para obtener un personaje por su ID
router.get("/", CharactersMarvel.getCharactersWithQuery); // Ruta para obtener personajes con query params

// Las rutas las arme asi, porque el "/" lo necesitaba para los query params, 
// no se porque me generaba conflicto cuando le agregaba otra cosa al get de los query y SIEMPRE me tiraba 404 la api de marvel

module.exports = router;