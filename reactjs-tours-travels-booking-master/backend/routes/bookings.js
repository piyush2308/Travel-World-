const express = require('express');
const bookingController = require('../Controllers/bookingController.js');
const verifyToken = require('../utils/verifyToken.js');

const { createBooking, getAllBooking, getBooking } = bookingController;
const { verifyAdmin, verifyUser } = verifyToken;

const router = express.Router()

router.post('/', verifyUser, createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getAllBooking)

module.exports = router;