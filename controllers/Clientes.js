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
  const { id } = req.query; // Obtiene el id de los query params

  if (!id) {
    return res.status(400).json({
      msg: 'Error',
      error: 'El parámetro id es obligatorio'
    });
  }

  axios.get(`${URL}/${id}`) // Consulta la URL con el id
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

module.exports = {
  getClientes,
  getClientesId,
};
