const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const runCode = require('./runCode');
const { port } = require('./../etc/config.json');

const app = express();

app.use(bodyParser.text());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/', express.static(path.join(__dirname, '../public')));

app.post('/run', (req, res) => {
  runCode(req.body)
    .then(result => res.json({ success: true, data: result }))
    .catch(err => res.json({ success: false, data: err.stack }))
});

app.listen(port, () => {
  console.log(`Remote node is listening at port ${port}.`);
});
