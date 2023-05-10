const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const userAdmin = require('./routes/add-users');
const users = require('./routes/get-users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', userAdmin.routes);
app.use(users);

app.use((req, res, next) => {
    res.render('404', { pageTitle: 'Page Not Found', path: '' });
})

app.listen(7777);