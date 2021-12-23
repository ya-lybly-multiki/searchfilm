import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IblobalStore} from "../../Redux/Store";
import {getAllFilms, SearchFilmsType} from "../../Redux/SearchReducer";
import FilmItem from "./FilmItem/FilmItem";

import Prealoader from "../Utils/Preloader/Prealoader";




const Main = () => {

    const [title,setTitle] = useState<string>("")

    const films = useSelector<IblobalStore,SearchFilmsType[]> (state => state.search)
    const isFetch = useSelector<IblobalStore,boolean | null>(state=> state.errorReducer.isFetching)
    const dispatch = useDispatch()


    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const get = () => {
        dispatch(getAllFilms(title))
    }



    return (

        <div>
            {isFetch ? <Prealoader/>
                : <main>
                    <input  onChange={onChangeInput}/>
                    <button onClick={get} >get film</button>
                <ul>
                    {
                        films.map((film,index) => {
                            return<FilmItem key={index} film={film}/>

                        })
                    }
                </ul>

                </main>
            }
    </div>
    )
};

export default Main;