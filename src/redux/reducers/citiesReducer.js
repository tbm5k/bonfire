import { FETCH_CITIES } from "../types";

export const citiesReducer = (state = [], action) => {
    switch(action.type){
        case `${FETCH_CITIES}`:
            return {...state, cities: action.payload};
        default:
            return state;
    };
};