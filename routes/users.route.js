const express = require('express');
const { saveUsers, getUsers, getOneUser } = require('../controller/users.controller');

const router = express.Router()

router.post ('/users', saveUsers )

router.get('/users', getUsers)
router.get ('/users/:email', getOneUser )

module.exports = router