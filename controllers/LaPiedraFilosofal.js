const CustomStatusMessage = require('../models/CustomStatusMessage');
const ErrorMessage = require('../models/ErrorMessage');
const ResponseMessage = require('../models/ResponseMessage');
const HarryPotterCharacters = require('../models/HarryPotterCharacters');


const axios = require('axios');
const { request, response } = require('express');

// Controlador para obtener todos los personajes de Harry Potter
const getAllCharacters = (req = request, res = response) => {
  const { page = 1, limit = 50, house, gender, name, actor, ancestry, alternate_names } = req.query; // Desestructuro los query params
  const offset = (page - 1) * limit; 
  
  HarryPotterCharacters.all()
    .then((characters) => {
      HarryPotterCharacters.filterByQuery({ 
        characters,
        name, 
        gender, 
        house, 
        actor, 
        ancestry, 
        alternate_names,
        
    }).then((filteredData) => {
        // Aplicar paginación
        const paginatedData = filteredData.slice(offset, offset + limit);

        // Usamos ResponseMessage para la respuesta exitosa
        res.status(200).json(ResponseMessage.from(paginatedData, 200));
      });
    })
    .catch((error) => {
      console.error(error);
      // Usamos ErrorMessage para manejar los errores
      res.status(500).json(ErrorMessage.from(error, 500));
    });
};

// Controlador para obtener un personaje por ID de personaje
const getCharacterById = (req = request, res = response) => {
  const { id: characterId } = req.params; // Obtenemos el ID del personaje desde los parámetros de la URL

  HarryPotterCharacters.whereId(characterId)
      .then(( character) => {
          // Si el personaje no existe, devolvemos un error 404
          if (!character) {
            return res.status(404).json(CustomStatusMessage.from(null, 404, 'Character not found'));
          }

          // Si se encuentra el personaje, devolvemos la respuesta exitosa
          res.status(200).json(ResponseMessage.from(character, 200));
      })
      .catch((error) => {
          console.error(error);
          // Si hay un error, devolvemos un mensaje de error con código 500
          res.status(500).json(ErrorMessage.from(error, 500));
      });
};

module.exports = {
    getAllCharacters,
    getCharacterById
};
