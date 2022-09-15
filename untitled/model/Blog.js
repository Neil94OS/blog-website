//import db.js module
const sqlite3 = require('sqlite3').verbose();
const path = require("path");
let DB_PATH = path.join(__dirname, "blog.db");
let db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
    if (err)
        console.error(err.message);
    console.log('Connected to ' + DB_PATH + ' database.')

    // Enable foreign keys
    db.run('PRAGMA foreign_keys = ON;', (error) => {
        if (error)
            console.error("Pragma statement didn't work.");
        else
            console.log("Foreign Key Enforcement is on.");
    });
});
class Blog {
    //fetch all blogs
    static all(callback)
    {      db.all('select * from blog', [], (err, rows) =>{
        if (err)
            return console.error(err.message);
        callback(rows);
    });
    }

    //select a specific blog according to a specific search term
    static find(searchTerm, callback)
    {   db.get('select * from blog where searchTerm = ? and ((content like '%' || ? || '%') or (title like '%' || ? || '%'))', searchTerm, callback);
    }

    //populate blog data into table
    static create(data, callback)
    {   let sql = "insert into blog(creator, createDate, title, searchTerm, content) values (?, ?, ?, ?, ?)";
        db.run(sql, data.creator, data.createDate, data.title, data.searchTerm, data.content, callback);
    }

    //To remove a blog
    static delete(title, callback)
    {  if (!title)
        return callback(new Error('Please provide a title'));
        db.run('delete from blog where title = ?', title, callback);
    }
}

module.exports = db;
module.exports.Blog = Blog;
