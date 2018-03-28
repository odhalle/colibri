var mongoose = require('mongoose')

var AccomodationSchema = mongoose.Schema({
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
  host_alias: {
    type: String
  },
  host_address: {
    street: {
      type: String
    },
    number: {
      type: String
    },
    zip_code: {
      type: String
    },
    city: {
      type: String
    }
  },
  host_phone_number: {
    type: String,
    required: true
  },
  number_of_guests: {
    type: Number,
    min: 1,
    max: 100
  },
  number_of_nights: {
    type: Number,
    min: 1,
    max: 100
  },
  date: {
    type: Date
  },
  host_does_drive: {
    type: Boolean
  },
  host_additional_places: {
    type: Number
  },
  host_selected_driver: {
    type: String
  },
  remark: {
    type: String
  }
})

var Accomodation = mongoose.model('Accomodation', AccomodationSchema)
module.exports = Accomodation
