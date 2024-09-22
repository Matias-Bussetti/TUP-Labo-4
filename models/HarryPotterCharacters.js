const axios = require('axios');

class HarryPotterCharacters {
  static async fetch() {
    const response = await axios.get('https://hp-api.onrender.com/api/characters');
    const results = response.data;

    return results.map((character, index) => {
      return {
        id: index, 
        name: character.name,
        gender: character.gender,
        house: character.house,
        actor: character.actor,
        ancestry: character.ancestry,
        alternate_names: character.alternate_names,
      };
    });
  }

  static async all() {
    const characters = await this.fetch();
    return characters;
  }

  static async whereId(id) {
    const characters = await this.fetch();
    return characters.find((character) => character.id === id);
  }

  static async filterByQuery({ name, gender, house, actor, ancestry, alternate_names }) {
    const characters = await this.fetch();
    
    return characters.filter(character => {
        return (!name || character.name.toLowerCase().includes(name.toLowerCase())) &&
        (!gender || character.gender.toLowerCase() === gender.toLowerCase()) &&
        (!house || character.house.toLowerCase() === house.toLowerCase()) &&
        (!actor || character.actor.toLowerCase().includes(actor.toLowerCase())) &&
        (!ancestry || character.ancestry.toLowerCase().includes(ancestry.toLowerCase())) &&
        (!alternate_names || character.alternate_names.some(altName => altName.toLowerCase().includes(alternate_names.toLowerCase())));
    });
  }
}

module.exports = HarryPotterCharacters;
