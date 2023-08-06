import React from 'react';
import Cousine from '../Cousine/Cousine';

const Aunt = ({ ring }) => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousine>Abir</Cousine>
                <Cousine ring={ring} hasFriend={true}>Nibir</Cousine>
            </section>
        </div>
    );
};

export default Aunt;