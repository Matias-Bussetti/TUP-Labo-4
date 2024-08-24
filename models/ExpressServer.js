class ExpressServer {
  constructor() {
    this.express = require("express"); // Se requiere express
    this.app = this.express(); // Se inicializa app llamando a express
    this.port = process.env.PORT || 3000; // Se establece el puerto
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = ExpressServer;
