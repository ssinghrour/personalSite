const express   = require('express');
const app       = express();
const morgan    = require('morgan'); // middleware for color coded logging https://www.npmjs.com/package/morgan
const config    = require('./config.js');
const path      = require('path');

const  PORT = process.env.PORT || 8080;


app.use(morgan(config.morgan_mode)); // use dev for now, TODO change it in future

app.use(express.static('temp'));

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params); // http://localhost:8080/users/37/books/5, {"userId":"37","bookId":"5"}
});

app.get('/flights/:from-:to', (req, res) =>{
    res.send(req.params); // http://localhost:8080/flights/SFO-HYD, {"from":"SFO","to":"HYD"}
});

app.get('/user/:userId(\d+)', (req, res) => {
    res.send(req.params);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/temp/index.html'));
    //res.send('Hello World');
});



app.listen(PORT, () => {
    console.log('Running server at port: ', PORT);
});



// useterminal command "nodemon server.js" to start this server on every file save

// use command "mongod" to start mongo database. Default port is usually 27017

// use command  mongo "mongo --host 127.0.0.1:27017" to start a mongo shell