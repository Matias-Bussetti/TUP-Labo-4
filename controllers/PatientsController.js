const Patients = require("./../models/Pantients");

const PatientsController = {
  index: async function (request, response) {
    try {
      const patients = await Patients.all();
      response.json(patients);
    } catch (error) {
      console.log(error);
      let status = error.code == "ENOTFOUND" ? 404 : 500;
      response
        .status(status)
        .json({ message: error.message, code: error.code, status });
    }
  },
  show: async (request, response) => {
    try {
      const patient = await Patients.whereId(request.params.id);
      if (!patient) {
        response
          .status(404)
          .json({ message: "patient not found", status: 404 });
        return;
      }
      response.json(patient);
    } catch (error) {
      console.log(error);
      let status = error.code == "ENOTFOUND" ? 404 : 500;
      response
        .status(status)
        .json({ message: error.message, code: error.code, status });
    }
  },
  where: async (request, response) => {
    try {
      let patients = await Patients.all();

      if (request.query.age == undefined && request.query.gender == undefined) {
        response
          .status(400)
          .json({ message: "Age or Gender param not found", status: 400 });
        return;
      }

      const filterByAge = (patient) => {
        if (request.query.age) return patient.dob.age == request.query.age;
        return true;
      };
      const filterByGender = (patient) => {
        if (request.query.gender) return patient.gender == request.query.gender;
        return true;
      };

      response.json(
        patients.filter((p) => filterByAge(p)).filter((p) => filterByGender(p))
      );
    } catch (error) {
      console.log(error);
      let status = error.code == "ENOTFOUND" ? 404 : 500;
      response
        .status(status)
        .json({ message: error.message, code: error.code, status });
    }
  },
};

module.exports = PatientsController;
