const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', { product: products, pageTitle: 'All Products', path: '/shop/products'});
    });    
}; 

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { product: products, pageTitle: 'Shop', path: '/shop/product-list'});
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', { path: '/shop/cart', pageTitle: 'My Cart' });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { path: '/shop/orders', pageTitle: 'Orders' });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { path: '/shop/checkout', pageTitle: 'Checkout' });
};