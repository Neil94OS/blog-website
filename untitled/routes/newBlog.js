var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog').Blog;

router.get('/', function(req, res, next) {
    // render to add.ejs
    res.render('../views/pages/newBlog', {
        pageTitle: 'Add New Blog',
        creator: '',
        title:'' ,
        content: '',
        createDate:'',
        searchTerm:''
    })
})

// add a new book
router.post('/newBlog', function(req, res, next) {

    let creator = req.body.creator;
    let title = req.body.title;
    let content = req.body.content;
    let createDate = Date.now();
    let searchTerm = 'blog';

    var blog = {
        creator: creator,
        title: title,
        content: content,
        createDate: Date.now(),
        searchTerm: 'blog'
    }
    // insert query
    Blog.create( blog, function(err, result) {
        //if(err) throw err
        if (err) {
            req.flash('error', err)

            // render to add.ejs
            res.render('books/add', {
                creator: blog.creator,
                title: blog.title,
                content: blog.content,
                createDate: Date.now(),
                searchTerm: 'blog'
            })
        } else {
            req.flash('success', 'Book successfully added');
            res.redirect('/newBlog');
        }
    })
})





module.exports = router;