var Accomodation = require('../models/accomodation.model.js')

exports.create = function(req, res) {
  // Create and save a new accomodation

  // TODO Add checks here
  var accomodation = new Accomodation({
    host_email: req.body.host_email,
    host_last_name: req.body.host_last_name,
    host_first_name: req.body.host_first_name,
    host_alias: req.body.host_alias,
    host_address: {
      street: req.body.host_address.street,
      number: req.body.host_address.number,
      zip_code: req.body.host_address.zip_code,
      city: req.body.host_address.city
    },
    host_phone_number: req.body.host_phone_number,
    number_of_guests: req.body.number_of_guests,
    number_of_nights: req.body.number_of_nights,
    date: req.body.date,
    host_does_drive: req.body.host_does_drive,
    host_additional_places: req.body.host_additional_places,
    host_selected_driver: req.body.host_selected_driver,
    remark: req.body.remark
  })

  accomodation.save(function(err, data) {
    if (err) {
      console.log(err)
      res
        .status(500)
        .send({
          message: 'Some error occurred while creating the accomodation.'
        })
    } else {
      res.send(data)
    }
  })
}

exports.findAll = function(req, res) {
  // Retrieve and return all accomodations from the database.
  Accomodation.find(function(err, accomodations) {
    if (err) {
      console.log(err)
      res
        .status(500)
        .send({
          message: 'Some error occurred while retrieving accomodations.'
        })
    } else {
      res.send(accomodations)
    }
  })
}

exports.findOne = function(req, res) {
  // Find a single accomodation with a accomodationId
  Accomodation.findById(req.params.accomodationId, function(err, accomodation) {
    if (err) {
      console.log(err)
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({
            message:
              'Accomodation not found with id ' + req.params.accomodationId
          })
      }
      return res.status(500).send({
        message:
          'Error retrieving accomodation with id ' + req.params.accomodationId
      })
    }

    if (!accomodation) {
      return res
        .status(404)
        .send({
          message: 'Accomodation not found with id ' + req.params.accomodationId
        })
    }

    res.send(accomodation)
  })
}

exports.update = function(req, res) {
  // Update an accomodation identified by the accomodationId in the request
  Accomodation.findById(req.params.accomodationId, function(err, accomodation) {
    if (err) {
      console.log(err)
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({
            message:
              'Accomodation not found with id ' + req.params.accomodationId
          })
      }
      return res
        .status(500)
        .send({
          message:
            'Error finding accomodation with id ' + req.params.accomodationId
        })
    }

    if (!accomodation) {
      return res
        .status(404)
        .send({
          message: 'Accomodation not found with id ' + req.params.accomodationId
        })
    }

    accomodation.host_email = req.body.host_email
    accomodation.host_last_name = req.body.host_last_name
    accomodation.host_first_name = req.body.host_first_name
    accomodation.host_alias = req.body.host_alias
    accomodation.host_address = {
      street: req.body.host_address.street,
      number: req.body.host_address.number,
      zip_code: req.body.host_address.zip_code,
      city: req.body.host_address.city
    }
    accomodation.host_phone_number = req.body.host_phone_number
    accomodation.number_of_guests = req.body.number_of_guests
    accomodation.number_of_nights = req.body.number_of_nights
    accomodation.date = req.body.date
    accomodation.host_does_drive = req.body.host_does_drive
    accomodation.host_additional_places = req.body.host_additional_places
    accomodation.host_selected_driver = req.body.host_selected_driver
    accomodation.remark = req.body.remark

    accomodation.save(function(err, data) {
      if (err) {
        res.status(500).send({
          message:
            'Could not update accomodation with id ' + req.params.accomodationId
        })
      } else {
        res.send(data)
      }
    })
  })
}

exports.delete = function(req, res) {
  // Delete an accomodation with the specified accomodationId in the request
  Accomodation.findByIdAndRemove(req.params.accomodationId, function(
    err,
    accomodation
  ) {
    if (err) {
      console.log(err)
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({
            message:
              'Accomodation not found with id ' + req.params.accomodationId
          })
      }
      return res.status(500).send({
        message:
          'Could not delete accomodation with id ' + req.params.accomodationId
      })
    }

    if (!accomodation) {
      return res
        .status(404)
        .send({
          message: 'Accomodation not found with id ' + req.params.accomodationId
        })
    }

    res.send({ message: 'Accomodation deleted successfully!' })
  })
}
