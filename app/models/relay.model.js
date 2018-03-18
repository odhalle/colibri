var mongoose = require('mongoose');

var RelaySchema = mongoose.Schema({
    email: {
        type: String,
        lowercase: true
    },
    last_name: {
        type: String
    },
    first_name: {
        type: String
    },
    nb_of_guests: {
        type: Number,
        min: 1,
        max: 100
    },
    guests_first_names: {
        type: [String]
    },
    date: {
        type: Date
    },
    remark: {
        type: String
    }
})

var Relay = mongoose.model('Relay', RelaySchema);
module.exports = Relay