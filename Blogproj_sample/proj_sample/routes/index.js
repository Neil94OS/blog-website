var express = require('express');
var router = express.Router();
var Books = require('../model/Books').Books;

router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('../views/pages/index');
});

router.get('/about', (req, res) => {
  console.log('Request for about page recieved');
  let book = Books.all(rows =>{
    res.render('../views/pages/about', {books : rows});
  });
});

router.get('/edit/:id', (req, res) => {
  console.log('Request for edit one page recieved');
  const id = req.params.id;
  let book = Books.find(id, (row) => {
    res.render('../views/pages/edit', {book: row});
  });
});

router.post('/edit/:id', (req, res) =>{
  const id = req.params.id;
  const book = {Title: req.body.Title, Author: req.body.Author, Comments: req.body.Comments};
  Books.create(book, err =>{
    if (err)
      console.error(err.message);
    res.redirect('/about');
  })
});

router.get('/delete/:id', (req, res) => {
  console.log('Request for delete one book recieved');
  const id = req.params.id;
  let book = Books.find(id, (row) => {
    res.render('../views/pages/delete', {book: row});
  });
});

router.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  Books.delete(id, (err, result) =>{
    if (err)
      console.error(err.message);
    res.redirect('/about');
  });
});

module.exports = router;
