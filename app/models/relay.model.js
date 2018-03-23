var mongoose = require('mongoose');

var RelaySchema = mongoose.Schema({
    host_email: {
        type: String,
        lowercase: true
    },
    host_last_name: {
        type: String
    },
    host_first_name: {
        type: String
    },
    number_of_guests: {
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