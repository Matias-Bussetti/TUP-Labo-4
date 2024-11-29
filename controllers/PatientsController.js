const CustomStatusMessage = require("../models/CustomStatusMessage");
const ErrorMessage = require("../models/ErrorMessage");
const Patients = require("./../models/Patients");

const ResponseMessage = require("./../models/ResponseMessage");

const PatientsController = {
  index: async function (request, response) {
    try {
      const patients = await Patients.all();
      response.json(ResponseMessage.from(patients));
    } catch (error) {
      response.status(500).json(ErrorMessage.from(error));
    }
  },
  show: async (request, response) => {
    try {
      const patient = await Patients.whereId(request.params.id);
      if (!patient) {
        response
          .status(404)
          .json(
            CustomStatusMessage.from(
              null,
              404,
              "Patient With ID:" + request.params.id + " Not Found"
            )
          );
        return;
      }
      response.json(ResponseMessage.from(patient));
    } catch (error) {
      response.status(500).json(ErrorMessage.from(error));
    }
  },
  where: async (request, response) => {
    try {
      let patients = await Patients.all();

      if (
        request.query.age == undefined &&
        request.query.gender == undefined &&
        request.query.name == undefined
      ) {
        response
          .status(400)
          .json(
            CustomStatusMessage.from(null, 400, "Age or Gender param not found")
          );
        return;
      }
      const filterByName = (patient) => {
        if (request.query.name && request.query.name != "") {
          const inPatientFirstName = patient.name.first
            .toLowerCase()
            .includes(request.query.name.toLowerCase());
          const inPatientLastName = patient.name.last
            .toLowerCase()
            .includes(request.query.name.toLowerCase());
          return inPatientFirstName || inPatientLastName;
        }
        return true;
      };
      const filterByAge = (patient) => {
        if (request.query.age) return patient.dob.age == request.query.age;
        return true;
      };
      const filterByGender = (patient) => {
        if (request.query.gender) return patient.gender == request.query.gender;
        return true;
      };

      response.json(
        ResponseMessage.from(
          patients
            .filter(filterByAge)
            .filter(filterByGender)
            .filter(filterByName)
        )
      );
    } catch (error) {
      response.status(500).json(ErrorMessage.from(error));
    }
  },
};

module.exports = PatientsController;
