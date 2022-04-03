import React from 'react';
import { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import "./Grandpa.css";

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <button onClick={handleBuyAHouse}>Buy a house</button>
            <p>House:{house}</p>
            <section style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;