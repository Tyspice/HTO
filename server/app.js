const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;
const api = require('./api');

app.use(cors());

app.get('/', (req, res) => {
  res.json('Water\'s not ready yet')
})

app.use('/api/v0', api);

app.get('/', (req, res) => {
  res.send('Water\'s not ready yet')
})

app.listen(port, () => {
  console.log(`hto-server listening on port: ${port}`)
})