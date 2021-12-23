import {applyMiddleware, combineReducers, createStore} from "redux";
import {SearchReducer} from "./SearchReducer";
import thunkMiddleware from "redux-thunk";
import {MovieReducer} from "./MovieReducer";
import {ErrorReducer} from "./ErrorReducer";


const reducers = combineReducers({
    search:SearchReducer,
    filmSearch:MovieReducer,
    errorReducer:ErrorReducer
});

export type IblobalStore = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))