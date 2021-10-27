import { SET_HOTELS } from "../types";

export const hotelReducer = (state = [], action) => {
    switch(action.type){
        case `${SET_HOTELS}`:
            return {...state, hotels: action.payload};
        default: 
            return state;
    }
}
