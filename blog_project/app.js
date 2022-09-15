var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3000

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const modifyRouter = require('./routes/modifyBlog');
const aboutRouter = require('./routes/about');
const helpRouter = require('./routes/help');
const deleteRouter = require('./routes/delete');
const searchRouter = require('./routes/searchBlog');
const displayRouter = require('./routes/displayBlogs');
const createRouter = require('./routes/newBlog');



//import the db.js module in the model directory
var db = require('./model/db');
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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/delete', deleteRouter);
app.use('/displayBlogs', displayRouter);
app.use('/help', helpRouter);
app.use('/modifyBlog', modifyRouter);
app.use('/searchBlog', searchRouter);
app.use('/newBlog', createRouter);




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

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

module.exports = app;

