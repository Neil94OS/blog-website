var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    //if logged in ....
    console.log('Request for home recieved');
    res.render('../views/pages/index',{pageTitle:'Home'});
});




module.exports = router;
