import axios from "axios"
import { FETCH_HOTEL, FETCH_HOTELS, POST_HOTEL } from "../types"

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

export const postHotel = () => async dispatch => {
    try{
        //add url path variables to make a post request to the correct api path
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}`)
        if(res.status == 200){
            dispatch({type: POST_HOTEL, payload: res.data})
        }
    }catch(err){
        console.log(err)
    }
}