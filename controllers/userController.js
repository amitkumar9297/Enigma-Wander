const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const nodemailer = require('nodemailer');

exports.getUserByNameController = async (req, res) => {
    try {
        const { name } = req.params;
        const user = await userModel.find({ fullName: { $regex: name, $options: "i" } }, { password: 0, phoneNo: 0, eMail: 0, savedBlog: 0, likedBlog: 0, commentedBlog: 0 });
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "user not found by this name"
            })
        }
        return res.status(200).send({
            success: true,
            message: "users found",
            user
        })
    } catch (err) {
        return res.status(400).send({
            success: false,
            message: "error while getting user",
            err
        })
    }
}


exports.profileController = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await userModel.findOne({ _id: id }, { password: 0, phoneNo: 0, eMail: 0 })
        if (!profile) {
            return res.status(200).send({
                success: false,
                message: "profile not found"
            })
        }
        return res.status(200).send({
            success: true,
            message: "profile founded!",
            profile
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "server error while fetching profile",
            err
        })
    }
}
exports.getUserBlogsController = async (req, res) => {
    try {
        const { id } = req.params;
        const blogsOfUser = await userModel.findOne({ _id: id }, { blogs: 1 });
        if (!blogsOfUser) {
            return res.status(200).send({
                success: false,
                message: "blog not found"
            })
        }
        return res.status(200).send({
            success: true,
            message: "blogs are found",
            blogsOfUser
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "server error while fetching the blog of particular user",
            err
        })
    }
}
exports.getLikedBlogsController = async (req, res) => {
    try {
        const { id } = req.params;
        const likedBlogs = await userModel.findOne({ _id: id }, { likedBlog: 1 });
        if (!likedBlogs) {
            return res.status(200).send({
                success: false,
                message: "you didn't like any blog"
            })
        }
        return res.status(200).send({
            success: true,
            message: "blogs liked by user",
            likedBlogs
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "server error while fetching blogs those liked by users",
            err
        })
    }
}
exports.getCommentedBlogsController = async (req, res) => {
    try {
        const { id } = req.params;
        const commentedBlogs = await userModel.findOne({ _id: id }, { commentedBlog: 1 });
        if (!commentedBlogs) {
            return res.status(200).send({
                success: false,
                message: "user not commented on any blog"
            })
        }
        return res.status(200).send({
            success: true,
            message: "blogs are found",
            commentedBlogs
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "server error while fetching the blog of particular user",
            err
        })
    }
}
exports.getSavedBlogsController = async (req, res) => {
    try {
        const { id } = req.params;
        const savedBlogs = await userModel.findOne({ _id: id }, { savedBlog: 1 });
        if (!savedBlogs) {
            return res.status(200).send({
                success: false,
                message: "saved not found"
            })
        }
        return res.status(200).send({
            success: true,
            message: "saved are found",
            savedBlogs
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "server error while fetching the saved blog by particular user",
            err
        })
    }
}
exports.registerController = async (req, res) => {
    try {
        const { firstName, lastName, fullName, eMail, phoneNo, password } = req.body;
        if (!firstName || !lastName || !fullName || !eMail || !phoneNo || !password) {
            return res.status(400).send({
                success: false,
                message: "please fill all details"
            })
        }
        const existingUser = await userModel.findOne({ eMail });
        console.log(existingUser);
        if (existingUser) {
            return res.status(401).send({
                sucess: false,
                message: 'user already exist krta hai',
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new userModel({ firstName, lastName, fullName, eMail, phoneNo, password: hashedPassword });

        user.save();
        sendMail(eMail);

        return res.status(201).send({
            success: true,
            message: 'New User Created',
            user,
        })

    } catch (err) {
        console.log(err)
        return res.status(500).send({
            success: false,
            message: "error while data save into database",
            err
        })
    }
}
exports.loginController = async (req, res) => {
    try {
        const { eMail, password } = req.body;
        if (!eMail || !password) {
            return res.status(401).send({
                success: false,
                message: "please enter all details"
            })
        }
        const user = await userModel.findOne({ eMail }, { password: 1, _id: 1 });

        if (!user) {
            return res.status(200).send({
                success: false,
                message: "user not found",
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invalid user name or password"
            })
        }
        const userId = user._id;
        return res.status(200).send({
            success: true,
            message: "you loged in sucessfully",
            userId
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "error occuring while login",
            err
        })
    }
}













async function sendMail(eMail) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });
    const info = transporter.sendMail({
        from: '"Insight Roamer" <amitkumar790194@gmail.com>',
        to: eMail,
        text: "Thankyou for Registration",
        html: "<b>you successfully registered</b>"

    })


}
