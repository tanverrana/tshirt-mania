import React from 'react';
import { useState } from 'react';
import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import "./Home.css"

const Home = () => {
    const [tshirts, setTshirt] = useTshirt();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedItem) => {
        const newCart = [...cart, selectedItem];
        setCart(newCart);
    }
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setCart(rest)
    }
    return (
        <div className="home-container">
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>

            </div>
        </div>
    );
};

export default Home;