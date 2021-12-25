import {applyMiddleware, combineReducers, createStore} from "redux";
import {SearchAllReducer} from "./SearchAllReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {SearchSingleReducer} from "./SearchSingleReducer";
import {ErrorReducer} from "./ErrorReducer";


const reducers = combineReducers({
    search:SearchAllReducer,
    filmSearch:SearchSingleReducer,
    errorReducer:ErrorReducer
});

export type IblobalStore = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, IblobalStore, unknown, any>