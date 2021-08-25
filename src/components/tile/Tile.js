import React from 'react';
import './Tile.css';

function Tile(props){
    return(
        <div id="tile" style={{backgroundImage: `url(${require("../images/slideshow/dubai.jpg")})`}}>
            <h4>{props.cityName}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default Tile;