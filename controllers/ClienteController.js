const axios = require('axios')
const { request, response } = require('express')

const URL = process.env.URL_API_CLIENTES;

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
}

module.exports = {
  getClientes,
  
}
