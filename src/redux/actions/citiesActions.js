import axios from 'axios'
import { FETCH_CITIES } from '../types'

export const fetchCities = (url) => async dispatch => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}${url}`)
    .then( res => {
        dispatch({
            type: FETCH_CITIES,
            payload: res.data
        })
    })
    .catch( err => {
        console.log(err)
    })
}