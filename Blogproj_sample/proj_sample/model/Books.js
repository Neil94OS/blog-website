var db = require('./db');

class Books {
    //fetch all registered users
    static all(callback)
    {   const sql = "SELECT * FROM Books ORDER BY Title"
        db.all(sql, [], (err, rows) => {
            if (err)
                return console.error(err.message);
            callback(rows);
        });
    }

    //select a specific user
    static find(id, callback)
    {   db.get('select * from Books where Book_ID = ?', id, (err, row) => {
             if (err)
                 return console.error(err.message);
             callback(row);
        });
    }

    //create a new book
    static create(data, callback)
    {  const sql = 'insert into Books(Title, Author, Comments) values (?, ?, ?)';
       var params = [data.Title, data.Author, data.Comments];
       db.run(sql, params, callback);
    }

    //delete a book
    static delete(id, callback)
    {  if (!id)
        return callback(new Error('Please provide a book id'));
       db.run('delete from Books where Book_ID = ?', id, callback);
    }
}

module.exports = db;
module.exports.Books = Books;