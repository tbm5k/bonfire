import React from 'react';
import './Tile.css';

function Tile(props){
    return(
        <div id="tile" style={{backgroundImage: `url(${require("../images/slideshow/dubai.jpg")})`}}>
            <div className="caption">
                <h5>{props.cityName}</h5>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Tile;