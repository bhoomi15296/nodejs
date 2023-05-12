const express = require('express');
const path = require('path');

const productController = require('../controllers/products.js');

const router = express.Router();

router.get('/add-product', productController.getAddProduct);

router.post('/product', productController.postAddProduct);

module.exports = router;