import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import "./Grandpa.css";
//Context Api
/* 
1.call create context with a default value
2. Set a variable of the context with upper case
3. Make sure you export the context to use ut ub other places
4. Wrap you child content using contextName.Provider
5.provide a value
6. to consume the context from child component
7.useContext hook and you will you need to pass the contextName
8. Make sure take notes..
  */
export const RingContext = createContext("diamond")

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = "Diamond Ring";

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[ornament, house, setHouse]}>
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