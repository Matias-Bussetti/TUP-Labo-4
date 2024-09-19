const axios = require('axios')
const { request, response } = require('express')

const getClientes = (req = request, res = response) => {

  axios.get(`https://66cfb9ec181d059277dc2c31.mockapi.io/Cliente`)
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
  getClientes
}
