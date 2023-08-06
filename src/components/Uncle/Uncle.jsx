import React, { useContext } from 'react';
import Cousine from '../Cousine/Cousine';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>gp Money: {money}</p>
            <button onClick={() => { setMoney(money + 100) }}>send 100</button>
            <section className='flex'>
                <Cousine>Nabil</Cousine>
                <Cousine>Nabila</Cousine>
            </section>
        </div>
    );
};

export default Uncle;