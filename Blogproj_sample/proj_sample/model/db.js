const sqlite3 = require('sqlite3').verbose();

// open the database connection
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error(err.message);
    }
});

db.serialize(() => {
    // Queries scheduled here will be serialized.
    db.run('CREATE TABLE IF NOT EXISTS Books (' +
        '  Book_ID INTEGER PRIMARY KEY,' +
        '  Title VARCHAR(100) NOT NULL,' +
        '  Author VARCHAR(100) NOT NULL,' +
        '  Comments TEXT);', err => {
        if (err)
            return console.error(err.message);
        console.log("Successful creation of the 'Books' table");
    });
});

db.serialize(() => {
    const sql_insert = 'insert into Books(Title, Author, Comments) values (?, ?, ?)';
    db.run(sql_insert, ['Mrs. Bridge', 'Evan S. Connell', 'First in the serie'], err => {
        if (err)
            return console.error(err.message);
        console.log("Successful creation of 1 book");
    });
    db.run(sql_insert, ['Mr. Bridge', 'Evan S. Connell', 'Second in the serie'], err => {
        if (err)
            return console.error(err.message);
        console.log("Successful creation of 2 books");
    });
    db.run(sql_insert, ['Lingénue libertine', 'Colette', 'Minne + Les égarements de Minne'],err => {
        if (err)
            return console.error(err.message);
        console.log("Successful creation of 3 books");
    });
});

//list all tables in the database
db.serialize(function () {
    db.all("select name from sqlite_master where type='table'", (err, table) => {
        console.log(table);
    });
    db.all('select * from Books', (err, books) =>
    {  console.log(books);

    });
});

module.exports = db