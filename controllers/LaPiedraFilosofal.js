const axios = require('axios')
const { request, response } = require('express')


const { request, response } = require('express');
const HarryPotterCharacters = require('../models/HarryPotterCharacters'); 

const getPersonajes = async (req = request, res = response) => {
  try {
    const characters = await HarryPotterCharacters.all(); 

    if (characters.length >= 50) {
      res.status(200).json({
        msg: 'Ok',
        data: characters.slice(0, 50) // Limita la respuesta a 50 personajes
      });
    } else {
      res.status(404).json({
        msg: 'No se encontraron suficientes registros',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: 'Error',
      error
    });
  }
};

const getPersonajesFiltrados = async (req = request, res = response) => {
  try {
    const { name = '', gender = '', house = '', actor = '', ancestry = '', alternate_names = '' } = req.query;

    const characters = await HarryPotterCharacters.filterByQuery({ name, gender, house, actor, ancestry, alternate_names }); 

    if (characters.length > 0) {
      res.status(200).json({
        msg: 'Ok',
        data: characters
      });
    } else {
      res.status(404).json({
        msg: 'No se encontraron personajes con los filtros especificados',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: 'Error',
      error
    });
  }
};

const getPersonaje = async (req = request, res = response) => {
  try {
    const { idPersonaje = '' } = req.params;

    const character = await HarryPotterCharacters.whereId(idPersonaje); 
    if (character) {
      res.status(200).json({
        msg: 'Ok',
        data: character
      });
    } else {
      res.status(404).json({
        msg: 'No se encontró el personaje con el id especificado',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: 'Error',
      error
    });
  }
};

module.exports = {
  getPersonajesFiltrados,
  getPersonaje,
  getPersonajes
};
