const axios = require('axios');
const crypto = require('crypto');

const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const MARVEL_PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;
const MARVEL_API_URL = "https://gateway.marvel.com:443/v1/public/characters";

class CharactersMarvel {
  static async fetch() {
    const ts = new Date().getTime();

    if (!MARVEL_PUBLIC_KEY || !MARVEL_PRIVATE_KEY) {
      throw new Error("Las claves de la API de Marvel no están definidas correctamente.");
    }

    if (isNaN(ts)) {
      throw new Error("El timestamp es inválido.");
    }

    const hash = crypto.createHash('md5').update(ts.toString() + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');

    
    const response = await axios.get(MARVEL_API_URL, {
      params: {
        ts: ts,
        apikey: MARVEL_PUBLIC_KEY,
        hash: hash,
        limit: 100
      },
    });

    const results = response.data.data.results;

    return results.map(character => ({
      id: character.id,
      name: character.name,
      description: character.description,
      modified: character.modified,
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      series: character.series.items.map(serie => serie.name)
    }));
  }

  static async all() {
    return await this.fetch();
  }

  static async whereId(id) {
    const ts = new Date().getTime();
    const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');

    const params = {
      ts: ts,
      apikey: MARVEL_PUBLIC_KEY,
      hash: hash,
    };
  
    try {
      const response = await axios.get(`${MARVEL_API_URL}/${id}`, { params });
      const results = response.data.data.results;
  
      if (results.length === 0) {
        return null; // Si no se encuentra el personaje retorno null
      }

      const character = results[0];
      return {
        id: character.id,
        name: character.name,
        description: character.description,
        modified: character.modified,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        series: character.series.items.map(serie => serie.name),
      };
    } catch (error) {
      throw new Error(error.message || 'Errorr al obtener el personaje por  ID.');;
    }
  }

  static async filterByQuery({ name, nameStartsWith, orderBy, limit, offset }) {
    const ts = new Date().getTime();
    const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');
  
    const params = {
      ts: ts,
      apikey: MARVEL_PUBLIC_KEY,
      hash: hash,
      ...(name && { name }),
      ...(nameStartsWith && { nameStartsWith }),
      ...(orderBy && { orderBy }),
      ...(limit && { limit }),   // Solo agrega limit si se proporciona
      ...(offset && { offset }), // Solo agrega offset si se proporciona
    };
  
    const response = await axios.get(MARVEL_API_URL, { params });
    const results = response.data.data.results;
  
    return results.map(character => ({
      id: character.id,
      name: character.name,
      description: character.description,
      modified: character.modified,
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      series: character.series.items.map(serie => serie.name)
    }));
  }
}

module.exports = CharactersMarvel;