const express = require('express');
const router = express.Router();

router.get('/get-comment-on-blog/:id', getCommentOnBlogController);
router.post('/comment-on-blog/', commentOnBlogController);
router.post('/update-blog-comment', updateCommentOnBlogController);
router.post('/delete-comment', deleteCommentFromBlogController);

module.exports = router