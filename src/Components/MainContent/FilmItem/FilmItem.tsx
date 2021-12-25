import React from 'react';
import {SearchFilmsType} from "../../../Redux/SearchAllReducer";
import {filmApi} from "../../../Api/Api";

type PropsType = {
    film: SearchFilmsType
}

const FilmItem = ({film}: PropsType) => {


    return (
        <li>
            <h3>{film.Title}</h3>
            <p>{film.Year}</p>
            <img src={film.Poster}/>
            <div>
                <a target={'_blank'} href={`https://www.imdb.com/title/${film.imdbID}/`}>watch</a>
            </div>

        </li>


    );
};

export default FilmItem;