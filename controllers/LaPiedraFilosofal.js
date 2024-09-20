const axios = require('axios')
const { request, response } = require('express')

const getPersonaje = (req = request, res = response) => {
  const { lastname = '', year = '', category = '', page = '' } = req.query
  console.log(lastname, year, category, page)

  const filtro = (lastname) ? `?lastname=${lastname}` : ''

  axios.get(`https://hp-api.herokuapp.com/api/characters/${filtro}`)
    .then((response) => {
      const { data = [] } = response
      // handle success
      // console.log(data);

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

// eslint-disable-next-line no-unused-vars
const getEmpleadoOld = (req = request, res = response) => {
  const { idEmpleado } = req.params
  console.log(idEmpleado)

  axios.get('https://66c78f59732bf1b79fa6e8c7.mockapi.io/api/v1/empleados')
    .then((response) => {
      const { data } = response

      const newArray = data.filter(item => item.id === idEmpleado)
      // handle success
      // console.log(data);

      res.status(200).json({
        msg: 'Ok',
        data: newArray
      })
    })
    .catch((error) => {
      // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

const getEmpleado = (req = request, res = response) => {
  const { idEmpleado = '' } = req.params
  console.log(idEmpleado)

  axios.get(`https://hp-api.herokuapp.com/api/characters/${idPersonaje}`)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

module.exports = {
  getPersonaje,
  getEmpleado
}