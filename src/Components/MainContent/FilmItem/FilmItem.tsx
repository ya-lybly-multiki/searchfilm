import React from 'react';
import {SearchFilmsType} from "../../../Redux/SearchReducer";

type PropsType = {
    film:SearchFilmsType
}

const FilmItem = ({film}:PropsType) => {

    return (

            <li>
                <h3>{film.Title}</h3>
                <p>{film.Year}</p>
                <img src={film.Poster}/>
            </li>


    );
};

export default FilmItem;