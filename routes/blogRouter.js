const express = require("express");
const router = express.Router();

router.get('/latest-blogs', getLatestBlogsController);
router.get('/all-blogs', getAllBlogsController);
router.get('/get-blogs/:category', getBlogsByCategoryController);
router.get('/get-blogs/:tags', getBlogsByTagsController);
router.get('/popular-blogs', getPopularBlogsControllers);


router.post('/create-blog', createBlogController);

router.put('/update-blog', updateBlogController);

router.delete('/delete-blog', deleteBlogController);

module.exports = router;