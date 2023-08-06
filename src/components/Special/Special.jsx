import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {
    const chain = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p>{chain}</p>
        </div>
    );
};

export default Special;