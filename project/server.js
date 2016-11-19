// Dependencies
var express = require('express');  
var path = require('path');  
var bodyParser = require('body-parser'); 

// Routes
var index = require('./routes/index');

// Port
var port = 3000;

// Express
var app = express(); 

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Body Parser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

// Static Route Angular
app.use(express.static(path.join(__dirname, 'client')));

// Routes
app.use('/', index);

// 404
app.use(function (req, res, next) {
  res.sendFile(__dirname + '/views/404.html');
})

// Listen to run the server
app.listen(port, function(){
	console.log('Available On Port ' + port);
});