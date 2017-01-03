const express = require('express');
const PORT = 3000;
const app = express();
const buzzwords = require('./routes/buzzwords')
const bp = require('body-parser');

app.use(express.static('public'));
app.use(bp.urlencoded({extended: true}));

app.use('/buzzwords', buzzwords);

const server = app.listen(PORT, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`Port listening at ${host}:${port}`)
})