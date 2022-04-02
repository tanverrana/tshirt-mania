import React from 'react';
import "./Tshirt.css"

const Tshirt = (props) => {
    const { handleAddToCart, tshirt } = props;
    const { name, picture, price } = tshirt;
    return (
        <div className="tshirt">
            <img src={picture} alt="" />
            <h4>Name:{name}</h4>
            <p>Price:{price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;