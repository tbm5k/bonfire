import axios from "axios"
import { FETCH_HOTEL, FETCH_HOTELS } from "../types"

export const fetchHotels = () => async dispatch => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/continent/1/country/1/cities`)
    .then( res => {
        dispatch({type: FETCH_HOTELS, payload: res.data})
    })
    .catch( err => {
        console.log(`Error message: ${err}`)
    })
}

export const fetchHotel = (url) => async dispatch => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}${url}`)
    .then( res => {
        dispatch({type: FETCH_HOTEL, payload: res.data})
    })
    .catch( err => {
        console.log(`Err message: ${err}`)
    })
}