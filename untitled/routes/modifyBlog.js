var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog').Blog;

router.get('/modifyBlog/:id', (req, res) => {
    console.log('Request for modify a blog received');
    const id = req.params.id;
    Blog.find(id, rows =>{
        res.render('../views/pages/modifyBlog/:id',{pageTitle:'Display Blogs', blog :rows});
    });
});

router.put('/modifyBlog/:id', (req, res) =>{
    const id = req.params.id;
    const blog = {Creator: req.body.Creator, CreateDate: req.body.CreateDate, Title: req.body.Title, SearchTerm: req.body.SearchTerm,Content: req.body.Content};
    Blog.create(blog, err =>{
        if (err)
            console.error(err.message);
        res.redirect('/about');
    })
});


module.exports = router;