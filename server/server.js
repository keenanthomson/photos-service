const express = require('express');
const bodyParser = require('body-parser');
const db = require('./../db/db.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + './../dist'));

app.post('/retrieve/:id', (req, res) => {
  const photos_id = req.params.id;
  const { id, likes, username, link, tag, photo_set } = req.body;

  db.create(
    data => {
      console.log('CREATE response success');
      res.send(data);
    },
    id,
    photos_id,
    likes,
    username,
    link,
    tag,
    photo_set
  );
});

app.get('/retrieve', (req, res) => {
  db.read(data => {
    console.log('READ response success');
    res.send(data);
  });
});

app.put('/retrieve/:id', (req, res) => {
  const photos_id = req.params.id;
  const { id, likes, username } = req.body;

  db.update(
    data => {
      console.log('UPDATE response success');
      res.send(data);
    },
    id,
    photos_id,
    likes,
    username
  );
});

app.delete('/retrieve/:id', (req, res) => {
  const photos_id = req.params.id;

  db.remove(data => {
    console.log('DELETE response success');
    res.send(data);
  }, photos_id);
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
