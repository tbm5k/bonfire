import { SET_CONTINENTS, LIST_CONTINENTS } from "../types"

export const setContinents = (continents) => {
    return {
        type : SET_CONTINENTS, 
        payload : continents
    }
}

export const listContinents = () => {
    return {
        type : LIST_CONTINENTS
    }
}