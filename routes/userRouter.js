const express = require("express");
const router = express.Router();

router.get('/get-user/:name', getUserByNameController);
router.get('/profile/:id', profileController);
router.get('/user-blogs/:id', getUserBlogsController);
router.get('/liked-blogs/:id', getlikedBlogsController);
router.get('/commented-blog/:id', getCommentedBlogsController);
router.get('/saved-blogs/:id', getSavedBlogsController);

router.post('/register', registerController);

router.post('/login', loginController);

module.exports = router;