import React from 'react';
import {SearchSingleFilm} from "../Search/SearchSingleFilm/SearchSingleFilm";
import {SearchAllFilms} from "../Search/SearchAllFilms/SearchAllFilms";



const Header = () => {




    return (

        <header>
            <SearchSingleFilm/>
            <SearchAllFilms/>

        </header>

    );
}
export default Header;