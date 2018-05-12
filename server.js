var express = require('express');
var app = express();

const  PORT = process.env.PORT || 8080;

app.get('/*', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log('Running server at port: ', PORT);
});