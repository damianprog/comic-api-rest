const { createUserDetails } = require('../controller/userDetailsController');

const router = require('express').Router();

router.route('/').post(createUserDetails);

module.exports = router;