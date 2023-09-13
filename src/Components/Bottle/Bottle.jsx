import React from 'react';
import "./Bottle.css"

function Bottle({ bottle }) {
    console.log(bottle);
    const { name, img, price } = bottle;
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt="bottle image" />
            <p>$ {price}</p>
        </div>
    );
}

export default Bottle;