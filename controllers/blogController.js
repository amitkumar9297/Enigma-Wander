const mongoose = require('mongoose');
const multer = require('multer');
const blogModel = require('../models/blogModel');
const userModel = require('../models/userModel');

exports.getLatestBlogsController = async (req, res) => {
    try {
        const latestBlog = await blogModel.aggregate([{ $sort: { createdAt: -1 } }, { $limit: 20 }]);
        if (!latestBlog) {
            return res.status(200).send({
                success: false,
                message: "No Blog founded"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Latest Blogs",
            latestBlog
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "error while during fetching latest blog from server",
            err
        })
    }
}
exports.getAllBlogsController = async (req, res) => {
    try {
        const allBlogs = await blogModel.aggregate([{ $sample: { size: 50 } }]);
        if (!allBlogs) {
            return res.status(200).send({
                success: false,
                message: "No Blog founded"
            })
        }
        return res.status(200).send({
            success: true,
            message: "all Blogs are presented",
            allBlogs
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "error while during fetching the blog from server",
            err
        })
    }
}
exports.getBlogsByCategoryController = async (req, res) => {
    try {
        const { category } = req.params;
        const categorizedBlog = await blogModel.aggregate([{ $sample: { size: 20 } }, { $match: { category } }]);
        if (!categorizedBlog) {
            return res.status(200).send({
                success: false,
                message: "No Blog founded"
            })
        }
        return res.status(200).send({
            success: true,
            message: "categorized blog",
            categorizedBlog
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "error while during fetching categorized blog from server",
            err
        })
    }
}
exports.getBlogsByTagsController = async (req, res) => {
    try {
        const { tags } = req.params;
        const tagedBlog = await blogModel.aggregate([{ $sample: { size: 20 } }, { $match: { tags } }]);
        if (!tagedBlog) {
            return res.status(200).send({
                success: false,
                message: "No Blog founded by given tags"
            })
        }
        return res.status(200).send({
            success: true,
            message: "taged blog",
            tagedBlog
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "error while during fetching particular blog from server",
            err
        })
    }
}
exports.getPopularBlogsController = async (req, res) => {
    try {
        const popularBlog = await blogModel.aggregate([{ $sample: { size: 20 } }, { $sort: { likes: -1 } }]);
        if (!popularBlog) {
            return res.status(200).send({
                success: false,
                message: "No Blog founded by given tags"
            })
        }
        return res.status(200).send({
            success: true,
            message: "taged blog",
            popularBlog
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "error while during fetching particular blog from server",
            err
        })
    }
}

exports.createBlogController = async (req, res) => {
    try {
        const { title, discription, entireBlog, image, category, user } = req.body;
        if (!title || !discription || !entireBlog || !image || !category || !user) {
            return res.status(200).send({
                success: false,
                message: "please fill all details"
            })
        }
        const existingUser = await userModel.findById(user);
        if (!existingUser) {
            return res.status(404).send({
                success: false,
                message: "unable to find user"
            })
        }
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "error while during upload on server",
            err
        })
    }
}
exports.updateBlogController = async (req, res) => { }
exports.deleteBlogsController = async (req, res) => { }
