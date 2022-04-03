import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [ornament, house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Aunty:</h3>
            <p>House:{house}</p>
            <p>Gift:{ornament}</p>
            <button onClick={() => setHouse(house + 1)}>Aunty House</button>
        </div>
    );
};

export default Aunty;