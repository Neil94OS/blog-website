var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog').Blog;

router.get("/blogs", (req, res) => {
    Blog.all(rows => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
        }
    });
});

module.exports = router;


router.get('/displayBlogs', (req, res) =>{
    console.log('Request for display blogs recieved');
    let blog = Blog.all(rows =>{
        res.render('../views/pages/displayBlogs',{pageTitle:'Display Blogs'},{blog: rows});
    });

});