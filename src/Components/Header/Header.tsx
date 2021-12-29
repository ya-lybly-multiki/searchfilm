import React from 'react';
import {SearchSingleFilm} from "../Search/SearchSingleFilm/SearchSingleFilm";
import {SearchAllFilms} from "../Search/SearchAllFilms/SearchAllFilms";
import s from './Header.module.scss'


const Header = () => {




    return (

        <header className={s.HeaderWrapper}>
            <SearchSingleFilm/>
            <SearchAllFilms/>

        </header>

    );
}
export default Header;