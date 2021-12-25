import {Dispatch} from "react";
import {filmApi, FilmType} from "../Api/Api";
import {ErrorType, setErrorStatusAC, setStatusGetFilms, SetStatusType} from "./ErrorReducer";
import {AxiosError} from "axios";


export type SearchFilmsType = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}


const initialState: Array<SearchFilmsType> = []


export const SearchAllReducer = (state = initialState, action: GlobalType): Array<SearchFilmsType> => {
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
        dispatch(setStatusGetFilms("loading"))
        filmApi.getAllFilms(title)
            .then(data => {
                if (data.data.Response === 'True') {
                    dispatch(setStatusGetFilms("success"))
                    dispatch(getFilms(data.data.Search))
                }
                else  {
                    dispatch(setStatusGetFilms('failed'))
                    dispatch(setErrorStatusAC('ты ищешь какую-то хуйню'))
                }
            })
            .catch(() => {
                dispatch(setStatusGetFilms('failed'))
                dispatch(setErrorStatusAC('Какая-то неведанная ошибка'))
            })
    }
}


export type GetFilmType = ReturnType<typeof getFilms>


type GlobalType =
    GetFilmType
    | SetStatusType
    |ErrorType
