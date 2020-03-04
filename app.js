var express = require('express');
var app = express();
var path = require('path');
var ports = [3000, 3001];
app.use(express.json());
app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
res.header('Access-Control-Request-Headers', 'X-Requested-With');
    next();});
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(ports[0], () => console.log(`Example app listening on port ${ports[0]}!`)); 
app.listen(ports[1], () => console.log(`Example app listening on port ${ports[1]} too!`));

var countries = require('./countries.js');
app.use('/countries', countries);
var tasks = require('./tasks.js');
app.use('/tasks', tasks);
var destinations = require('./destinations.js');
app.use('/destinations', destinations);
var payments = require('./payments.js');
app.use('/payments', payments);




