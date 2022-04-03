import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //Conditional Rendering option
    //1.Element Variable
    let command;
    if (cart.length === 0) {
        command = <div>
            <p>Please add Some items</p>
            <p>Add Please!!</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more.</p>
    }
    else {
        command = <p><small>Thanks for adding item.</small></p>
    }
    return (
        <div>
            <h2>This is cart.</h2>
            <h3>Item Selected: {cart.length}</h3>
            {command}
            {
                cart.map(tshirt => <p>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>Remove</button>
                </p>)
            }
        </div>
    );
};

export default Cart;