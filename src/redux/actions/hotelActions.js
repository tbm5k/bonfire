import { SET_HOTELS, LIST_HOTELS } from "../types"

export const setHotels = (hotels) => {
    return {
        type : SET_HOTELS, 
        payload : hotels
    }
}

export const listHotels = () => {
    return {
        type : LIST_HOTELS
    }
}