//Set Model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.connect('mongodb://localhost:27017/blog-dev');

//schema
var newsSchema = new Schema({
  title: String,
  link:  String,
  date: { type: Date, default: Date.now },
});

var news = mongoose.model('news', newsSchema);

module.exports = news;
