const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    date_create:{
        type: Date,
    },
    date_update:{
        type: Date,
    },
    date_delete:{
        type: Date,
    }
});

let people = module.exports  = mongoose.model('people', PeopleSchema);

module.exports.get = (callback,limit) => {
    people.find(callback).limit(limit);
}