'use strict';
const express = require('express');
const loginController = require('./controllers/loginController.js');

const routes = express();

routes.get('/getAccounts', loginController.getAccounts);

module.exports = routes;
