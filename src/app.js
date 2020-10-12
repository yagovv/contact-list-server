require('dotenv').config();
require('../config.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

app.use('/api', routes);

app.get('*', function (req, res) {
  res.status(200).send({ message: 'Hello' });
});

app.listen(port, function () {
  console.log('server start on port: ' + port);
});
