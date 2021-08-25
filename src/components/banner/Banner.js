import React from 'react';
import './Banner.css';
import photo from '../images/giraffe.jpg';

function Banner(){
    return(
        <div id="banner">
            <img src={photo} alt="photos of scenaries"/>
        </div>
    );
}

export default Banner;