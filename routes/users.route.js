const express = require('express');
const { saveUsers, getUsers, getOneUser, changeUserRole } = require('../controller/users.controller');

const router = express.Router()

router.post ('/users', saveUsers )

router.get('/users', getUsers)
router.get ('/users/:email', getOneUser )
router.patch('/users/:email', changeUserRole)


module.exports = router