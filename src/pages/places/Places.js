import React, {useContext} from 'react';
import './Places.css';
import Banner from '../../components/banner/Banner';
import {ContinentContext} from '../../context/ContinentContext';
import Cube from '../../components/cube/Cube';

export default function Places(){

    const [continents] = useContext(ContinentContext);

    console.log(continents)
    return(
        <div id="places">
            <div>
                <Banner />
            </div>
            <div id="continents">
                {
                    continents.map( continent => (
                        <Cube key={continent.continentId} />
                    ))
                }
            </div>
        </div>
    );
}