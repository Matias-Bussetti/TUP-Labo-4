require('dotenv').config({ path: './marvel.env' });
const { request, response } = require("express");
const axios = require("axios");
const crypto = require("crypto");

const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const MARVEL_PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;
const MARVEL_API_URL = "https://gateway.marvel.com:443/v1/public/characters";

const CharactersMarvelController = {
  getMarvelCharacters: async (request, response) => {
    try {
      const ts = new Date().getTime(); // Timestamp actual
      const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex'); // Genera el hash

      const res = await axios.get(MARVEL_API_URL, {
        params: {
          ts: ts,
          apikey: MARVEL_PUBLIC_KEY,
          hash: hash,
          limit: 40,  // Limit 40 personajes
        },
      });
      response.json(res.data);
    } catch (error) {
      response.status(500).json({
        message: "Error consumiendo datos de la API de Marvel",
        error: error.message,
      });
    }
  },
};

module.exports = CharactersMarvelController;