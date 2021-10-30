import { FETCH_COUNTRIES } from "../types"

export const countriesReducer = (state = [], action) => {
    switch(action.type){
        case `${FETCH_COUNTRIES}`:
            return {...state, countries: action.payload}
        default:
            return state;
    }
}