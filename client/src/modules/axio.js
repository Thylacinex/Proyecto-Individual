const axios = require("axios");

const fetchPokemon = async (pokemon) => {
    const data = await axios.get(pokemon).then(res => {return res.data});
    console.log(data)
  }

  const data = fetchPokemon('https://pokeapi.co/api/v2/pokemon/ditto/');

  console.log(data);