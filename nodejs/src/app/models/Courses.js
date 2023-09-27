const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name : { type:String, maxLength:255 },
    des: { type:String, maxLength:600 },
    image: { type:String },
    createdAt: { type:Date, dafault:Date.now },
    updatedAt: { type:Date, dafault:Date.now },
});

module.exports = mongoose.model('Course', Course);