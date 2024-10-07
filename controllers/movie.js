// import modules and dependencies
import { v4 as Id } from 'uuid';
import Movie from '../models/movie.js';
import { title } from 'process';

const movieControllers = {
    getAllMovies: (req, res) => {
        const movies = Movie.getAllMovies();
        res.status(200).render('movies', { movies });
    },
    getMovieById: (req, res) => {
        const { id } = req.params;
        const movie = Movie.getMovieById(id);
        if (movie) {
            res.status(200).render('movie', { movie });
        } else {
            res.status(404).render('404', {
                title: 'Movie not found',
                message: `Movie with id ${id} not found`
            });
        }
    },
    addMovieForm: (req, res) => {
        res.status(200).render('add-movie-form');
    },
    addMovie: (req, res) => {
        const { title, genre, year, img } = req.body;
        if (title && genre && year && img) {
            Movie.addMovie({ id: Id(), title, genre, year, img });
            res.status(201).redirect('/api/movies');
        } else {
            res.status(400).render('404', {
                title: 'All fields are required',
                message: `Please, add name, genre and img`
            });
        }
    },
    updateMovieForm: (req, res) => {
        const { id } = req.params;
        const movie = Movie.getMovieById(id);
        if (movie) {
            res.status(200).render('update-movie-form', { movie });
        } else {
            res.status(404).render('404', {
                title: 'Movie not found',
                message: "The movie you're looking dosn't exist"
            });
        }
    },
    updateMovie: (req, res) => {
        const { id } = req.params;
        const { title, genre, year, img } = req.body;
        const movie = Movie.getMovieById(id);
        if (movie) {
            Movie.updateMovie(id, { title, genre, year, img });
            res.status(200).redirect('/api/movies');
        } else {
            res.status(404).render('404', {
                title: 'Movie not found',
                message: "The movie you're looking dosn't exist"
            });
        }
    },
    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movie = Movie.getMovieById(id);
        if (movie) {
            Movie.deleteMovie(id);
            res.status(200).redirect('/api/movies');
        } else {
            res.status(404).render('404', {
                title: 'Movie not found',
                message: "The movie you're looking dosn't exist"
            });
        }
    }
};

export default movieControllers;
