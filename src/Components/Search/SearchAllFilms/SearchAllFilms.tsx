import React, {useState} from "react";
import {useDispatch} from "react-redux";
import SuperInput from "../../Utils/SuperInput/SuperInput";
import SuperButton from "../../Utils/SuperButton/SuperButton";
import {getAllFilms} from "../../../Redux/SearchAllReducer";
import {setErrorStatusAC} from "../../../Redux/ErrorReducer";


export const SearchAllFilms = () => {

    const [titleInput, setTitleInput] = useState<string>('')

    const dispatch = useDispatch()

    const onClickHandler = () => {
        if (titleInput !== '') {
            dispatch(getAllFilms(titleInput))
            setTitleInput("")
        } else {
            dispatch(setErrorStatusAC('Title is Required'))
        }
    }

    return (
        <>
            <div>
                check all films
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