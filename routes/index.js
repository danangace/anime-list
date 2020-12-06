const routes = require('express').Router();
const userRouter = require('./userRouter');
const movieRouter = require('./movieRouter');
const favoriteRouter = require('./favoriteRouter');

routes.use('/user', userRouter);
routes.use('/movie', movieRouter);
routes.use('/favorite', favoriteRouter);

module.exports = routes