let movies = [
    {
        id: "1",
        name: "Lalaland",
        genre: "Musical/Romance",
        img: "https://m.media-amazon.com/images/M/MV5BZTJlZGQ2YTgtMmIyMi00YjlmLWJiYmItODNmOGJmYWQwMmQ0XkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: "2",
        name: "The Shawshank Redemption",
        genre: "Thriller/Crime",
        img: "https://media.vanityfair.com/photos/541c841b1019a3955fea0c58/master/w_2560%2Cc_limit/shawshank-redemption-20th-anniversary-01.jpg"
    },
    {
        id: "3",
        name: "Pulp Fiction",
        genre: "Thriller/Crime",
        img: "https://miro.medium.com/v2/resize:fit:1024/1*WbQ6kLYS6QGWreBTIB6_4w.jpeg"
    },
    {
        id: "4",
        name: "Forrest Gump",
        genre: "Comedy/Romance",
        img: "https://media.gq-magazine.co.uk/photos/5d13932a2881cc9f7e0a7ee6/master/pass/Forrest-Gump-GQ-19May16_b.jpg"
    },
    {
        id: "5",
        name: "Interstellar",
        genre: "Sci-fi/Adventure",
        img: "https://m.media-amazon.com/images/S/pv-target-images/14db27b1570a8703e3975fddaa6b624bb2ca77ac7dbff925802102995b46420d.jpg"
    }
]


const movieControllers = {
    getMovie: (req, res) => {
        res.status(200).json(movies)
    },
    getMovies: (req, res) => {
        const { id } = req.params;
        const movieExist = movies.find(movie => movie.id === id)
        if (movieExist) {
            res.status(200).json(movieExist)
        } else {
            res.status(404).json({ Message: `Movie with id ${id} not found` })
        }
    },
    addMovie: (req, res) => {
        const { name, genre, img } = req.body;
        if (!name, !genre, !img) {
            res.status(400).json({
                Message: `Add name, genre and img`
            })
        } else {
            const newMovie = {
                id: String(movies.length + 1),
                name,
                genre,
                img
            }
            movies.push(newMovie)
            res.status(201).json(newMovie)
        }
    },
    updateMovie: (req, res) => {
        const { id } = req.params;
        const { name, genre, img } = req.body;
        const movieExist = movies.find(movie => movie.id === id)
        if (movieExist) {
            if (!name, !genre, !img) {
                res.status(400).json({
                    Message: `Add name, genre and img`
                })
            } else {
                movieExist.name = name;
                movieExist.genre = genre;
                movieExist.img = img;
                res.status(200).json(movieExist)
            }
        } else {
            res.status(404).json({ Message: `Movie with id ${id} not found` })
        }
    },
    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movieExist = movies.find(movie => movie.id === id);
        if (movieExist) {
            movies = movies.filter((movie => movie.id !== id));
            res.status(200).json({ Message: `Movie with id ${id} deleted` });
        } else {
            res.status(404).json({ Message: `Movie with id ${id} not found` });
        }
    }
}

export default movieControllers;