const { authentication } = require('../controller/authController');
const { createUserComic, getUserComicById, getUserComicsByUserId } = require('../controller/userComicController');

const router = require('express').Router();

router
    .route('/')
    .post(authentication, createUserComic);

router
    .route('/:userComicId')
    .get(getUserComicById);

router
    .route('/user/:userId')
    .get(getUserComicsByUserId);

module.exports = router;