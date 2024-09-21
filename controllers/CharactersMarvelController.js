require('dotenv').config({ path: './TUP-Labo-4/marvel.env' });
const { request, response } = require("express");
const axios = require("axios");
const crypto = require("crypto");

const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const MARVEL_PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;
const MARVEL_API_URL = "https://gateway.marvel.com:443/v1/public/characters";

const CharactersMarvelController = {
  // Obtener todos los personajes
  getMarvelCharacters: async (request, response) => {
    try {
      const ts = new Date().getTime(); // Timestamp actual
      const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex'); // Genera el hash

      const res = await axios.get(MARVEL_API_URL, {
        params: {
          ts: ts,
          apikey: MARVEL_PUBLIC_KEY,
          hash: hash,
          limit: 100,
        },
      });

      // Filtrar los datos que deseas
      const filteredData = res.data.data.results.map(character => ({
        id: character.id,
        name: character.name,
        description: character.description,
        modified: character.modified,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        series: character.series.items.map(serie => serie.name)
      }));

      // Enviar la respuesta en el formato deseado
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

  // Obtener un personaje por su ID
  getMarvelCharacterById: async (request, response) => {
    const { id } = request.params; // Obtener el ID de la ruta
    try {
      const ts = new Date().getTime(); // Timestamp actual
      const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex'); // Genera el hash

      const res = await axios.get(`${MARVEL_API_URL}/${id}`, {
        params: {
          ts: ts,
          apikey: MARVEL_PUBLIC_KEY,
          hash: hash
        },
      });

      // Filtrar los datos del personaje específico
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

      // Enviar la respuesta con el personaje filtrado
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

  getMarvelCharactersWithParams: async (request, response) => {
    try {
      const ts = new Date().getTime();
      const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');

      // Extraer query params
      const { nameStartsWith, orderBy, limit, page } = request.query;
      const offset = (page && limit) ? (page - 1) * limit : 0;

      // Preparar los parámetros de la solicitud
      const params = {
        ts: ts,
        apikey: MARVEL_PUBLIC_KEY,
        hash: hash,
        nameStartsWith: nameStartsWith || '',  // Filtrar por nombres que comiencen con
        orderBy: orderBy || '',                // Ordenar resultados
        limit: limit || 10,                    // Limitar resultados
        offset: offset || 0                    // Desplazamiento para paginación
      };

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