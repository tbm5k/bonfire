import axios from "axios"
import { FETCH_HOTELS } from "../types"

export const fetchHotels = () => async dispatch => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/continent/1/country/1/cities`)
    .then( res => {
        dispatch({type: FETCH_HOTELS, payload: res.data})
    })
    .catch( err => {
        console.log(`Error message: ${err}`)
    })
}
