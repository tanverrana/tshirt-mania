import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>This is cart.</h2>
            <h3>Item Selected: {cart.length}</h3>
            {
                cart.map(tshirt => <p>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>Remove</button>
                </p>)
            }
        </div>
    );
};

export default Cart;