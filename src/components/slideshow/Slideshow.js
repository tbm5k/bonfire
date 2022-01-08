import React from 'react';
import './Slideshow.css';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';

function Slideshow(){

    const images = [
        {url: "https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg"},
        {url: "https://images.freeimages.com/images/large-previews/60f/dubai-desert-safari-1407254.jpg"},
    ];

    return(
        <div id="slideshow">
            <Slide>
                {
                    images.map( image => (
                        <img src={image.url}/>
                    ))
                }
            </Slide>
            {/* <img src={photo} alt="photos of scenaries"/> */}
        </div>
    );
}

export default Slideshow;