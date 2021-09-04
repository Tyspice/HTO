const express = require('express');
const app = express();
const port = 3000;

const api = require(api);

app.get('/', (req, res) => {
  res.send('Water\'s not ready yet')
})

app.use('/api/v0', api);

app.listen(port, () => {
  console.log(`hto-server listening on port: ${port}`)
})