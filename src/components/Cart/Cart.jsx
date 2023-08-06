import React from 'react';
import './Cart.css'
const cart = ({ cart, handleRemoveFromCart }) => {

    return (
        <div>
            <h2>Order Summary:{cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt.id)}>X</button>

                </p>)
            }
        </div>
    );
};

export default cart;