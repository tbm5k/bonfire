import axios from 'axios';
import React, {useState, createContext, useEffect} from 'react';

export const HotelContext = createContext();

export const HotelProvider = props => {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        async function getHotels(){
            try{
                const data = await axios.get("http://localhost:8080/continent/1/country/1/cities");
                setHotels(data.data);
            } catch (err){
                console.log("Couldnt fetch data. " + err)
            }
        }

        getHotels();
    }, []);

    return(
        <HotelContext.Provider value={[hotels, setHotels]}>
            {props.children}
        </HotelContext.Provider>
    );
}