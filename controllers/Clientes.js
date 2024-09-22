const axios = require('axios');
const { request, response } = require('express');

const URL = process.env.URL_API_CLIENTES;

// Función para obtener todos los clientes
const getClientes = (req = request, res = response) => {
  axios.get(URL)
    .then((response) => {
      const { data = [] } = response;

      res.status(200).json({
        msg: 'Ok',
        data
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error
      });
    });
};

// Función para obtener cliente por ID
const getClientesId = (req = request, res = response) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      msg: 'Error',
      error: 'El parámetro id es obligatorio'
    });
  }

  axios.get(`${URL}/${id}`)
    .then((response) => {
      const { data } = response;

      if (!data) {
        return res.status(404).json({
          msg: 'Error',
          error: 'Cliente no encontrado'
        });
      }

      res.status(200).json({
        msg: 'Ok',
        data
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error: error.message
      });
    });
};

// Función para obtener clientes por género
const getClientesByGenero = (req = request, res = response) => {
  const { genero } = req.query; // Obtener el genero del query param

  if (!genero) {
    return res.status(400).json({
      msg: 'Error',
      error: 'El parámetro genero es obligatorio'
    });
  }

  axios.get(URL)
    .then((response) => {
      const { data = [] } = response;

      // Filtrar los clientes por género
      const filteredData = data.filter(cliente => cliente.Genero.toLowerCase() === genero.toLowerCase());

      if (filteredData.length === 0) {
        return res.status(404).json({
          msg: 'Error',
          error: 'No se encontraron clientes con el género especificado'
        });
      }

      res.status(200).json({
        msg: 'Ok',
        data: filteredData
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        msg: 'Error',
        error: error.message
      });
    });
};

module.exports = {
  getClientes,
  getClientesId,
  getClientesByGenero,
};
