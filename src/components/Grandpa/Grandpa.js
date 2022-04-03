import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import "./Grandpa.css";

export const RingContext = createContext("diamond")

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = "Diamond Ring";

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={house}>
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
        </RingContext.Provider>
    );
};

export default Grandpa;