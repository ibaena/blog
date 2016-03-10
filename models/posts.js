//Set Model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/blog-dev');

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
