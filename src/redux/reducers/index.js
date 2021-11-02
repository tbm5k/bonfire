import { hotelReducer } from "./hotelReducer";
import { continentReducer } from "./continentReducer";
import { combineReducers } from "redux";
import { countriesReducer } from "./countriesReducer";
import { citiesReducer } from "./citiesReducer";

const reducers = combineReducers({
    continents: continentReducer,
    hotels: hotelReducer,
    countries : countriesReducer,
    cities: citiesReducer
})

export default reducers;