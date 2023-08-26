const express = require('express');
const { saveUsers, getUsers } = require('../controller/users.controller');

const router = express.Router()

router.post ('/users', saveUsers )

router.get('/users', getUsers)

module.exports = router