import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IblobalStore} from "../../Redux/Store";
import {getAllFilms, SearchFilmsType} from "../../Redux/SearchAllReducer";
import FilmItem from "./FilmItem/FilmItem";
import s from './Main.module.scss'
import Prealoader from "../Utils/Preloader/Prealoader";
import {FilmType} from "../../Api/Api";
import SingleFilmItem from "./SingleFilmItem/SingleFilmItem";
import {InitialStateType} from "../../Redux/ErrorReducer";


const Main = () => {

    const films = useSelector<IblobalStore, SearchFilmsType[]>(state => state.search)
    const isFetch = useSelector<IblobalStore, string>(state => state.errorReducer.statusGetFilms)


    return (
        <div className={s.mainWrapper}>
            {isFetch === 'loading' ? <Prealoader/> : null}
            {isFetch === 'success' ?
                <main >
                    <ul>
                        {
                            films.map((film, index) => {
                                return <FilmItem key={index} film={film}/>
                            })
                        }
                    </ul>
                   <SingleFilmItem/>
                </main>
                : null}
        </div>
    )
};

export default Main;