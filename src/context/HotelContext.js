import React, {useState, createContext} from 'react';

export const HotelContext = createContext();

export const HotelProvider = props => {

    const [hotels, setHotels] = useState([
        {
            id: 1,
            cityName: 'Mombasa',
            text: 'Enjoy a holiday at the sea show',
            image: '../images/slideshow/dubai.jpg'
        },
        {
            id: 2,
            cityName: 'Nairobi',
            text: 'Enjoy a holiday at the sea show',
            image: '../images/slideshow/girrafe.jpg'
        },
        {
            id: 3,
            cityName: 'Maasai Mara',
            text: 'Enjoy a holiday at the sea show',
            image: '../images/slideshow/zebra.jpg'
        },
        {
            id: 4,
            cityName: 'Naivasha',
            text: 'Enjoy a holiday at the sea show',
            image: '../images/slideshow/girrafe2.jpg'
        }
    ]);

    return(
        <HotelContext.Provider value={[hotels, setHotels]}>
            {props.children}
        </HotelContext.Provider>
    );
}