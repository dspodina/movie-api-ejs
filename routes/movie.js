import express from 'express';
import movieControllers from '../controllers/movie.js';

const router = express.Router();

const { getAllMovies, getMovieById, addMovieForm, addMovie } = movieControllers;

// Movie routes
router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);
router.get('/add-movie', addMovieForm);
router.post('/add-movie', addMovie);

export default router;
