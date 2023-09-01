const express = require('express');
const { bookmark, getUserBookmark } = require('../controller/bookmark.controller');
const router = express.Router()

router.post ('/bookmark', bookmark)
router.get ('/bookmark/:email', getUserBookmark)
module.exports = router