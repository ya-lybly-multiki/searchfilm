import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getFilmByTitle} from "../../../Redux/SearchSingleReducer";
import SuperInput from "../../Utils/SuperInput/SuperInput";
import SuperButton from "../../Utils/SuperButton/SuperButton";
import {setErrorStatusAC} from "../../../Redux/ErrorReducer";
import s from './SearchSingle.module.scss'
import {getAllFilms} from "../../../Redux/SearchAllReducer";


export const SearchSingleFilm = () => {

    const [titleInput, setTitleInput] = useState<string>('')
    const dispatch = useDispatch()



    const onClickHandler = () => {
        if (titleInput !== '') {
            dispatch(getFilmByTitle(titleInput))
            setTitleInput("")
        } else {
           dispatch(setErrorStatusAC('Title is required'))
        }
    }


    return (
        <>
            <div className={s.SearchSingleWrapper}>
                <p>Find single film</p>
                <div>
                    <SuperInput setTitleInput={setTitleInput}
                                title={titleInput}
                                callBack={onClickHandler}/>
                    <SuperButton children={"Click"} callBack={onClickHandler}/>
                </div>
            </div>
        </>

    )
}