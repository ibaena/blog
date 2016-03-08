var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');


var PORT = process.env.PORT || 8070;

//SET HANDLEBARS ENGINE
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//Serve static content for the app from the "public" directory in the application directory.
app.use('/public', express.static(__dirname + "/public"));

//ROUTES
app.get('/', function(req, res){
  res.render('home',{
    layout:'main',
    title:'Penniless Developer',
    head:'Penniless Developer',
    subhead:'Where the Node Happens'
  });
});

app.get('/featured', function(req, res){
  res.render('featured',{
    layout:'main',
    title:'Penniless Developer - Featured',
    head:'Featured',
    subhead:'Whats Trending'
  });
});

app.get('/zen', function(req, res){
  res.render('zen',{
    layout:'main',
    title:'Penniless Developer - Zen',
    head:'JS Zen',
    subhead: 'Peace and Coding'
  });
});



app.listen(PORT, function() {
  console.log("Listening on PORT %s", PORT);
});
