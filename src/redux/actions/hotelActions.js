import axios from "axios"
import { FETCH_HOTELS } from "../types"

export const fetchHotels = (url) => async dispatch => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/continent/1/country/1/cities`)
    // await axios.get(`${process.env.REACT_APP_BASE_URL}${url}`)
    .then( res => {
        dispatch({type: FETCH_HOTELS, payload: res.data})
    })
    .catch( err => {
        console.log(`Error message: ${err}`)
    })
}
