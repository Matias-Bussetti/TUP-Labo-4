const CustomStatusMessage = require('../models/CustomStatusMessage');
const ErrorMessage = require('../models/ErrorMessage');
const ResponseMessage = require('../models/ResponseMessage');


const axios = require('axios');
const { request, response } = require('express');

// Controlador para obtener todos los personajes de Harry Potter
const getAllCharacters = (req = request, res = response) => {
    const { page = 1, limit = 50, house, gender, name, actor, ancestry, alternate_names } = req.query; // Desestructuro los query params
    const offset = (page - 1) * limit; 
    

    axios.get('https://hp-api.onrender.com/api/characters')
        .then(({ data }) => {
            // Filtra por casa y género si están presentes
            const filteredData = data.filter(character => {
                return HarryPotterCharacters.filterByQuery({ name, gender, house, actor, ancestry, alternate_names });
            });

            
        })
        .then(filteredData => {
        // Implementa paginación
        const paginatedData = filteredData.slice(offset, offset + limit);

        // Usamos ResponseMessage para la respuesta exitosa
        res.status(200).json(ResponseMessage.from(paginatedData, 200));
        })
        .catch((error) => {
          console.error(error);
          // Usamos ErrorMessage para manejar los errores
          res.status(500).json(ErrorMessage.from(error, 500));
        });
};

// Controlador para obtener un personaje por ID
const getCharacterById = (req = request, res = response) => {
    const { id: characterId } = req.params;
    console.log('Character ID:', characterId);

    axios.get(`https://hp-api.onrender.com/api/characters/${characterId}`)
        .then(({ data }) => {
          // Usamos ResponseMessage para la respuesta exitosa
          res.status(200).json(ResponseMessage.from(data, 200));
        })
        .catch((error) => {
          console.error(error);
          // Usamos ErrorMessage para manejar los errores
          res.status(500).json(ErrorMessage.from(error, 500));
        });
};

module.exports = {
    getAllCharacters,
    getCharacterById
};
