module.exports = function(app) {
  var rides = require('../controllers/ride.controller.js')

  // Create a new ride
  app.post('/api/rides', rides.create)

  // Retrieve all rides
  app.get('/api/rides', rides.findAll)

  // Retrieve a single ride with rideId
  app.get('/api/rides/:rideId', rides.findOne)

  // Update a ride with rideId
  app.put('/api/rides/:rideId', rides.update)

  // Delete a ride with rideId
  app.delete('/api/rides/:rideId', rides.delete)
}
