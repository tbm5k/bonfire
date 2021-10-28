import { FETCH_HOTELS } from "../types";

export const hotelReducer = (state = [], action) => {
    switch(action.type){
        case `${FETCH_HOTELS}`:
            return {...state, hotels: action.payload}
        default: 
            return state;
    }
}
