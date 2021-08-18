import React from 'react';
import styles from './style.css';

export const Page = ({ pokemon }) => {

    const { name, id, img, types } = pokemon;

    return (
        // <div id="cards">
            
            <figure class={`card__small card--${types[0]}`}>
                <div class="card__image-container">
                <img src={img.small} alt={name} class="card__image" />   
                </div>

                <figcaption class="card__caption">
                    <h4 class="card__name">{name} <br />#{id.toString().padStart(3, '0')}</h4>
            
                    <div class="card__type-simplified">
                        {types.map(type => {
                            return (
                                <div class={`card__type__small type--${type}`}>
                    
                                </div>
                            )
                        })}  
                    </div>

                </figcaption>

            </figure>

        // </div>
    )

}
