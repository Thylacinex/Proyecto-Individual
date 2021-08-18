import axios from 'axios';
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?offset=9&limit=9';
const DITTO = 'https://pokeapi.co/api/v2/pokemon/ditto/';

const formatPokemonData = (pokemon) => { // esta funcion va del lado del server, trae solo la data q necesito
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

  const fetchPokemons = async () => {
    const data = await axios.get(BASE_URL).then(res => res.data);
    return data;
  }

  const fetchPokemon = async (pokemonUrl) => {
    const data = await axios.get(pokemonUrl).then(res => {return res.data});
    return formatPokemonData(data);
  }

  export { formatPokemonData, fetchPokemons, fetchPokemon };