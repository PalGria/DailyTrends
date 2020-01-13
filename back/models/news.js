const mongoose = require('mongoose');
const {Schema} = mongoose;
//: title, body, image, source y publisher
const newsSchema = new Schema({
    title: {type: String, required: true},
    body: {type: Number, required: true},
    image: {type: Boolean, default: false},
    source: {type: Boolean, default: false},
    publisher: {type: String, required: true},
});

module.exports = mongoose.model('news', newsSchema);