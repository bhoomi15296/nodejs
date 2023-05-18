const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', { product: products, pageTitle: 'All Products', path: '/shop/products'});
    });    
}; 

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId, product => {
        console.log(product);
        res.render('shop/product-detail', { pageTitle: product.title, product_details: product, path: '/shop/products' });
    }); 
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { product: products, pageTitle: 'Shop', path: '/shop/product-list'});
    });
}

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    res.redirect('/cart');
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