import { SET_HOTELS } from "../types"

export const setHotels = (hotels) => {
    return {
        type : SET_HOTELS, 
        payload : hotels
    }
}
