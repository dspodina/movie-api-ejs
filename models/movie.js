import findMovie from '../utils/findMovie.js';

let movies = [
    {
        id: '1',
        title: 'Lalaland',
        genre: 'Musical/Romance',
        year:  2016,
        img: 'https://m.media-amazon.com/images/M/MV5BZTJlZGQ2YTgtMmIyMi00YjlmLWJiYmItODNmOGJmYWQwMmQ0XkEyXkFqcGc@._V1_.jpg'
    },
    {
        id: '2',
        title: 'The Shawshank Redemption',
        genre: 'Thriller/Crime',
        year: 1994,
        img: 'https://media.vanityfair.com/photos/541c841b1019a3955fea0c58/master/w_2560%2Cc_limit/shawshank-redemption-20th-anniversary-01.jpg'
    },
    {
        id: '3',
        title: 'Pulp Fiction',
        genre: 'Thriller/Crime',
        year: 1994,
        img: 'https://miro.medium.com/v2/resize:fit:1024/1*WbQ6kLYS6QGWreBTIB6_4w.jpeg'
    },
    {
        id: '4',
        title: 'Forrest Gump',
        genre: 'Comedy/Romance',
        year: 1994,
        img: 'https://media.gq-magazine.co.uk/photos/5d13932a2881cc9f7e0a7ee6/master/pass/Forrest-Gump-GQ-19May16_b.jpg'
    },
    {
        id: '5',
        title: 'Interstellar',
        genre: 'Sci-fi/Adventure',
        year: 2014,
        img: 'https://m.media-amazon.com/images/S/pv-target-images/14db27b1570a8703e3975fddaa6b624bb2ca77ac7dbff925802102995b46420d.jpg'
    }
];
class Movie {
    static getAllMovies = () => {
        return movies;
    };
    static getMovie = (id) => {
        return findMovie(movies, id);
    };
    static addMovie = (movie) => {
        movies.push(movie);
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