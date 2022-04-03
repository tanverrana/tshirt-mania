import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ornament, house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <p>Gift:{ornament}</p>
            <p><small>House:{house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Set House</button>
        </div>
    );
};

export default Special;