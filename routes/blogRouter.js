const express = require("express");
const { getLatestBlogsController, getAllBlogsController, getBlogsByCategoryController, getBlogsByTagsController, getPopularBlogsController, createBlogController, updateBlogController, deleteBlogsController } = require("../controllers/blogController");
const router = express.Router();

router.get('/latest-blogs', getLatestBlogsController);
router.get('/all-blogs', getAllBlogsController);
router.get('/get-blogs/:category', getBlogsByCategoryController);
router.get('/get-blogs/:tags', getBlogsByTagsController);
router.get('/popular-blogs', getPopularBlogsController);


router.post('/create-blog', createBlogController);

router.put('/update-blog', updateBlogController);

router.delete('/delete-blog', deleteBlogsController);

module.exports = router;