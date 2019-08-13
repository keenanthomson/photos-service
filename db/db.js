const mysql = require('mysql');
const key = require('../src/config/unsplash.js');

const connection = mysql.createConnection({
  host: key.MYSQL_HOST,
  user: key.MYSQL_USER,
  password: key.MYSQL_PASSWORD,
  database: key.MYSQL_DATABASE
});

connection.connect();

const create = (
  callback,
  id,
  photos_id,
  likes,
  username,
  link,
  tag,
  photo_set
) => {
  const query = `INSERT INTO photos (id, photos_id, likes, username, link, tag, photo_set) VALUES ('${id}', '${photos_id}', '${likes}', '${username}', '${link}', '${tag}', '${photo_set}')`;

  connection.query(query, (err, data) => {
    if (err) {
      console.log('CREATE request err', err);
    } else {
      console.log('CREATE request success');
      callback(data);
    }
  });
};

const read = callback => {
  const query = `SELECT *
               FROM photos`;

  connection.query(query, (err, data) => {
    if (err) {
      console.log('READ request err', err);
    } else {
      console.log('READ request success');
      callback(data);
    }
  });
};

const update = (callback, id, photos_id, likes, username) => {
  const query = `UPDATE photos SET id = '${id}', likes = '${likes}', username = '${username}' WHERE photos_id = '${photos_id}'`;

  connection.query(query, (err, data) => {
    if (err) {
      console.log('UPDATE request err', err);
    } else {
      console.log('UPDATE request success');
      callback(data);
    }
  });
};

const remove = (callback, photos_id) => {
  const query = `DELETE FROM photos WHERE photos_id = '${photos_id}'`;

  connection.query(query, (err, data) => {
    if (err) {
      console.log('DELETE request err', err);
    } else {
      console.log('DELETE request success');
      callback(data);
    }
  });
};

module.exports = {
  create,
  read,
  update,
  remove
};
