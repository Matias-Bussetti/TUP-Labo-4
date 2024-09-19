require('dotenv').config()
const Server = require('./models/server')

const servidor = new Server()

servidor.listen()
