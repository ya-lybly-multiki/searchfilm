import React from 'react';
import {SearchFilmsType} from "../../../Redux/SearchAllReducer";
import s from '../Main.module.scss'

type PropsType = {
    film: SearchFilmsType
}

const FilmItem = ({film}: PropsType) => {


    return (
        <li className={s.movie}>
            <h3>{film.Title}</h3>
            <p>{film.Year}</p>
            <img src={film.Poster}/>
            <div className={s.overview}>
                <a target={'_blank'} href={`https://www.imdb.com/title/${film.imdbID}/`}>watch</a>
            </div>

        </li>


    );
};

export default FilmItem;