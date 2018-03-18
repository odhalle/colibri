module.exports = function (app) {

    var relays = require('../controllers/relay.controller.js');

    // Create a new relay
    app.post('/relays', relays.create);

    // Retrieve all relays
    app.get('/relays', relays.findAll);

    // Retrieve a single relay with relayId
    app.get('/relays/:relayId', relays.findOne);

    // Update a relay with relayId
    app.put('/relays/:relayId', relays.update);

    // Delete a relay with relayId
    app.delete('/relays/:relayId', relays.delete);
}