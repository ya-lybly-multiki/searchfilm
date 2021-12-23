import React, {ChangeEvent, useState} from 'react';
import Prealoader from "../Utils/Preloader/Prealoader";
import {useDispatch, useSelector} from "react-redux";
import {IblobalStore} from "../../Redux/Store";
import {FilmType} from "../../Api/Api";
import { getFilmByTitle} from "../../Redux/MovieReducer";


const Header = () => {

    const [titleInput, setTitleInput] = useState<string>('')

    const isFetch = useSelector<IblobalStore, boolean | null>
    (state => state.errorReducer.isFetching)
    const film = useSelector<IblobalStore, FilmType>
    (state => state.filmSearch)

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(getFilmByTitle(titleInput))
        setTitleInput('')
    }



    const onChangeInputValue =
        (e: ChangeEvent<HTMLInputElement>) => setTitleInput(e.currentTarget.value)

    return (

        <header>
            {isFetch ? <Prealoader/>
            : <div>
                    <input onChange={onChangeInputValue}/>
                    <button onClick={onClickHandler}> check</button>
                    <div>{film.Title}</div>
                    <div>{film.Country}</div>
                    <div>{film.Year}</div>
                    <div>{film.Director}</div>

                </div>

            }
        </header>

    );
}
export default Header;