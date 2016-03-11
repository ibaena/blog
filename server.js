var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var morgan = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('./config/passport');
var flash = require('connect-flash');
var passport = require('passport');
var cheerio = require('./config/cheerio');



var PORT = process.env.PORT || 8000;


//SET HANDLEBARS ENGINE
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//SERVE FILES FROM PUBLIC DIR
app.use('/public', express.static(__dirname + "/public"));

//FLASH
app.use(flash());

//MORGAN
app.use(morgan('dev'));

//BODYPARSER TO READ HTML
app.use(bodyParser.urlencoded({
  extended: false
}));

//CREATE SECRET FOR USER LOGIN
app.use(session({
  secret: 'DarkKnight',
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 10
  },
  saveUninitialized: true,
  resave: true
}));

//PASSPORT INITIALIZE
app.use(passport.initialize());
app.use(passport.session());


//ROUTES
var routes = require('./controllers/router');
var admin = require('./controllers/admin');
var auth = require('./controllers/auth');
app.use('/', routes);
app.use('/', admin);
app.use('/', auth);



app.listen(PORT, function() {
  console.log("Listening on PORT %s", PORT);
});
