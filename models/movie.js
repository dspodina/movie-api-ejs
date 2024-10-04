import findMovie from '../utils/findMovie.js';
import { v4 as Id } from 'uuid';

let movies = [
    {
        id: Id(),
        title: 'Lalaland',
        genre: 'Musical/Romance',
        year: 2016,
        img: 'https://m.media-amazon.com/images/M/MV5BZTJlZGQ2YTgtMmIyMi00YjlmLWJiYmItODNmOGJmYWQwMmQ0XkEyXkFqcGc@._V1_.jpg'
    },
    {
        id: Id(),
        title: 'The Shawshank Redemption',
        genre: 'Thriller/Crime',
        year: 1994,
        img: 'https://media.vanityfair.com/photos/541c841b1019a3955fea0c58/master/w_2560%2Cc_limit/shawshank-redemption-20th-anniversary-01.jpg'
    },
    {
        id: Id(),
        title: 'Pulp Fiction',
        genre: 'Thriller/Crime',
        year: 1994,
        img: 'https://miro.medium.com/v2/resize:fit:1024/1*WbQ6kLYS6QGWreBTIB6_4w.jpeg'
    },
    {
        id: Id(),
        title: 'Forrest Gump',
        genre: 'Comedy/Romance',
        year: 1994,
        img: 'https://media.gq-magazine.co.uk/photos/5d13932a2881cc9f7e0a7ee6/master/pass/Forrest-Gump-GQ-19May16_b.jpg'
    },
    {
        id: Id(),
        title: 'Interstellar',
        genre: 'Sci-fi/Adventure',
        year: 2014,
        img: 'https://m.media-amazon.com/images/S/pv-target-images/14db27b1570a8703e3975fddaa6b624bb2ca77ac7dbff925802102995b46420d.jpg'
    },
    {
        id: Id(),
        title: 'The Godfather',
        genre: ' Crime',
        year: 1972,
        img: 'https://ca-times.brightspotcdn.com/dims4/default/359912d/2147483647/strip/true/crop/3642x2068+0+0/resize/1200x681!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffd%2F4c%2Fb0bda4ec4a6c8052d2be45199fcf%2Fgettyimages-1195327712.jpg'
    }
];
class Movie {
    static getAllMovies = () => {
        return movies;
    };
    static getMovieById = (id) => {
        return findMovie(movies, id);
    };
    static addMovie = (movie) => {
        movies.unshift(movie);
        return movies;
    };
    static updateMovie = (id, movie) => {
        const movieExist = findMovie(movies, id);
        if (movieExist) {
            movieExist.title = movie.title;
            movieExist.genre = movie.genre;
            movieExist.year = movie.year;
            movieExist.img = movie.img;
            return movies;
        } else {
            return null;
        }
    };
    static deleteMovie = (id) => {
        const movieExist = findMovie(movies, id);
        if (movieExist) {
            movies = movies.filter((movie) => movie.id !== id);
            return movies;
        } else {
            return null;
        }
    };
}

export default Movie;
