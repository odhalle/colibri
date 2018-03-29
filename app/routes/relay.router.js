module.exports = function(app) {
  var relays = require('../controllers/relay.controller.js')

  // Create a new relay
  app.post('/api/relays', relays.create)

  // Retrieve all relays
  app.get('/api/relays', relays.findAll)

  // Retrieve a single relay with relayId
  app.get('/api/relays/:relayId', relays.findOne)

  // Update a relay with relayId
  app.put('/api/relays/:relayId', relays.update)

  // Delete a relay with relayId
  app.delete('/api/relays/:relayId', relays.delete)
}
