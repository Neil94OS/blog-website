const express = require('express');
const router = express.Router();
const Blog = require("../model/Blog").Blog;
const LoginManager = require("../loginManager").LoginManager;


router.get('/',  (req, res) => {
    Blog.all( rows => {
        res.render('../views/pages/displayBlogs', {blogs:rows,  pageTitle:'Display Blogs'});
    })
});

router.get('/edit/:id',(req, res) => {
    const id = req.params.id;
    Blog.find(id,row => {
        res.render('../views/pages/editBlog', {blog:row, isLoggedIn:LoginManager.getLoginStatus(), pageTitle:'Edit Blog'});
    })
});

router.post('/edit/:id', async (req, res) => {
    let title = req.body.title;
    let creator = req.body.creator;
    let content = req.body.content;
    const id = req.params.id;

        Blog.changeTitle(title, id,err => {
            if (err)
                console.error(err.message);
        });

    Blog.changeCreator(creator,  id,err =>{
        if (err)
            console.error(err.message);
    });

    Blog.changeContent(content, id,err =>{
        if (err)
            console.error(err.message);
    });

    res.redirect('/admin');
});

router.get('/delete/:id',(req, res) => {
    const id = req.params.id;
    Blog.blogAllData(id,row => {
        res.render('../views/pages/deleteBlog', {blog:row, isLoggedIn:LoginManager.getLoginStatus(), pageTitle:'Delete Blog'});
    })
});

router.post('/delete/:id',  (req, res) => {
    const id = req.params.id;
    Blog.delete(id, (err) =>{
        if (err)
            console.error(err.message);
    });

    Blog.delete(id, (err) =>{
        if (err)
            console.error(err.message);
    });
    res.redirect('/admin');
});







module.exports = router;