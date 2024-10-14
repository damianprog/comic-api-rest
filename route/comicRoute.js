const { authentication } = require('../controller/authController');
const { createComic, updateComic, getComicById } = require('../controller/comicController');

const router = require('express').Router();

router
    .route('/')
    .post(authentication, createComic);

router
    .route('/:comicId')
    .get(getComicById)
    .patch(authentication, updateComic);    

module.exports = router;