const mongoose = require('mongoose');
const token = require('./token.js');
const uri = `mongodb+srv://${token.user}:${token.secret}@cluster0-atbiz.mongodb.net/dailytrends?retryWrites=true&w=majority`; 
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;
