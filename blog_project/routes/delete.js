var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog').Blog;

router.get('/', (req, res) => {
    console.log('Request for home recieved');
    res.render('../views/pages/delete',{pageTitle:'Delete'});
});


module.exports = router;