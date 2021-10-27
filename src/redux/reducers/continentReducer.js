import { SET_CONTINENTS, LIST_CONTINENTS } from "../types";

export const continentReducer = (state = [], action) => {
    switch(action.type){
        case `${SET_CONTINENTS}`:
            return {...state, continents: action.payload};
        case `${LIST_CONTINENTS}`:
            return state;
        default:
            return state;
    }
}
