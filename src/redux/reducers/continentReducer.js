import { SET_CONTINENTS } from "../types";

export const continentReducer = (state = [], action) => {
    switch(action.type){
        case `${SET_CONTINENTS}`:
            return {...state, continents: action.payload};
        default:
            return state;
    }
}
