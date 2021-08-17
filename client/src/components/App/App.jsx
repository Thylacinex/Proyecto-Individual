import React, { useState, useEffect } from 'react';
import styles from './style.css';
import { fetchPokemons, fetchPokemon } from '../../modules';
import { Details } from '../details/';
import { Cards } from '../cards/';

const DITTO = 'https://pokeapi.co/api/v2/pokemon/750/'; //require('../../ditto.json');

export const App = () => {

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
      <Cards pokemon={pokemon} />
    </>
     
  );
}
