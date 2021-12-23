import {Dispatch} from "react";
import {filmApi, FilmType} from "../Api/Api";




export type InitialState = {
 
    isFetching: boolean | null
}

const Search: InitialState = {
    isFetching: false,
}


export const ErrorReducer = (state = Search, action: GlobalType): InitialState => {
    switch (action.type) {
       
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default :
            return state
    }
}



export const isLoading = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}




export type isFetchingType = ReturnType<typeof isLoading>

type GlobalType =
    | isFetchingType
