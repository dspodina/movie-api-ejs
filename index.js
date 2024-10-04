import express from 'express';
import dotenv from 'dotenv';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import movieRoutes from './routes/movie.js';
import createLog from './middleware/createLog.js';

// configure dotenv
dotenv.config();
const PORT = process.env.PORT || 5009;

// construct the path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// initialize express
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

// parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(createLog);

// serves static files
app.use(express.static(path.join(PATH, 'public')));

// use routes
app.use('/api', movieRoutes);

// handle 404
app.use('*', (req, res) => {
    res.status(404).render('404', {
        title: "You're on the page 404",
        message: 'This page is not found'
    });
});

// handle error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render({
        title: 500,
        message: 'Internal Server Error'
    });
});

// listen
app.listen(PORT, () => {
    console.log(`Server runs on port: http://localhost:${PORT}`);
});
