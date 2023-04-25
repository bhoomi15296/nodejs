const bodyParser = require('body-parser');
const express = require('express');
const mainRoute = require('./routes/add-user');
const displayRoute = require('./routes/display');

const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoute);
app.use(displayRoute);

app.listen(4000);