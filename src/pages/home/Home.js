import React, {useContext} from 'react';
import './Home.css';
import Banner from '../../components/banner/Banner';
import Tile from '../../components/tile/Tile';
import {HotelContext} from '../../context/HotelContext';

function Home(){

    const [hotels] = useContext(HotelContext);
    console.log(hotels)
    return(
        <div id="home">
            <Banner />
            <h2>Places to visit</h2>
            <div id="tiles">
            {
                hotels.map( tile => (
                    <Tile key={tile.cityId} cityName={tile.cityName} text='' image={tile.hotelList[0].imageList[0] || 'null'}/>
                ))
            }
            </div>
        </div>
    );
}

export default Home;