import express from 'express';
import movieControllers from '../controllers/movie.js';

const router = express.Router();

const {
    getAllMovies,
    getMovieById,
    addMovieForm,
    addMovie,
    updateMovieForm,
    updateMovie,
    deleteMovie
} = movieControllers;

// Movie routes
router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);
router.get('/add-movie', addMovieForm);
router.post('/add-movie', addMovie);
router.get('/update-form/:id', updateMovieForm);
router.post('/update/:id', updateMovie);
router.get('/delete/:id', deleteMovie);

export default router;
