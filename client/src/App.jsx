import React, { useState, useEffect } from 'react';
import styles from './style.css';
/* hooks */
import { fetchPokemons, fetchPokemon } from './hooks';
/* Components */
import { Details } from './components/details';
import { Cards } from './components/cards';
import { Navbar } from './components/navbar';

const DITTO = 'https://pokeapi.co/api/v2/pokemon/220/'; //require('../../ditto.json');

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState('');

  useEffect(async () => {

    const data = await fetchPokemon(DITTO);
    setPokemon(data);
    setIsLoading(false);
   
  }, [])
  
  if (isLoading) return 'Loading...';

  return (
    <>
      <Navbar pokemon={pokemon} />
      <Cards pokemon={pokemon} />
    </>
     
  );
}

export default App;
