const axios = require('axios');
const { request, response } = require('express');
const ResponseMessage = require('../models/ResponseMessage');
const ErrorMessage = require('../models/ErrorMessage');
const CustomStatusMessage = require('../models/CustomStatusMessage');

const URL = process.env.URL_API_CLIENTES;

// Función para obtener todos los clientes
const getClientes = (req = request, res = response) => {
  axios.get(URL)
    .then((apiResponse) => {
      const { data = [] } = apiResponse;
      res.status(200).json(ResponseMessage.from(data, 200));
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(ErrorMessage.from(error, 400));
    });
};

// Función para obtener cliente por ID
const getClientesId = (req = request, res = response) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json(CustomStatusMessage.from(null, 400, 'El parámetro id es obligatorio'));
  }

  axios.get(`${URL}/${id}`)
    .then((apiResponse) => {
      const { data } = apiResponse;

      if (!data) {
        return res.status(404).json(CustomStatusMessage.from(null, 404, 'Cliente no encontrado'));
      }

      res.status(200).json(ResponseMessage.from(data, 200));
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(ErrorMessage.from(error, 400));
    });
};

// Función para obtener clientes por género
const getClientesByGenero = (req = request, res = response) => {
  const { genero } = req.query;

  if (!genero) {
    return res.status(400).json(CustomStatusMessage.from(null, 400, 'El parámetro genero es obligatorio'));
  }

  axios.get(URL)
    .then((apiResponse) => {
      const { data = [] } = apiResponse;

      const filteredData = data.filter(cliente => cliente.Genero.toLowerCase() === genero.toLowerCase());

      if (filteredData.length === 0) {
        return res.status(404).json(CustomStatusMessage.from(null, 404, 'No se encontraron clientes con el género especificado'));
      }

      res.status(200).json(ResponseMessage.from(filteredData, 200));
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(ErrorMessage.from(error, 400));
    });
};

module.exports = {
  getClientes,
  getClientesId,
  getClientesByGenero,
};
