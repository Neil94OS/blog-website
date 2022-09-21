var express = require('express');
const {LoginManager} = require("../loginManager");
var router = express.Router();
var Blog = require('../model/Blog').Blog;
const {requestTime} = require('../middleware/requestTime');

router.get('/', (req, res) => {
    res.render('../views/pages/newBlog', {errorMessage: null, isLoggedIn:LoginManager.getLoginStatus(),  pageTitle:'New Blog'});
});

router.post('/',  (req, res) => {

    let creator = req.body.creator;
    let title = req.body.title;
    let content = req.body.content;


    var blog = {
        creator: creator,
        title: title,
        content: content,
        createDate: Date(),
        searchTerm: 'blog'
    }

    Blog.create( blog, function(err, result) {

        if (err) {
            req.flash('error', err)

            res.render('../views/pages/newBlog', {
                creator: blog.creator,
                title: blog.title,
                content: blog.content,
                createDate: Date(),
                searchTerm: 'blog',
                pageTitle: " New Blog"
            })

        } else {
                console.log(Date() );
                res.redirect('/admin');
        }
    })

});


module.exports = router;





