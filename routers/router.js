'use strict';
const express = require('express');
const router = express.Router();
const authService = require('./authService.js');

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next();
})

router.use('/api/auth', authService);

module.exports = router;
