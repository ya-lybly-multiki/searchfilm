import axios from "axios";


const apiKey = '?apikey=353f5b2c'

const instance = axios.create({
    baseURL:"http://www.omdbapi.com/"
})

export const filmApi = {
    getAllFilms (title:string) {
        return instance.get<ArrayFilmsType>(`${apiKey}&s=${title}`)
    },
    getFilmByTitle (title:string) {
        return instance.get<FilmType>(`${apiKey}&t=${title}`)
    }
}

export type FilmType = {
    "Title": string,
    "Year": string,
    "Rated": string,
    "Released": string,
    "Runtime": string,
    "Genre": string,
    "Director": string,
    "Writer": string,
    "Actors": string,
    "Plot": string,
    "Language": string,
    "Country": string,
    "Awards": string,
    "Poster": string,
    "Metascore": string,
    "imdbRating": string,
    "imdbVotes": string,
    "imdbID": string,
    "Type": string,
    "DVD": string,
    "BoxOffice": string,
    "Production": string,
    "Website": string,
    "Response": string
}

type ArrayFilmsType = {
    "Search": [
        {
            "Title": string,
            "Year": string,
            "imdbID": string,
            "Type": string,
            "Poster": string
        }
    ],
    "totalResults": string,
    "Response": string
}