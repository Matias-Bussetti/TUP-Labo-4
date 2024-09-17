const { request, response } = require("express");

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/";


const PokemonSearchController = {
    getPokemonSearch: async (request, response) => {
        try {
            const pokemonId = request.query.name;
            const pokemonUrl =  `${POKEAPI_URL}${pokemonId}`;
            const pokemonData = await axios.get(pokemonUrl);
            response.json(pokemonData.data);
    } catch(error){
        response.status(500).json({
            message: "Error consumiendo datos de la API de Pokemon",
            error: error.message,
        });
    }
}
}

module.exports = PokemonSearchController;