const CustomStatusMessage = require('../models/CustomStatusMessage');
const ErrorMessage = require('../models/ErrorMessage');
const ResponseMessage = require('../models/ResponseMessage');
const HarryPotterCharacters = require('../models/HarryPotterCharacters');


const axios = require('axios');
const { request, response } = require('express');

const getAllCharacters = (req = request, res = response) => {
  let { page = 1, limit = 50, house, gender, name, actor, ancestry, alternate_names } = req.query;

  // Si no se especifica un límite o se accede a /todoslospersonajes, devolvemos todos los personajes
  if (req.baseUrl.includes('todoslospersonajes')) {
    limit = null; // Sin límite, devuelve todos los personajes
  }

  const offset = limit ? (page - 1) * limit : 0; // Solo calculamos el offset si hay límite

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
      })
        .then((filteredData) => {
          // Si hay límite, aplicamos la paginación; si no, devolvemos todos los personajes
          const result = limit ? filteredData.slice(offset, offset + limit) : filteredData;
          res.status(200).json(ResponseMessage.from(result, 200));
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json(ErrorMessage.from(error, 500));
        });
    })
    .catch((error) => {
      console.error(error);
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
// Nuevo controlador para obtener todos los personajes sin límite
const getAllCharactersNoLimit = (req = request, res = response) => {
  const { house, gender, name, actor, ancestry, alternate_names } = req.query; // Desestructurar los filtros si los hay

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
      })
        .then((filteredData) => {
          // Devuelve todos los personajes sin aplicar paginación
          res.status(200).json(ResponseMessage.from(filteredData, 200));
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json(ErrorMessage.from(error, 500));
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(ErrorMessage.from(error, 500));
    });
};

module.exports = {
  getAllCharacters,
  getCharacterById,
  getAllCharactersNoLimit, // Exportamos el nuevo método
};

