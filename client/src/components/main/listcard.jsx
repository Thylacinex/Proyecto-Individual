import axios from "axios";

export const Listcard = ({ pokemon }) => {
   

    return (
        <>
           <h3>{pokemon && pokemon.name.replace(/^\w/, l => l.toUpperCase())}</h3>
           <img src={pokemon.sprites.front_default} alt="" />
           <h4>Tipos: {pokemon.types.map(t => t.type.name + " ")}</h4>
           
        </>
    )

}
