

export type InitialStateType = {
    isLoading: boolean
    isError: string | null
    statusGetFilms: 'success' | 'loading' | 'failed' | 'idle'
}

const initialState: InitialStateType = {
    isLoading: false,
    isError:null,
    statusGetFilms: "idle"
}


export const ErrorReducer = (state = initialState, action: GlobalType): InitialStateType => {
    switch (action.type) {
        case "SET-STATUS-GET-FILMS":
            return {...state, statusGetFilms:action.statusResponse}
        case "STATUS-LOADING":
            return {...state, isLoading:action.isLoad}
        case "STATUS-ERROR":
            return {...state,isError:action.isError}
        default :
            return state
    }
}


export const setStatusGetFilms = ( statusResponse: 'success' | 'loading' | 'failed' | 'idle') =>
    ({type: 'SET-STATUS-GET-FILMS', statusResponse} as const)

export const setStatusLoadingAC = (isLoad: boolean) => ({type: 'STATUS-LOADING', isLoad} as const)
export const setErrorStatusAC = (isError: string | null) => ({type: 'STATUS-ERROR', isError} as const)

export type SetStatusType = ReturnType<typeof setStatusGetFilms>
export type LoadingType = ReturnType<typeof setStatusLoadingAC>
export type ErrorType = ReturnType<typeof setErrorStatusAC>


type GlobalType =
    | SetStatusType | LoadingType | ErrorType
