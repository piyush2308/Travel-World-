const express = require('express');
const { createReview } = require('../Controllers/reviewController.js');
const { verifyUser } = require('../utils/verifyToken.js');


const router = express.Router()

router.post('/:tourId', verifyUser, createReview)

module.exports = router;