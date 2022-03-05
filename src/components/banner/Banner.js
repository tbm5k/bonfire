import React from 'react';
import './Banner.css';
import Slideshow from '../slideshow/Slideshow';

function Banner({cityList}){
    return(
        <div id="banner">
            {
                cityList ? (
                    <Slideshow cities={cityList}/>
                ) : null
            }
        </div>
    );
}

export default Banner;