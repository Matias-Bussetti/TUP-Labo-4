const { request, response } = require("express");
const axios = require("axios");
const ResponseMessage = require("../models/ResponseMessage");
const CustomStatusMessage = require("../models/CustomStatusMessage");
const ErrorMessage = require("../models/ErrorMessage");

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/";
const POKEAPI_URL_TYPE = "https://pokeapi.co/api/v2/type/";

const PokemonSearchController = {
    getPokemonSearchID: async (request, response) => {
        try {
            const pokemonId = request.params.id;
            const pokemonUrl = `${POKEAPI_URL}${pokemonId}`;
            const pokemonData = await axios.get(pokemonUrl);

            const filteredData = {
                id: pokemonData.data.id,
                name: pokemonData.data.name,
                types: pokemonData.data.types.map(typeInfo => typeInfo.type.name),
                image: pokemonData.data.sprites.front_default,
                stats: {
                    hp: pokemonData.data.stats[0].base_stat,
                    attack: pokemonData.data.stats[1].base_stat,
                    defense: pokemonData.data.stats[2].base_stat,
                    specialAttack: pokemonData.data.stats[3].base_stat,
                    specialDefense: pokemonData.data.stats[4].base_stat,
                    speed: pokemonData.data.stats[5].base_stat,
                },
            };

            response.json(ResponseMessage.from(filteredData));
        } catch (error) {
            if (error.response && error.response.status === 404) {
                response.status(404).json(CustomStatusMessage.from(null, 404, "Pokemon no encontrado"));
            } else {
                response.status(500).json(ErrorMessage.from(error));
            }
        }
    },

    getPokemonSearchAll: async (request, response) => {
        try {
            const { limit = 0, offset = 0 } = request.query;
            const pokemonUrl = `${POKEAPI_URL}?limit=${limit}&offset=${offset}`;
            const pokemonResponse = await axios.get(pokemonUrl);
            const pokemonList = pokemonResponse.data.results;

            const detailedPokemonList = await Promise.all(
                pokemonList.map(async (pokemon) => {
                    const pokemonDetails = await axios.get(pokemon.url);
                    return {
                        id: pokemonDetails.data.id,
                        name: pokemonDetails.data.name,
                        types: pokemonDetails.data.types.map(typeInfo => typeInfo.type.name),
                        image: pokemonDetails.data.sprites.front_default,
                        stats: {
                            hp: pokemonDetails.data.stats[0].base_stat,
                            attack: pokemonDetails.data.stats[1].base_stat,
                            defense: pokemonDetails.data.stats[2].base_stat,
                            specialAttack: pokemonDetails.data.stats[3].base_stat,
                            specialDefense: pokemonDetails.data.stats[4].base_stat,
                            speed: pokemonDetails.data.stats[5].base_stat,
                        },
                    };
                })
            );

            response.json(ResponseMessage.from(detailedPokemonList));
        } catch (error) {
            if (error.response && error.response.status === 404) {
                response.status(404).json(CustomStatusMessage.from(null, 404, "Pokemon no encontrado"));
            } else {
                response.status(500).json(ErrorMessage.from(error));
            }
        }
    },

    getPokemonByQuery: async (request, response) => {
        try {
            const { name, type, limit = 10, offset = 0 } = request.query;
            const pokemonUrl = `${POKEAPI_URL}?limit=${limit}&offset=${offset}`;
            const pokemonResponse = await axios.get(pokemonUrl);
            const pokemonList = pokemonResponse.data.results;
    
            const detailedPokemonList = await Promise.all(
                pokemonList.map(async (pokemon) => {
                    const pokemonDetails = await axios.get(pokemon.url);
                    return {
                        id: pokemonDetails.data.id,
                        name: pokemonDetails.data.name,
                        types: pokemonDetails.data.types.map(typeInfo => typeInfo.type.name),
                        image: pokemonDetails.data.sprites.front_default,
                        stats: {
                            hp: pokemonDetails.data.stats[0].base_stat,
                            attack: pokemonDetails.data.stats[1].base_stat,
                            defense: pokemonDetails.data.stats[2].base_stat,
                            specialAttack: pokemonDetails.data.stats[3].base_stat,
                            specialDefense: pokemonDetails.data.stats[4].base_stat,
                            speed: pokemonDetails.data.stats[5].base_stat,
                        },
                    };
                })
            );
    
            let filteredData = detailedPokemonList;
    
            if (name) {
                filteredData = detailedPokemonList.filter(pokemon =>
                    pokemon.name.toLowerCase().includes(name.toLowerCase())
                );
            }
    
            if (type) {
                const typeUrl = `${POKEAPI_URL_TYPE}${type}`;
                const typeResponse = await axios.get(typeUrl);
                const pokemonsOfType = typeResponse.data.pokemon.map(p => p.pokemon.name);
    
                filteredData = filteredData.filter(pokemon => pokemonsOfType.includes(pokemon.name));
            }
    
            response.json(ResponseMessage.from(filteredData));
        } catch (error) {
            if (error.response && error.response.status === 404) {
                response.status(404).json(CustomStatusMessage.from(null, 404, "Pokemon no encontrado"));
            } else {
                response.status(500).json(ErrorMessage.from(error));
            }
        }
    },
    
};

module.exports = PokemonSearchController;
