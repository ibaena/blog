//Set Model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var newsSchema = new Schema({
  title: String,
  link:  String,
  date: { type: Date, default: Date.now },
});

var news = mongoose.model('news', newsSchema);

module.exports = news;
