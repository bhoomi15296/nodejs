const express = require('express');

const router = express.Router();

const users_list = [];

router.get('/add-users', (req, res, next) => {
	res.render('add-users', { pageTitle: 'Add User' });
});

router.post('/users', (req, res, next) => {
	users_list.push({ 'title': req.body.title });
	res.redirect('/');
});

exports.routes = router;
exports.users = users_list;