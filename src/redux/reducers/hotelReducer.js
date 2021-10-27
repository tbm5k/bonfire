import { SET_HOTELS, LIST_HOTELS } from "../types";

export const hotelReducer = (state = [], action) => {
    switch(action.type){
        case `${SET_HOTELS}`:
            return {...state, hotels: action.payload};
        case `${LIST_HOTELS}`:
            return state;
        default: 
            return state;
    }
}
