var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog').Blog;

router.get('/', (req, res) => {
    console.log('Request for new blog recieved');
    res.render('../views/pages/newBlog',{pageTitle:'Create Blog'});
});


module.exports = router;