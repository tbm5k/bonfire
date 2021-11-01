import axios from 'axios';
import { FETCH_COUNTRIES } from '../types';

export const fetchCountries = (continentId) => async (dispatch) => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/continent/${continentId}/countries`)
    .then(res => {
        dispatch({
            type: FETCH_COUNTRIES,
            payload: res.data
        })
    })
    .catch( err => {
        console.error(err)
    })
}