import React from 'react';
import './Cart.css';

const cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please Add some Products</p>
    }
    return (
        <div>
            <h2 className={cart.length === 0 ? 'red' : 'blue'}>Order Summary:{cart.length}</h2>
            {message}
            <p className={` bold ${cart.length === 3 ? 'purple' : 'orange'}`}>something</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>

                </p>)
            }
            {
                cart.length === 2 && <p>Deouble dhamaka</p>
            }
            {
                cart.length === 3 || <h3>not 3</h3>
            }
        </div>
    );
};

export default cart;