const express = require('express');
const { login, register } = require('../Controllers/authController.js');

// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)


module.exports = router;