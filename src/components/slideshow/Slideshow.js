import React from 'react';
import './Slideshow.css';
import photo from '../images/slideshow/giraffe.jpg';

function Slideshow(){

    return(
        <div id="slideshow">
            <img src={photo} alt="photos of scenaries"/>
        </div>
    );
}

export default Slideshow;