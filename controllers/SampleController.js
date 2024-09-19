const { request, response } = require("express");

const SampleController = {
  getA: function (request, response) {
    response.json("hola mundo A");
  },
  getB: (request, response) => {
    response.json("hola mundo B");
  },
  getC: (request, response) => {
    response.json("hola mundo C");
  },
};

module.exports = SampleController;
