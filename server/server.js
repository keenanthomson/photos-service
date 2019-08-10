const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./../db/db.js');
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/retrieve', (req, res) => {
  res.send('POST request to homepage');
});

app.get('/retrieve/:id', (req, res) => {
  dbConnection.retrieve(data => {
    res.send(data);
  });
});

app.put('/retrieve', (req, res) => {
  res.send('PUT request to homepage');
});

app.delete('/retrieve', (req, res) => {
  res.send('DELETE request to homepage');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
