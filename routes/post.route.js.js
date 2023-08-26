const express = require('express');
const { savePost, getPost, getOnePost, deleteOnepost, approvedPost } = require('../controller/post.controller');

const router = express.Router()

router.post ('/post', savePost )

router.get('/post', getPost)
router.get ('/post/:id', getOnePost )
router.delete ( '/post/:id', deleteOnepost)
router.patch ( '/post/:id', approvedPost)

module.exports = router