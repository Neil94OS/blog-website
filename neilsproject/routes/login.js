const express = require('express');
const router = express.Router();
const LoginManager = require("../loginManager").LoginManager;


router.get('/', (req, res) => {
    res.render('../views/pages/login', {errorMessage: null, pageTitle:'Login'});
});

router.post('/',  (req, res) => {
            try {
                if ((req.body.password == "password")) {
                    LoginManager.setUsername(req.body.username);
                    LoginManager.login();
                    res.render('../views/pages/index',{pageTitle:'Home'});
                    console.log("Logged in");
                } else {

                    console.log("Password Incorrect");
                    res.status(401);
                    res.render('../views/pages/login', {errorMessage: "Password Incorrect", pageTitle:'Login'});
                }
            } catch {
                res.status(500);
                console.log("Something went wrong")
                res.redirect('/login');
            }

    });


module.exports = router;