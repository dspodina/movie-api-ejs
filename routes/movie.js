import express from 'express';
import movieControllers from '../controllers/movie.js';


const router = express.Router();

const {getAllMovies, getMovie, addMovie, updateMovie, deleteMovie} = movieControllers;


// Movie routes
router.get("/get/", getAllMovies)
router.get("/get/:id", getMovie)
router.post("/post/", addMovie)
router.put("/update/:id", updateMovie)
router.delete("/delete/:id", deleteMovie)


export default router;
 