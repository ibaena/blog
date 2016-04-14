//Set Model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds023530.mlab.com:23530/heroku_83vxxjl0');

//schema
var blogSchema = new Schema({
  author: String,
  title:  String,
  subject:  String,
  body:   String,
  date: { type: Date, default: Date.now },
});

var posts = mongoose.model('posts', blogSchema);

module.exports = posts;
