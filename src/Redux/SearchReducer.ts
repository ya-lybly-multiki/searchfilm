import {Dispatch} from "react";
import {filmApi, FilmType} from "../Api/Api";
import {isLoading} from "./ErrorReducer";


export type SearchFilmsType = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}


const initialState: Array<SearchFilmsType> = []


export const SearchReducer = (state = initialState, action: GlobalType): Array<SearchFilmsType> => {
    switch (action.type) {
        case "GET-FILMS":
            return action.films
        default :
            return state
    }
}

export const getFilms = (films: Array<SearchFilmsType>) => {
    return {
        type: "GET-FILMS",
        films
    } as const
}


export const getAllFilms = (title: string ) => {
    return (dispatch: Dispatch<GlobalType>) => {
        dispatch(isLoading(true))
        filmApi.getAllFilms(title)
            .then(data => {
                dispatch(isLoading(false))
                dispatch(getFilms(data.data.Search))
            })
    }
}


export type GetFilmType = ReturnType<typeof getFilms>
export type isFetchingType = ReturnType<typeof isLoading>

 type GlobalType =
    GetFilmType
    | isFetchingType
