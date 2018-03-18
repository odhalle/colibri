var Relay = require('../models/relay.model.js');

exports.create = function (req, res) {
    // Create and save a new relay
    console.log(req.body)
    if (!req.body.email) {
        return res.status(400).send({ message: "Relay can not be empty" });
    }

    var relay = new Relay({
        email: req.body.email,
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        nb_of_guests: req.body.nb_of_guests,
        guests_first_names: req.body.guests_first_names,
        date: req.body.date,
        remark: req.body.remark
    });

    relay.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the relay." });
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function (req, res) {
    // Retrieve and return all relays from the database.
    Relay.find(function (err, relays) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving relays." });
        } else {
            res.send(relays);
        }
    });
};

exports.findOne = function (req, res) {
    // Find a single relay with a relayId
    Relay.findById(req.params.relayId, function (err, relay) {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "Relay not found with id " + req.params.relayId });
            }
            return res.status(500).send({ message: "Error retrieving relay with id " + req.params.relayId });
        }

        if (!relay) {
            return res.status(404).send({ message: "Relay not found with id " + req.params.relayId });
        }

        res.send(relay);
    });
};

exports.update = function (req, res) {
    // Update a relay identified by the relayId in the request
    Relay.findById(req.params.relayId, function (err, note) {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "Relay not found with id " + req.params.relayId });
            }
            return res.status(500).send({ message: "Error finding relay with id " + req.params.relayId });
        }

        if (!relay) {
            return res.status(404).send({ message: "Relay not found with id " + req.params.relayId });
        }

        relay.email = req.body.email;
        relay.last_name = req.body.last_name;
        relay.first_name = req.body.first_name;
        relay.nb_of_guests = req.body.nb_of_guests;
        relay.guests_first_names = req.body.guests_first_names;
        relay.date = req.body.date;
        relay.remark = req.body.remark;

        relay.save(function (err, data) {
            if (err) {
                res.status(500).send({ message: "Could not update relay with id " + req.params.relayId });
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function (req, res) {
    // Delete a relay with the specified relayId in the request
    Relay.findByIdAndRemove(req.params.relayId, function (err, relay) {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "Relay not found with id " + req.params.relayId });
            }
            return res.status(500).send({ message: "Could not delete relay with id " + req.params.relayId });
        }

        if (!relay) {
            return res.status(404).send({ message: "Relay not found with id " + req.params.relayId });
        }

        res.send({ message: "Relay deleted successfully!" })
    });
};