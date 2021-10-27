import { SET_CONTINENTS } from "../types"

export const setContinents = (continents) => {
    return {
        type : SET_CONTINENTS, 
        payload : continents
    }
}
