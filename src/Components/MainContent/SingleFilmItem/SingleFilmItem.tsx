import React from 'react';
import {useSelector} from "react-redux";
import {IblobalStore} from "../../../Redux/Store";
import {FilmType} from "../../../Api/Api";
import s from '../Main.module.scss'

const SingleFilmItem = () => {

    const film = useSelector<IblobalStore, FilmType>
    (state => state.filmSearch)

    return (

             <div className={s.movie}>
                <h3>{film.Title}</h3>
                <img src={film.Poster}/>
                <div className={s.overview}>
                    <p>{film.Plot}</p>
                    <a target={'_blank'} href={`https://www.imdb.com/title/${film.imdbID}/`}>watch</a>
                </div>
            </div>

    );
};

export default SingleFilmItem;