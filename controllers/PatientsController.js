const { request, response } = require("express");
const axios = require("axios");
const env = process.env;
const moment = require("moment"); // require

const PatientsController = {
  index: function (request, response) {
    const date = moment().add(14, "d").format("YYYY-MM-DD");
    console.log(
      "https://api.weatherapi.com/v1/future.json?key=" +
        env.WEATHER_API_KEY +
        "&q=%22Buenos%20Aires%22&lang=es&dt=" +
        date
    );
    axios
      .get(
        "https://api.weatherapi.com/v1/future.json?key=" +
          env.WEATHER_API_KEY +
          "&q=%22Buenos%20Aires%22&lang=es&dt=" +
          date
      )
      .then((res) => res.data)
      .then((data) => {
        response.json(data);
      })
      .catch((error) => {
        console.log(error);
        let status = error.code == "ENOTFOUND" ? 404 : 500;
        response
          .status(status)
          .json({ message: error.message, code: error.code, status });
      });
  },
  show: async (request, response) => {
    const date = moment().add(14, "d").format("YYYY-MM-DD");

    axios
      .get(
        "https://api.weatherapi.com/v1/future.json?key=" +
          env.WEATHER_API_KEY +
          "&q=" +
          request.params.zip +
          "&lang=es&dt=" +
          date
      )
      .then((res) => res.data)
      .then((data) => {
        response.json(data);
      })
      .catch((error) => {
        console.log(error);
        let status = error.code == "ENOTFOUND" ? 404 : 500;
        response
          .status(status)
          .json({ message: error.message, code: error.code, status });
      });
  },
  parameters: (request, response) => {
    const date = moment().add(14, "d").format("YYYY-MM-DD");

    axios
      .get(
        "https://api.weatherapi.com/v1/future.json?key=" +
          env.WEATHER_API_KEY +
          "&q=%22Buenos%20Aires%22&lang=es&dt=" +
          date
      )
      .then((res) => res.data)
      .then((data) => {
        response.json(
          data.forcast.forcastday[0].hour.filter((ahour) =>
            ahour.condition.text.includes(request.query.forecast)
          )
        );
      })
      .catch((error) => {
        console.log(error);
        let status = error.code == "ENOTFOUND" ? 404 : 500;
        response
          .status(status)
          .json({ message: error.message, code: error.code, status });
      });
  },
};

module.exports = PatientsController;
