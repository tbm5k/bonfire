import { FETCH_HOTEL, FETCH_HOTELS } from "../types";

export const hotelReducer = (state = [], action) => {
    switch(action.type){
        case `${FETCH_HOTELS}`:
            return {...state, hotels: action.payload}
        case `${FETCH_HOTEL}`:
            return {...state, hotel: action.payload}
        default: 
            return state;
    }
}
