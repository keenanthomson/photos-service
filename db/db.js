const mysql = require('mysql');
const key = require('../src/config/unsplash.js');

const connection = mysql.createConnection({
  host: key.MYSQL_HOST,
  user: key.MYSQL_USER,
  password: key.MYSQL_PASSWORD,
  database: key.MYSQL_DATABASE
});

connection.connect();

const insertIntoDB = (id, likes, username, link, tag, photoSet) => {
  const sql = `INSERT INTO photos (id, likes, username, link, tag, photo_set)
               VALUES ('${id}', '${likes}', '${username}', '${link}', '${tag}', '${photoSet}')`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    }
  });
};

const retrieve = callback => {
  const sql = `SELECT *
               FROM photos`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      callback(row);
    }
  });
};

// connection.end();

module.exports = {
  insertIntoDB,
  retrieve
};
