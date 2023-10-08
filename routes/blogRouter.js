const express = require("express");
const multer = require('multer');
const path = require('path');
const { getLatestBlogsController, getAllBlogsController, getBlogsByCategoryController, getBlogsByTagsController, getPopularBlogsController, createBlogController, updateBlogController, deleteBlogsController } = require("../controllers/blogController");
const router = express.Router();

router.get('/latest-blogs', getLatestBlogsController);
router.get('/all-blogs', getAllBlogsController);
router.get('/get-blogs/:category', getBlogsByCategoryController);
router.get('/get-blogs/:tags', getBlogsByTagsController);
router.get('/popular-blogs', getPopularBlogsController);



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })
router.post('/create-blog', upload.single('file'), createBlogController);

router.put('/update-blog', updateBlogController);

router.delete('/delete-blog', deleteBlogsController);

module.exports = router;