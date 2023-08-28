const express = require('express');
const { savePost, getPost, getOnePost, deleteOnepost, approvedPost, getUserPost, updatePost, rejectPost, addComment, getPostbyCat, searchPost } = require('../controller/post.controller');

const router = express.Router()

router.post ('/post', savePost )

router.get('/post', getPost)
router.get ('/post/:id', getOnePost )
router.get ('/my-post/:email', getUserPost )
router.get ('/post-category/:category', getPostbyCat )
router.get ('/search/:text?', searchPost )
router.delete ( '/post/:id', deleteOnepost)
router.patch ( '/post/:id', approvedPost)
router.patch ( '/reject-post/:id', rejectPost )
router.put ( '/update-post/:id', updatePost)
router.post("/post/:postId/comment", addComment);



module.exports = router