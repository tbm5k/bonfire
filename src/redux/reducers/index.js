import { hotelReducer } from "./hotelReducer";
import { continentReducer } from "./continentReducer";
import { combineReducers } from "redux";
import { countriesReducer } from "./countriesReducer";

const reducers = combineReducers({
    continents: continentReducer,
    hotels: hotelReducer,
    countries : countriesReducer
})

export default reducers;