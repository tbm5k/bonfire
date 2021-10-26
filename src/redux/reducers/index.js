import { hotelReducer } from "./hotelReducer";
import { continentReducer } from "./continentReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    continents: continentReducer,
    hotels: hotelReducer
})

export default reducers;