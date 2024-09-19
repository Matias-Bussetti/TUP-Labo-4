const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  rutas () {
  
    this.app.use('/api/v1/cliente', require('../routes/Cliente'))
    /*   this.app.use('*', (req, res) => {
            res.status(404).send('Page not found');
        }); // Integrante 2 */
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}

module.exports = Server