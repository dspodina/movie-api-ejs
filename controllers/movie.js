import Movie from "../models/movie.js";

const movieControllers = {
    getAllMovies: (req, res) => {
        const movies = Movie.getAllMovies()
        res.status(200).render("movies", {movies})
    },
    getMovie: (req, res) => {
        // const { id } = req.params;
        // const movieExist = findMovie(movies, id)
        // if (movieExist) {
        //     res.status(200).json(movieExist)
        // } else {
        //     res.status(404).json({ Message: `Movie with id ${id} not found` })
        // }
    },
    addMovie: (req, res) => {
        // const { name, genre, img } = req.body;
        // if (!name, !genre, !img) {
        //     res.status(400).json({
        //         Message: `Add name, genre and img`
        //     })
        // } else {
        //     const newMovie = {
        //         id: String(movies.length + 1),
        //         name,
        //         genre,
        //         img
        //     }
        //     movies.push(newMovie)
        //     res.status(201).json(newMovie)
        // }
    },
    updateMovie: (req, res) => {
        // const { id } = req.params;

    },
    deleteMovie: (req, res) => {
        // const { id } = req.params;

    }
}

export default movieControllers;