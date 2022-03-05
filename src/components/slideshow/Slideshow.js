import React from 'react';
import './Slideshow.css';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';

function Slideshow({cities}){

    return(
        <div id="slideshow">
            <Slide>
                {
                    cities ? (
                        cities.map( city => (
                            city.hotelList.map( hotel => (
                                hotel.imageList.map(image => (
                                    <img src={image.imageUrl}/>
                                ))
                            ))
                    ))
                    ) : null
                }
            </Slide>
        </div>
    );
}

export default Slideshow;