var mongoose = require('mongoose')

var RideSchema = mongoose.Schema({
  driver_email: {
    type: String,
    lowercase: true
  },
  driver_last_name: {
    type: String
  },
  driver_first_name: {
    type: String
  },
  driver_phone_number: {
    type: String,
    required: true
  },
  driver_address: {
    zip_code: {
      type: String
    },
    city: {
      type: String
    }
  },
  date: {
    type: Date
  },
  vehicle_capacity: {
    type: Number,
    min: [1, 'Too few places'],
    max: 100
  },
  driver_arrangements: {
    type: [String]
  },
  remark: {
    type: String
  }
})

var Ride = mongoose.model('Ride', RideSchema)
module.exports = mongoose.model('Ride', RideSchema)
