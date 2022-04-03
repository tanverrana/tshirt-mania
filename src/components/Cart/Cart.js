import React from 'react';
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    //Conditional Rendering option
    //1.Element Variable
    //2. Ternary operator condition ? true :false
    //3. && Operator
    //4.|| operator
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

            {
                cart.map(tshirt => <p>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>Remove</button>
                </p>)
            }
            {cart.length === 0 || <p className="orange">Yay! You are Buying</p>}
            {cart.length === 2 && <div className="orange">
                <h3>Try Go now!</h3>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Clear all</button>}
            {cart.length === 4 && <button className="orange">Review Order</button>}
        </div>
    );
};

export default Cart;