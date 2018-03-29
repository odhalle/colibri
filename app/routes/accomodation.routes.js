module.exports = function(app) {
  var accomodations = require('../controllers/accomodation.controller.js')

  // Create a new accomodation
  app.post('/api/accomodations', accomodations.create)

  // Retrieve all accomodations
  app.get('/api/accomodations', accomodations.findAll)

  // Retrieve a single accomodation with accomodationId
  app.get('/api/accomodations/:accomodationId', accomodations.findOne)

  // Update an accomodation with accomodationId
  app.put('/api/accomodations/:accomodationId', accomodations.update)

  // Delete an accomodation with accomodationId
  app.delete('/api/accomodations/:accomodationId', accomodations.delete)
}
