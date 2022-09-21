var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog').Blog;

router.get('/', (req, res) => {
    console.log('Request for help recieved');
    res.render('../views/pages/help',{pageTitle:'Help'});
});


module.exports = router;