'use strict';
const express = require('express');
const router = express.Router();
const apiAdapter = require('./apiAdapter');

let BASE_URL = 'https://auth-dot-moojm-finance.ue.r.appspot.com/';
const api = apiAdapter(BASE_URL);

router.get('/getAccounts', (req, res) => {
  api.get(req.path).then(resp => {
      res.send(resp.data);
  });
});;

module.exports = router;
