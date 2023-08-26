const express = require('express');
const { savePost, getPost, getOnePost, deleteOnepost, approvedPost, getUserPost, updatePost } = require('../controller/post.controller');

const router = express.Router()

router.post ('/post', savePost )

router.get('/post', getPost)
router.get ('/post/:id', getOnePost )
router.get ('/my-post/:email', getUserPost )
router.delete ( '/post/:id', deleteOnepost)
router.patch ( '/post/:id', approvedPost)
router.put ( '/update-post/:id', updatePost)

module.exports = router