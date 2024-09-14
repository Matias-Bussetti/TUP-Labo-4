const { request, response } = require("express");
const axios = require("axios");

const getData = () =>
  new Promise((resolve, reject) => {
    axios
      .get("https://randomuser.me/api/?results=100&format=json")
      .then((res) => res.data.results)
      .then((results) => {
        return results.map((patient) => {
          return {
            gender: patient.gender,
            email: patient.email,
            name: patient.name,
            dob: patient.dob,
            //location: patient.location,
            id: patient.id,
            picture: patient.picture,
          };
        });
      })
      .then((patients) => resolve(patients))
      .catch((error) => {
        reject(error);
      });
  });

const PatientsController = {
  index: function (request, response) {
    getData()
      .then((data) => response.json(data))
      .catch((error) => {
        console.log(error);
        let status = error.code == "ENOTFOUND" ? 404 : 500;
        response
          .status(status)
          .json({ message: error.message, code: error.code, status });
      });
  },
  show: async (request, response) => {
    try {
      const patients = await getData();
      console.log(patients);
      response.json("{ message: error.message, code: error.code, status }");
    } catch (error) {
      console.log(error);
      let status = error.code == "ENOTFOUND" ? 404 : 500;
      response
        .status(status)
        .json({ message: error.message, code: error.code, status });
    }
  },
  parameters: (request, response) => {
    req.query.color1 === "red"; // true
    req.query.color2 === "blue"; // true
  },
};

module.exports = PatientsController;
