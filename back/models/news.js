const mongoose = require('mongoose');
const {Schema} = mongoose;
//: title, body, image, source & publisher
const newsSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    image: {type: String},
    source: {type: String},
    publisher: {type: String, required: false},
});

module.exports = mongoose.model('news', newsSchema);