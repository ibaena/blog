var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var morgan = require('morgan');
var mongoose = require('mongoose');



var PORT = process.env.PORT || 8001;


//SET HANDLEBARS ENGINE
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//Serve static content for the app from the "public" directory in the application directory.
app.use('/public', express.static(__dirname + "/public"));

//MORGAN
app.use(morgan('dev'));

//BODYPARSER TO READ HTML
app.use(bodyParser.urlencoded({
  extended: false
}));

//ROUTES
var routes = require('./controllers/router.js');
var admin = require('./controllers/admin.js');
app.use('/', routes);
app.use('/', admin);



app.listen(PORT, function() {
  console.log("Listening on PORT %s", PORT);
});
