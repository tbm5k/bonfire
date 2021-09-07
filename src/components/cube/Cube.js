import React from 'react';
import './Cube.css'

export default function Cube({placeName, offer}){
    return(
        <div className="cube">
            <img src="https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg" alt=""/>
            <p className="text placeName">{placeName}</p>
            <p className="text">{offer}</p>
        </div>
    );
}