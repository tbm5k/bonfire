import React, {useContext} from 'react';
import './Places.css';
import Banner from '../../components/banner/Banner';
import {ContinentContext} from '../../context/ContinentContext';

export default function Places(){

    const continents = useContext(ContinentContext);

    return(
        <div id="places">
            <div>
                <Banner />
            </div>
            <div id="continents">
                {
                    continents
                }
            </div>
        </div>
    );
}