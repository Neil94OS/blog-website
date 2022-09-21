var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {

    res.render('../views/pages/about',{pageTitle:'About'});
});


module.exports = router;