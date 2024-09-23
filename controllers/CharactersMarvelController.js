require('dotenv').config({ path: './TUP-Labo-4/marvel.env' });
const MarvelCharacters = require('../models/CharactersMarvel');
const CustomStatusMessage = require('../models/CustomStatusMessage');
const ErrorMessage = require('../models/ErrorMessage');
const ResponseMessage = require('../models/ResponseMessage');
const { request, response } = require('express');

// Get ALL de personajes (limite 100 puesto por la aPI de Marvel)
const getAllCharacters = async (req = request, res = response) => {
  try {
    const characters = await MarvelCharacters.all();
  
    res.status(200).json(ResponseMessage.from(characters, 200));
  } catch (error) {
    console.error(error);
    res.status(500).json(ErrorMessage.from(error, 500));
  }
};

// Get de personaje por ID
const getCharacterById = async (req = request, res = response) => {
  const { id } = req.params; 

  try {
    const character = await MarvelCharacters.whereId(id); 

    // Si el personaje no existe devuelvo un 404
    if (!character) {
      return res.status(404).json(CustomStatusMessage.from(null, 404, 'Personaje no encontrado'));
    }
    res.status(200).json(ResponseMessage.from(character, 200));
  } catch (error) {
    console.error(error);
    res.status(500).json(ErrorMessage.from(error, 500));
  }
};

// Get con filtros query
const getCharactersWithQuery = async (req = request, res = response) => {
  const { nameStartsWith, name, orderBy, limit, offset } = req.query; 

  try {
    const characters = await MarvelCharacters.filterByQuery({ 
      name, 
      nameStartsWith, 
      orderBy, 
      limit: limit ? parseInt(limit) : undefined,  // Si existe lo convierto en int
      offset: offset ? parseInt(offset) : undefined // Si existe lo convierto en int
    });

    res.status(200).json(ResponseMessage.from(characters, 200));
  } catch (error) {
    console.error(error);
    res.status(500).json(ErrorMessage.from(error, 500));
  }
};

module.exports = {
  getAllCharacters,
  getCharacterById,
  getCharactersWithQuery
};