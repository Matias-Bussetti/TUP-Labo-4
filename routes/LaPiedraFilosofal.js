const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/LaPiedraFilosofal');

// Ruta para obtener un personaje por ID
router.get('/:id', controller.getCharacterById);

// Ruta para obtener todos los personajes (máximo 50 o todos) con filtros opcionales
router.get('/', controller.getAllCharacters);




module.exports = router;
