const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    products = adminData.products;
    res.render('shop', { product: products, pageTitle: 'Shop', path: '/shop' });
});

module.exports = router;