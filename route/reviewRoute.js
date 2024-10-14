const { authentication } = require('../controller/authController');
const { createReview, getComicReviews } = require('../controller/reviewController');

const router = require('express').Router();

router
    .route('/comic/:comicId')
    .get(getComicReviews)
    .post(authentication, createReview);

module.exports = router;