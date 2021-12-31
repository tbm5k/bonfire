import axios from "axios"
import { FETCH_CONTINENTS} from "../types"

export const fetchContinents = () => async dispatch => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/continent`)
    .then( res => {
        dispatch({type: FETCH_CONTINENTS, payload: res.data})
    })
    .catch( err => {
        console.log(`Error message: ${err}`)
    })
}