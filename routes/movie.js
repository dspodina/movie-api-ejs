import express from 'express';
import movieControllers from '../controllers/movie.js';


const router = express.Router();

const {getMovie, getMovies, addMovie, updateMovie, deleteMovie} = movieControllers;


// Movie routes
router.get("/", getMovie)
router.get("/:id", getMovies)
router.post("/", addMovie)
router.put("/:id", updateMovie)
router.delete("/:id", deleteMovie)




export default router;
 