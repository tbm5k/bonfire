import React from 'react';
import './Home.css';
import Banner from '../banner/Banner';
import Tile from '../tile/Tile';

function Home(){

    const tiles = [
        {
            id: 1,
            cityName: 'Mombasa',
            text: 'Enjoy a holiday at the sea show'
        },
        {
            id: 2,
            cityName: 'Nairobi',
            text: 'Enjoy a holiday at the sea show'
        },
        {
            id: 3,
            cityName: 'Maasai Mara',
            text: 'Enjoy a holiday at the sea show'
        },
        {
            id: 4,
            cityName: 'Naivasha',
            text: 'Enjoy a holiday at the sea show'
        }
    ];

    return(
        <div id="home">
            <Banner />
            <h2>Places to visit</h2>
            <div id="tiles">
            {
                tiles.map( tile => (
                    <Tile key={tile.id} cityName={tile.cityName} text={tile.text}/>
                ))
            }
            </div>
        </div>
    );
}

export default Home;