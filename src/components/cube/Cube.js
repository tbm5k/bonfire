import React from 'react';
import './Cube.css'

export default function Cube({placeName, offer, image}){
    return(
        <div className="cube">
            <img src={`${image}`} alt=""/>
            <p className="text placeName">{placeName}</p>
            <p className="text">{offer}</p>
        </div>
    );
}