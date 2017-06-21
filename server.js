const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.text());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/client.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/client.js'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname + '/style.css'));
});

app.post('/', (req, res) => {
  try {
    const result = eval(req.body);

    if (result instanceof Promise) {
      result
        .then(value => res.send(String(value)))
        .catch((err) => {
          res.status(500);
          res.send(err.message);
        })
    }

  } catch(err) {
    res.status(500);
    res.send(err.message);
  }
});

app.listen(3000, () => {
  console.log('App listening at port 3000.');
});
