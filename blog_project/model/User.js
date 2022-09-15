//import db.js module
var db = require('./db');

class User {
    //fetch all registered users
    static all(callback)
    {  db.all('select * from user',callback);
    }

    //select a specific user
    static find(name, callback)
    {   db.get('select * from user where username = ?', name, callback);
    }

    //populate user data into table
    static create(data, callback)
    {   let sql = "insert into user(username, password) values (?, ?)";
        db.run(sql, data.username, data.password, callback);
    }

    //To remove an user
    static delete(name, callback)
    {  if (!name)
        return callback(new Error('Please provide an user name'));
        db.run('delete from user where name = ?', name, callback);
    }
}

module.exports = db;
module.exports.User = User;