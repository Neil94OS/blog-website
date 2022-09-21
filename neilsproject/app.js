var createError = require('http-errors');
var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session');
const {requestTime} = require('./middleware/requestTime');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const helpRouter = require('./routes/help');
const displayRouter = require('./routes/displayBlogs');
const createRouter = require('./routes/newBlog');
const loginRouter = require('./routes/login');
const adminRouter = require('./routes/admin');
const logoutRouter = require('./routes/logout');




//import the db.js module in the model directory
var db = require('./model/db');
const {Blog} = require("./model/Blog");
//import the user.js module in the model directory
var users = require('./model/User').User;
//import the blog.js module in the model directory
var blogs = require('./model/Blog').Blog;


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(flash());

app.use(requestTime);


app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/displayBlogs', displayRouter);
app.use('/logout', logoutRouter);
app.use('/help', helpRouter);
app.use('/newBlog', createRouter);
app.use('/', loginRouter);
app.use('/admin', adminRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('../views/pages/error');
});



module.exports = app;

