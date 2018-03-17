var mongoose = require('mongoose');

var AccomodationSchema = mongoose.Schema({
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
    alias: {
        type: String
    },
    address: {
        street: {
            type: String
        },
        number: {
            type: String
        },
        zip: {
            type: String
        },
        city: {
            type: String
        }
    },
    phone: {
        type: String,
        required: true
    },
    places: {
        type: Number,
        min: 1,
        max: 100
    },
    nights: {
        type: Number,
        min: 1,
        max: 100
    },
    doRide: {
        type: Boolean,
    },
    additional_places: {
        type: Number
    },
    driver: {
        type: String
    },
    remark: {
        type: String,
    }
})

var Accomodation = mongoose.model('Accomodation', AccomodationSchema);
module.exports = Accomodation