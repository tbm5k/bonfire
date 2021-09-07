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
            <Banner />
                {
                    continents.map( continent => (
                        <div id="continents">
                            <h2>{continent.continentName}</h2>
                            {console.log(continent.countryList)}
                            <div id="countries">
                                {
                                    continent.countryList.map( country => (
                                        <div>
                                            <Cube key={country.countryId} placeName={country.countryName}/>                                
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
        </div>
    );
}