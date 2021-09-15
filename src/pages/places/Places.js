import React, {useContext} from 'react';
//import './Places.css';
import Banner from '../../components/banner/Banner';
import {ContinentContext} from '../../context/ContinentContext';
import Cube from '../../components/cube/Cube';

export default function Places(){

    const [continents] = useContext(ContinentContext);

    console.log(continents)
    return(
        <div>
            <Banner />
                {
                    continents.map( continent => (
                        <div className='flex flex-col mt-9 mb-9'>
                            <h2 className='text-center text-4xl font-bold'>{continent.continentName}</h2>
                            {console.log(continent.countryList)}
                            <div className='flex flex-row justify-evenly overflow-hidden mt-6 mb-6'>
                                {
                                    continent.countryList.map( country => (
                                        <div>
                                            <Cube key={country.countryId} placeName={country.countryName}/>                                
                                        </div>
                                    ))
                                }
                            </div>
                            <button className='bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-52 h-11 mx-auto'>More</button>
                        </div>
                    ))
                }
        </div>
    );
}