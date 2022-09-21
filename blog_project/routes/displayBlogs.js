var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog.js').Blog;


router.get('/displayBlogs'), (req, res) => {
   Blog.all( rows => {
        res.render('../views/pages/displayBlogs', {blogs:rows,  pageTitle:'Display Blogs'});
    })
};


module.exports = router;





