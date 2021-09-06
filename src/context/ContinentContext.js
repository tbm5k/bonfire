import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const ContinentContext = createContext();

export const ContinentProvider = ({children}) => {
    
    const [continents, setContinents] = useState([]);

    useEffect(() => {
        async function getContinents(){
            let data = await axios.get('localhost:8080/continents')
            setContinents(data.data)
        }
        getContinents();
    }, []);

    return(
        <ContinentContext.Provider value={continents}>
            {children}
        </ContinentContext.Provider>
    );
}