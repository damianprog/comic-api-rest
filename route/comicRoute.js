const { authentication } = require('../controller/authController');
const { createComic, updateComic } = require('../controller/comicController');

const router = require('express').Router();

router
    .route('/')
    .post(authentication, createComic);

router
    .route('/:comicId')
    .patch(authentication, updateComic);    

module.exports = router;