require('dotenv').config({ path: './TUP-Labo-4/marvel.env' });
const { request, response } = require("express");
const axios = require("axios");
const crypto = require("crypto");

const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const MARVEL_PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;
const MARVEL_API_URL = "https://gateway.marvel.com:443/v1/public/characters";

const CharactersMarvelController = {
  // get de todos los personajes
  getCharacters: async (request, response) => {
    try {
      const ts = new Date().getTime(); 
      const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex'); 

      const res = await axios.get(MARVEL_API_URL, {
        params: {
          ts: ts,
          apikey: MARVEL_PUBLIC_KEY,
          hash: hash,
          limit: 100,
        },
      });

      const filteredData = res.data.data.results.map(character => ({
        id: character.id,
        name: character.name,
        description: character.description,
        modified: character.modified,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        series: character.series.items.map(serie => serie.name)
      }));

      response.json({
        status: res.data.status,
        data: filteredData
      });
    } catch (error) {
      response.status(500).json({
        message: "Error consumiendo datos de la API de Marvel",
        error: error.message,
      });
    }
  },

  // Get de personajes por id
  getCharacterById: async (request, response) => {
    const { id } = request.params; // Obtener el ID de la ruta
    try {
      const ts = new Date().getTime();
      const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');

      const res = await axios.get(`${MARVEL_API_URL}/${id}`, {
        params: {
          ts: ts,
          apikey: MARVEL_PUBLIC_KEY,
          hash: hash
        },
      });

      // Filtrar los datos del personaje 
      const character = res.data.data.results[0];

      if (!character) {
        return response.status(404).json({ message: 'Personaje no encontrado' });
      }

      const filteredCharacter = {
        id: character.id,
        name: character.name,
        description: character.description,
        modified: character.modified,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        series: character.series.items.map(serie => serie.name)
      };

      response.json({
        status: res.data.status,
        data: filteredCharacter
      });
    } catch (error) {
      response.status(500).json({
        message: "Error consumiendo datos de la API de Marvel",
        error: error.message,
      });
    }
  },

  getCharactersWithQuery: async (request, response) => {
    try {
      const ts = new Date().getTime();
      const { 
        nameStartsWith, // Filtrar por nombre que empiece con
        name, // filtra por nombre exacto
        orderBy, // Puede ser name o modified, si se le agrega un - se ordena de forma descendente
        limit, // de 1 a 100, si no se le agrega nada se toma el valor por defecto de 100
        offset 
      } = request.query;
  
      const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');
  
      const limitValue = limit ? parseInt(limit) : 100;  // Valor por defecto de 100
      const offsetValue = offset ? parseInt(offset) : 0;  // Valor por defecto de 0
  
      // Crear los parámetros, omitiendo los vacíos
      const params = {
        ts: ts,
        apikey: MARVEL_PUBLIC_KEY,
        hash: hash,
        limit: limitValue,
        offset: offsetValue,
        ...(name && { name }), 
        ...(nameStartsWith && { nameStartsWith }), 
        ...(orderBy && { orderBy })
      };
  
      // Solicitud a la api de marvel
      const res = await axios.get(MARVEL_API_URL, { params });
  
      const filteredData = res.data.data.results.map(character => ({
        id: character.id,
        name: character.name,
        description: character.description,
        modified: character.modified,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        series: character.series.items.map(serie => serie.name)
      }));
  
      response.json({
        status: res.data.status,
        total: res.data.data.total,
        count: res.data.data.count,
        data: filteredData
      });
    } catch (error) {
      response.status(500).json({
        message: "Error consumiendo datos de la API de Marvel",
        error: error.message,
      });
    }
  } 
};

module.exports = CharactersMarvelController;