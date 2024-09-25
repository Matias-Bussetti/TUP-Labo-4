const { request, response } = require("express");
const axios = require("axios");
const ResponseMessage = require("../models/ResponseMessage");
const CustomStatusMessage = require("../models/CustomStatusMessage");
const ErrorMessage = require("../models/ErrorMessage");

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/";


const PokemonSearchController = {
    getPokemonSearchID: async (request, response) => {
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
            response.json(ResponseMessage.from(filteredData));

        } catch(error){
            if (error.response && error.response.status === 404) {
                response.status(404).json(CustomStatusMessage.from(null, 404, "Pokemon no encontrado"));
            } else {
                response.status(500).json(ErrorMessage.from(error));
            }
        }
    },

    getPokemonSearchAll: async (request, response) => {
        try {
            const {
                limit = 10, 
                offset = 0 } = request.query;

            // Construir la URL de la PokeAPI con los parámetros de paginación
            const pokemonUrl = `${POKEAPI_URL}?limit=${limit}&offset=${offset}`;
            // Realizar la solicitud a la PokeAPI
            const pokemonResponse = await axios.get(pokemonUrl);
            const pokemonList = pokemonResponse.data.results;

            //Creo un arreglo para obtener el detalle de cada pokemon
            const detailedPokemonList = await Promise.all(
                pokemonList.map(async (pokemon) => {
                    const pokemonDetails = await axios.get(pokemon.url);
    
                    // Filtro la información que voy a mostrar
                    return {
                        id: pokemonDetails.data.id,
                        name: pokemonDetails.data.name,
                        types: pokemonDetails.data.types.map(typeInfo => typeInfo.type.name)
                    };
                })
            );
    
            // Devolver la lista de Pokémon en la respuesta
            response.json(ResponseMessage.from(detailedPokemonList));

        } catch (error) {

            if (error.response && error.response.status === 404) {
                response.status(404).json(CustomStatusMessage.from(null, 404, "Pokemon no encontrado"));
            } else {
                response.status(500).json(ErrorMessage.from(error));
            }
        }
    },

    // Buscar Pokémon con filtros (limit, offset, name)
    getPokemonByQuery: async (request, response) => {
        try {
            const {
                name, 
                limit = 1025, // Valor predeterminado para limit para que aparezcan todos los pokemons
                offset = 0 } = request.query;

            const pokemonUrl = `${POKEAPI_URL}?limit=${limit}&offset=${offset}`;
            const pokemonResponse = await axios.get(pokemonUrl);
            const pokemonList = pokemonResponse.data.results;

            // Filtrar por nombre si se proporciona en los parámetros
            let filteredData = pokemonList;

            if (name) {
                filteredData = pokemonList.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
            }

            response.json(ResponseMessage.from(filteredData));

        } catch (error) {
            if (error.response && error.response.status === 404) {
                response.status(404).json(CustomStatusMessage.from(null, 404, "Pokemon no encontrado"));
            } else {
                response.status(500).json(ErrorMessage.from(error));
            }
        }
    }
    
    
}

module.exports = PokemonSearchController;