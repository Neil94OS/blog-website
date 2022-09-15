var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog.js').Blog;


router.get('/', (req, res) => {
        console.log('Request for display blogs received');
        Blog.all(rows =>{
        res.render('../views/pages/displayBlogs',{pageTitle:'Display Blogs', blogs :rows});
});
});



module.exports = router;








