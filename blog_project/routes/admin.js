const express = require('express');
const router = express.Router();
const Blog= require("../model/Blog").Blog;



router.get('/displayBlogs'), (req, res) => {
    Blog.all( rows => {
        res.render('../views/pages/displayBlogs', {blogs:rows,  pageTitle:'Display Blogs'});
    })
};


router.get('/edit/:username',(req, res) => {
    const username = req.params.username;
    Blog.find(username,row => {
        res.render('../views/pages/editAccount', {userToDisplay:row, isLoggedIn:LoginManager.getLoginStatus(), user: LoginManager.getUserObj(), pageTitle:'Admin Board | Edit Account'});
    })
});



module.exports = router;
