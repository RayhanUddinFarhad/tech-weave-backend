const express = require('express');
const { savePost, getPost, getOnePost } = require('../controller/post.controller');

const router = express.Router()

router.post ('/post', savePost )

router.get('/post', getPost)
router.get ('/post/:id', getOnePost )

module.exports = router