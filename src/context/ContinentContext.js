import React, {createContext} from 'react';

export const ContinentContext = createContext();

export const ContinentProvider = ({children}) => {
    return(
        <ContinentContext.Provider value={"Continents list"}>
            {children}
        </ContinentContext.Provider>
    );
}