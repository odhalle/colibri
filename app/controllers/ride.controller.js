var Ride = require('../models/ride.model.js')

exports.create = function(req, res) {
  // Create and save a new ride

  // TODO Add checks here

  var ride = new Ride({
    driver_email: req.body.driver_email,
    driver_last_name: req.body.driver_last_name,
    driver_first_name: req.body.driver_first_name,
    driver_phone_number: req.body.driver_phone_number,
    driver_address: {
      zip_code: req.body.driver_address.zip_code,
      city: req.body.driver_address.city
    },
    date: req.body.date,
    vehicle_capacity: req.body.vehicle_capacity,
    driver_arrangements: req.body.driver_arrangements,
    remark: req.body.remark
  })

  ride.save(function(err, data) {
    if (err) {
      console.log(err)
      res
        .status(500)
        .send({ message: 'Some error occurred while creating the ride.' })
    } else {
      res.send(data)
    }
  })
}

exports.findAll = function(req, res) {
  // Retrieve and return all rides from the database.
  Ride.find(function(err, rides) {
    if (err) {
      console.log(err)
      res
        .status(500)
        .send({ message: 'Some error occurred while retrieving rides.' })
    } else {
      res.send(rides)
    }
  })
}

exports.findOne = function(req, res) {
  // Find a single ride with a rideId
  Ride.findById(req.params.rideId, function(err, ride) {
    if (err) {
      console.log(err)
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({ message: 'Ride not found with id ' + req.params.rideId })
      }
      return res.status(500).send({
        message: 'Error retrieving ride with id ' + req.params.rideId
      })
    }

    if (!ride) {
      return res
        .status(404)
        .send({ message: 'Ride not found with id ' + req.params.rideId })
    }

    res.send(ride)
  })
}

exports.update = function(req, res) {
  // Update a ride identified by the rideId in the request
  Ride.findById(req.params.rideId, function(err, ride) {
    console.log("Hein ?")
    if (err) {
      console.log(err)
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({ message: 'Ride not found with id ' + req.params.rideId })
      }
      return res
        .status(500)
        .send({ message: 'Error finding ride with id ' + req.params.rideId })
    }

    if (!ride) {
      return res
        .status(404)
        .send({ message: 'Ride not found with id ' + req.params.rideId })
    }

    ride.driver_email = req.body.driver_email
    ride.driver_last_name = req.body.driver_last_name
    ride.driver_first_name = req.body.driver_first_name
    ride.driver_phone_number = req.body.driver_phone_number
    ride.driver_address = {
      zip_code: req.body.driver_address.zip_code,
      city: req.body.driver_address.city
    }
    ride.date = req.body.date
    ride.vehicle_capacity = req.body.vehicle_capacity
    ride.driver_arrangements = req.body.driver_arrangements
    ride.remark = req.body.remark

    ride.save(function(err, data) {
      if (err) {
        res.status(500).send({
          message: 'Could not update ride with id ' + req.params.rideId
        })
      } else {
        res.send(data)
      }
    })
  })
}

exports.delete = function(req, res) {
  // Delete a ride with the specified rideId in the request
  Ride.findByIdAndRemove(req.params.rideId, function(err, ride) {
    if (err) {
      console.log(err)
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({ message: 'Ride not found with id ' + req.params.rideId })
      }
      return res.status(500).send({
        message: 'Could not delete ride with id ' + req.params.rideId
      })
    }

    if (!ride) {
      return res
        .status(404)
        .send({ message: 'Ride not found with id ' + req.params.rideId })
    }

    res.send({ message: 'Ride deleted successfully!' })
  })
}
