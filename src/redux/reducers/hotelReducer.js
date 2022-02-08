import { FETCH_HOTEL, FETCH_HOTELS, POST_HOTEL } from "../types";

export const hotelReducer = (state = [], action) => {
    switch(action.type){
        case `${FETCH_HOTELS}`:
            return {...state, hotels: action.payload}
        case `${FETCH_HOTEL}`:
            return {...state, hotel: action.payload}
        case `${POST_HOTEL}`:
            return {...state, newHotel: action.payload}
        default: 
            return state;
    }
}
