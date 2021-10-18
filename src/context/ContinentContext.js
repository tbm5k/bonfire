import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const ContinentContext = createContext();

export const ContinentProvider = ({children}) => {
    
    const [continents, setContinents] = useState([]);

    useEffect(() => {
    
        async function getContinents(){
            try{
                const data = await axios.get("http://localhost:8080/continents");
                setContinents(data.data);
            } catch (err){
                console.log("Error : " + err)
            }
        }

        getContinents();
    }, []);

    return(
        <ContinentContext.Provider value={[continents]}>
            {children}
        </ContinentContext.Provider>
    );
}