'use strict';

const express = require('express');
const router = require('./routers/router');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req ,res) => {
    res.status(200).send('Default Service').end();
});

app.use(router);

const PORT = process.env.port || 8080
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

module.exports = app;
