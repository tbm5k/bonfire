import axios from 'axios';
import { FETCH_COUNTRIES } from '../types';

export const fetchCountries = () => async (dispatch) => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/continent`)
    .then(res => {
        console.log(res)
        dispatch({
            type: FETCH_COUNTRIES,
            payload: res.data
        })
    })
    .catch( err => {
        console.error(err)
    })
}