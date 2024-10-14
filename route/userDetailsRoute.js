const { authentication } = require('../controller/authController');
const { createUserDetails, getUserDetailsByUserId } = require('../controller/userDetailsController');

const router = require('express').Router();

router
    .route('/')
    .post(authentication, createUserDetails);

router
    .route('/user/:userId/')
    .get(getUserDetailsByUserId);

module.exports = router;