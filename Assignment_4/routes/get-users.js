const express = require('express');

const router = express.Router();

const userData = require('./add-users');

router.get('/', (req, res, next) => {
	users_list = userData.users;
	res.render('get-users', { users: users_list, pageTitle: 'Users' });
});

module.exports = router;