import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getFilmByTitle} from "../../../Redux/SearchSingleReducer";
import SuperInput from "../../Utils/SuperInput/SuperInput";
import SuperButton from "../../Utils/SuperButton/SuperButton";
import {setErrorStatusAC} from "../../../Redux/ErrorReducer";



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
            <div>
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