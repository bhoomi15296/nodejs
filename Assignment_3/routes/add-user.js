const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/add-user', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-users.html'));
});

router.post('/display', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;