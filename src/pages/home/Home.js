import React, {useContext} from 'react';
import './Home.css';
import Banner from '../../components/banner/Banner';
import Tile from '../../components/tile/Tile';
import {HotelContext} from '../../context/HotelContext';

function Home(){

    const [hotels, setHotels] = useContext(HotelContext);

    return(
        <div id="home">
            <Banner />
            <h2>Places to visit</h2>
            <div id="tiles">
            {
                hotels.map( tile => (
                    <Tile key={tile.id} cityName={tile.cityName} text={tile.text} image={tile.image}/>
                ))
            }
            </div>
        </div>
    );
}

export default Home;