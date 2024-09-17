const { request, response } = require("express");
const axios = require("axios");

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/";


const PokemonSearchController = {
    getPokemonSearch: async (request, response) => {
        try {
            // Aca requiero la id del pokemon que quiero buscar
            const pokemonId = request.params.id;
            console.log(pokemonId); // Test si esta recibiendo el id

            // Aca armo la url 
            const pokemonUrl =  `${POKEAPI_URL}${pokemonId}`;

            // Aca hago la peticion
            const pokemonData = await axios.get(pokemonUrl);

            //Filtro la informacion que deseo mostrar
            const filteredData = {
                id: pokemonData.data.id,
                name: pokemonData.data.name,
                types: pokemonData.data.types.map(typeInfo => typeInfo.type.name)
            };

            // Devuelvo la respuesta filtrada
            response.json(filteredData);
    } catch(error){
        response.status(500).json({
            message: "Error consumiendo datos de la API de Pokemon",
            error: error.message,
        });
    }
}
}

module.exports = PokemonSearchController;