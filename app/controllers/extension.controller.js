var Extension = require('../models/extension.model.js')

exports.create = function(req, res) {
  // Create and save a new extension

  // TODO Add checks here

  var extension = new Extension({
    host_email: req.body.host_email,
    host_last_name: req.body.host_last_name,
    host_first_name: req.body.host_first_name,
    host_phone_number: req.body.host_phone_number,
    number_of_guests: req.body.number_of_guests,
    guests_first_names: req.body.guests_first_names,
    date: req.body.date,
    remark: req.body.remark
  })

  extension.save(function(err, data) {
    if (err) {
      console.log(err)
      res
        .status(500)
        .send({ message: 'Some error occurred while creating the extension.' })
    } else {
      res.send(data)
    }
  })
}

exports.findAll = function(req, res) {
  // Retrieve and return all extensions from the database.
  Extension.find(function(err, extensions) {
    if (err) {
      console.log(err)
      res
        .status(500)
        .send({ message: 'Some error occurred while retrieving extensions.' })
    } else {
      res.send(extensions)
    }
  })
}

exports.findOne = function(req, res) {
  // Find a single extension with a extensionId
  Extension.findById(req.params.extensionId, function(err, extension) {
    if (err) {
      console.log(err)
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Extension not found with id ' + req.params.extensionId
        })
      }
      return res.status(500).send({
        message: 'Error retrieving extension with id ' + req.params.extensionId
      })
    }

    if (!extension) {
      return res.status(404).send({
        message: 'Extension not found with id ' + req.params.extensionId
      })
    }

    res.send(extension)
  })
}

exports.update = function(req, res) {
  // Update an extension identified by the extensionId in the request
  Extension.findById(req.params.extensionId, function(err, extension) {
    if (err) {
      console.log(err)
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Extension not found with id ' + req.params.extensionId
        })
      }
      return res.status(500).send({
        message: 'Error finding extension with id ' + req.params.extensionId
      })
    }

    if (!extension) {
      return res.status(404).send({
        message: 'Extension not found with id ' + req.params.extensionId
      })
    }

    extension.host_email = req.body.host_email
    extension.host_last_name = req.body.host_last_name
    extension.host_first_name = req.body.host_first_name
    extension.host_phone_number = req.body.host_phone_number
    extension.number_of_guests = req.body.number_of_guests
    extension.guests_first_names = req.body.guests_first_names
    extension.date = req.body.date
    extension.remark = req.body.remark

    extension.save(function(err, data) {
      if (err) {
        res.status(500).send({
          message:
            'Could not update extension with id ' + req.params.extensionId
        })
      } else {
        res.send(data)
      }
    })
  })
}

exports.delete = function(req, res) {
  // Delete an extension with the specified extensionId in the request
  Extension.findByIdAndRemove(req.params.extensionId, function(err, extension) {
    if (err) {
      console.log(err)
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Extension not found with id ' + req.params.extensionId
        })
      }
      return res.status(500).send({
        message: 'Could not delete extension with id ' + req.params.extensionId
      })
    }

    if (!extension) {
      return res.status(404).send({
        message: 'Extension not found with id ' + req.params.extensionId
      })
    }

    res.send({ message: 'Extension deleted successfully!' })
  })
}
