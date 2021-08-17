import axios from "axios";
import { useState, useEffect } from 'react';
import { Listcard } from "./listcard"

export const List = ({ pokemonsUrl }) => {
    const [pokemons, setPokemons] = useState(null);
    console.log(pokemonsUrl)

    useEffect(async () => {

       const data = await pokemonsUrl.map(async p => {await axios.get(p).then(res => res.data)});
       setPokemons(data)

    }, [])
    
    if (!pokemons) return 'Loading...';
    
    return (
        <>
            {pokemonsUrl.map(p => {
               return <Listcard pokemonUrl={p} key={p} />
            })}
        </>
    )

}

//Imagen, nombre, tipos, Estadisticas(vida, fuerza, defensa, velocidad), altura y peso
/* {pokemons && pokemons.map(p => p.name).map(p => (
                <div key={p}>{p.replace(/^\w/, l => l.toUpperCase())}</div>
            ))} */