module.exports = function(app) {
  var accomodations = require('../controllers/accomodation.controller.js')

  // Create a new accomodation
  app.post('/accomodations', accomodations.create)

  // Retrieve all accomodations
  app.get('/accomodations', accomodations.findAll)

  // Retrieve a single accomodation with accomodationId
  app.get('/accomodations/:accomodationId', accomodations.findOne)

  // Update an accomodation with accomodationId
  app.put('/accomodations/:accomodationId', accomodations.update)

  // Delete an accomodation with accomodationId
  app.delete('/accomodations/:accomodationId', accomodations.delete)
}
