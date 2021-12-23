import {Dispatch} from "react";
import {filmApi, FilmType} from "../Api/Api";
import { GetFilmType, isFetchingType} from "./SearchReducer";
import {isLoading} from "./ErrorReducer";


const initialState: FilmType = {} as FilmType

export const MovieReducer = (state = initialState, action: GlobalType): FilmType => {
    switch (action.type) {
        case "GET-FILM":
            return {
                ...state,
                ...action.film
            }
        default :
            return state
    }
}


export const getFilm = (film: FilmType) => {
    return {
        type: "GET-FILM",
        film
    } as const
}


export const getFilmByTitle = (title: string) => {
    return (dispatch: Dispatch<GlobalType>) => {
        dispatch(isLoading(true))
        filmApi.getFilmByTitle(title)
            .then(data => {
                dispatch(isLoading(false))
                dispatch(getFilm(data.data))
            })
    }
}

type GetFilmByTitleType = ReturnType<typeof getFilm>
type GlobalType =
    | isFetchingType
    | GetFilmByTitleType
    | GetFilmType