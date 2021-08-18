const BASE_URL = `https://pokeapi.co/api/v2`; //?limit=${limit}&offset=${offset} const limit = 1; const offset = 9;
const axios = require('axios');

// If id or name is set, makes an axios call with that data an format the output Obj.
// If is not define, fetch the entyre 20 pokemons (API default)

const formatPokemonData = (pokemon) => {
    let { name, id, weight, height, types, stats } = pokemon;
  
    const img = {
      small: pokemon.sprites.front_default,
      big: pokemon.sprites.other['official-artwork'].front_default
    };
  
    types = types.map(t => t.type.name);
  
    stats = stats.map(stat => {
        const obj = {};
        obj[stat.stat.name] = stat.base_stat;
        return obj;
    });
  
    stats = Object.assign(...stats);
  
    return { name, id, img, weight, height, types, stats };
  
  }

const getData = async (idOrName = '') => {
    
    const pokemons = await axios
            .get(`${BASE_URL}/pokemon/${idOrName}`)
            .then(res => {
                if(idOrName) { // Si existe un identifier formatea la data de ese pokemon
                  return formatPokemonData(res.data); 
                } 
                return res.data; //si no existe trae la data de todos
            });

 return pokemons; //retorna el JSON ya sea todos los chobis o solo el indicado.

};

const getTypes = () => {
    return axios
              .get(BASE_URL + '/type')
              .then(res => {
                return res.data.results.map(t => t.name) //mapea para dejar solo el nombre del Type
              });
            
}

module.exports = { getData, getTypes, formatPokemonData };