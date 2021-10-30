import React from 'react'
import Cube from '../../components/cube/Cube';

const Countries = () => {
    return (
        <div className="flex flex-row justify-evenly">
            <Cube />
            <Cube />
            <Cube />
        </div>
    );
};

export default Countries;