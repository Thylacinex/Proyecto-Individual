import React from 'react';
import styles from './style.css';

export const Page = ({ pokemon }) => {

    const { name, id, img, types, stats, weight, height } = pokemon;

    return (
        <>
            <figure className={`card card--${types[0]}`}>
                <div className="card__image-container">
                <img src={img.big} alt={name} className="card__image" />   
                </div>
            
                <figcaption className="card__caption">
                    <h1 className="card__name">{name} #{id.toString().padStart(3, '0')}</h1>
                    
                    <div className="card__type-container">
                        {types.map(type => {
                            return (
                                <h3 key={type} className={`card__type type--${type}`}>
                                    {type}
                                </h3>
                            )
                        })}
                    </div>
            
                    <table className="card__stats">
                        <tr>
                            <th>Vida</th>
                            <td>{stats.hp}</td>
                        </tr>

                        <tr>
                            <th>Ataque</th>
                            <td>{stats.attack}</td>
                        </tr>
                        
                        <tr>
                            <th>Defensa</th>
                            <td>{stats.defense}</td>
                        </tr>
                
                        <tr>
                            <th>Velocidad</th>  
                            <td>{stats.speed}</td>
                        </tr>
                    </table>
                
                    <div className="card__pokeinfo">
                        <h4 className="card__info">
                            <span className="card__label">Peso</span>
                            {weight}
                        </h4>
                        <h4 className="card__info">
                            <span className="card__label">Altura</span>
                            {height}
                        </h4>
                    </div>
                </figcaption>
            </figure>
        </>
    )

}
        