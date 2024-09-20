const axios = require("axios");

class Patients {
  static async fetch() {
    const response = await axios.get(
      "https://randomuser.me/api/?seed=foobar&results=100&format=json"
    );

    const results = response.data.results;

    return results.map((patient) => {
      return {
        gender: patient.gender,
        email: patient.email,
        name: patient.name,
        dob: patient.dob,
        location: patient.location,
        id: patient.login.uuid,
        picture: patient.picture,
        nat: patient.nat,
        dob: patient.dob,
      };
    });
  }

  static async all() {
    const patients = await this.fetch();
    return patients;
  }

  static async whereId(id) {
    const patients = await this.fetch();
    return patients.filter((patient) => patient.id === id)[0];
  }
}

module.exports = Patients;
