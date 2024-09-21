const { request, response } = require("express");
const axios = require("axios");

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
            response.status(200).json({
                status: 200,
                msg: "Pokemon encontrado",
                data: filteredData,
            });
    } catch(error){
        response.status(500).json({
            message: "Error consumiendo datos de la API de Pokemon",
            error: error.message,
        });
    }
    }, //Acá termina la primera peticion

    getPokemonSearchAll: async (request, response) => {
        try{
            // Aca armo la url
            const pokemonUrl =  `${POKEAPI_URL}`;

            const pokemonData = await axios.get(pokemonUrl,{
                params:{
                    limit:50
                }
            });

            // Hacemos solicitudes adicionales para obtener los detalles de cada Pokémon
            const pokemonDetallesConsulta = pokemonData.data.results.map(async (pokemon) => { //
                const pokemonDetalles = await axios.get(pokemon.url); //los detalles del Pokémon se almacenan en la variable pokemonDetalles
                return {
                    id: pokemonDetalles.data.id,
                    name: pokemonDetalles.data.name,
                    types: pokemonDetalles.data.types.map(typeInfo => typeInfo.type.name)
                };
            });

             // Esperamos a que todas las promesas de detalles se resuelvan
            const filteredData = await Promise.all(pokemonDetallesConsulta);

            response.status(200).json({
            status: 200,
            msg: "Pokémon encontrados",
            data: filteredData,
        });


        }catch(error){
            response.status(500).json({
                message: "Error consumiendo datos de la API de Pokemon",
                error: error.message,
            });
        }
    }
}

module.exports = PokemonSearchController;