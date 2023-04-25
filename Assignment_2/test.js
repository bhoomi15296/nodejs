const express = require('express');

const app = express();

/*app.use((req, res, next) => {
    console.log("This is the first Middleware");
    next();
});

app.use((req, res, next) => {
    console.log("This is the second Middleware");
    res.send("<h1> Hello World! </h1>");
});*/

app.use('/users', (req, res, next) => {
    res.send("<h1>Hello Users!</h1>");
});

app.use('/', (req, res, next) => {
    res.send("<h1>Hello Main!</h1>");
});

app.listen(7777);