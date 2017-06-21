const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { port } = require('./etc/config.json');

const app = express();

app.use(bodyParser.text());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.post('/run', (req, res) => {
  try {
    const result = eval(req.body);

    if (result instanceof Promise) {
      result
        .then(value => res.send(String(value)))
        .catch((err) => {
          res.error(500, err.stack);
        });

      return;
    }

    res.send(result);
  } catch(err) {
    res.error(500, err.stack);
  }
});

app.listen(port, () => {
  console.log(`Remote node is listening at port ${port}.`);
});
