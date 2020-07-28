"use strict";
const express = require('express');
const routes = require('./routes');

const app = express();

app.get('/', (req ,res) => {
    res.status(200).send('Auth Service').end();
});

app.use(routes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
