require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');
const globalErrorHandler = require('./controller/errorController');

const authRouter = require('./route/authRoute');
const userDetailsRouter = require('./route/userDetailsRoute');
const comicRouter = require('./route/comicRoute');
const userComicRouter = require('./route/userComicRoute');
const reviewRouter = require('./route/reviewRoute');
const AppError = require('./utils/appError');
const catchAsync = require('./utils/catchAsync');

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/userDetails', userDetailsRouter);
app.use('/api/v1/comic', comicRouter)
app.use('/api/v1/userComic', userComicRouter);
app.use('/api/v1/review', reviewRouter);

app.use('*', 
    catchAsync(async (req, res, next) => {
        throw new AppError(`Can't find ${req.originalUrl} on this server`, 404);
    })
);

// Express global error handler
app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
    console.log('Server up and running', PORT);
});