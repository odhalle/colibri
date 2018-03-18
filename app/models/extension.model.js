var mongoose = require('mongoose');

var ExtensionSchema = mongoose.Schema({
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
    phone_number: {
        type: String,
        required: true
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

var Extension = mongoose.model('Extension', ExtensionSchema);
module.exports = Extension