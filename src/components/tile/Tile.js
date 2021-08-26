import React from 'react';
import './Tile.css';

function Tile(props){
    return(
        <div id="tile" style={{backgroundImage: `url(${props.image})`}}>
            <div className="caption">
                <h5>{props.cityName}</h5>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Tile;