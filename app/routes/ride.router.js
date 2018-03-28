module.exports = function(app) {
  var rides = require('../controllers/ride.controller.js')

  // Create a new ride
  app.post('/rides', rides.create)

  // Retrieve all rides
  app.get('/rides', rides.findAll)

  // Retrieve a single ride with rideId
  app.get('/rides/:rideId', rides.findOne)

  // Update a ride with rideId
  app.put('/rides/:rideId', rides.update)

  // Delete a ride with rideId
  app.delete('/rides/:rideId', rides.delete)
}
