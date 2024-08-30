const express = require('express');
const userController = require('../Controllers/userController.js');
const verifyToken = require('../utils/verifyToken.js');

const { deleteUser, getAllUser, getSingleUser, updateUser } = userController;
const { verifyAdmin, verifyUser } = verifyToken;


const router = express.Router()

//Update user
router.put('/:id', verifyUser, updateUser)

//Delete user
router.delete('/:id', verifyUser, deleteUser)

//Get single user
router.get('/:id', verifyUser, getSingleUser)

//Get all user
router.get('/', verifyAdmin, getAllUser)


module.exports = router;