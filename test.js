/* eslint-disable */
const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(__dirname +'/build/static'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html'));
});

app.listen(3010);
