import React from 'react';
import './Home.css';
import Banner from '../../components/banner/Banner';
import Tile from '../../components/tile/Tile';

function Home(){

    const tiles = [
        {
            id: 1,
            cityName: 'Mombasa',
            text: 'Enjoy a holiday at the sea show',
            image: '../images/slideshow/dubai.jpg'
        },
        {
            id: 2,
            cityName: 'Nairobi',
            text: 'Enjoy a holiday at the sea show',
            image: '../images/slideshow/girrafe.jpg'
        },
        {
            id: 3,
            cityName: 'Maasai Mara',
            text: 'Enjoy a holiday at the sea show',
            image: '../images/slideshow/zebra.jpg'
        },
        {
            id: 4,
            cityName: 'Naivasha',
            text: 'Enjoy a holiday at the sea show',
            image: '../images/slideshow/girrafe2.jpg'
        }
    ];

    return(
        <div id="home">
            <Banner />
            <h2>Places to visit</h2>
            <div id="tiles">
            {
                tiles.map( tile => (
                    <Tile key={tile.id} cityName={tile.cityName} text={tile.text} image={tile.image}/>
                ))
            }
            </div>
        </div>
    );
}

export default Home;