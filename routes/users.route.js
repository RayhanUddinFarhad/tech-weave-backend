const express = require('express');
const { saveUsers, getUsers, getOneUser, changeUserRole, getAdmin } = require('../controller/users.controller');

const router = express.Router()

router.post ('/users', saveUsers )

router.get('/users', getUsers)
router.get ('/user/:email', getOneUser )
router.get ('/admin/:email', getAdmin )
router.patch('/change-role/:email', changeUserRole)


module.exports = router