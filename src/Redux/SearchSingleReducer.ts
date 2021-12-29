import {filmApi, FilmType} from "../Api/Api";
import {getAllFilms,  GetFilmType} from "./SearchAllReducer";

import {AppThunk} from "./Store";
import {ErrorType, setErrorStatusAC, setStatusGetFilms, SetStatusType} from "./ErrorReducer";


const initialState: FilmType = {} as FilmType

export const SearchSingleReducer = (state = initialState, action: GlobalType): FilmType => {
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


export const getFilmByTitle = (title: string):AppThunk => {
    return (dispatch) => {
        dispatch(setStatusGetFilms("loading"))
        filmApi.getFilmByTitle(title)
            .then(data => {
                if (data.data.Response === 'True') {
                    dispatch(setStatusGetFilms("success"))
                    dispatch(getFilm(data.data))
                } else  {
                    dispatch(setStatusGetFilms('failed'))
                    dispatch(setErrorStatusAC('incorrect request'))
                }
            })
            .catch(() => {
                dispatch(setStatusGetFilms('failed'))
                dispatch(setErrorStatusAC('Какая-то неведанная ошибка'))
            })
    }
}

export type GetFilmByTitleType = ReturnType<typeof getFilm>
type GlobalType =
    | SetStatusType
    | GetFilmByTitleType
    | GetFilmType
    |ErrorType