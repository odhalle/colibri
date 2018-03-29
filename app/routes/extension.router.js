module.exports = function(app) {
  var extensions = require('../controllers/extension.controller.js')

  // Create a new extension
  app.post('/api/extensions', extensions.create)

  // Retrieve all extensions
  app.get('/api/extensions', extensions.findAll)

  // Retrieve a single extension with extensionId
  app.get('/api/extensions/:extensionId', extensions.findOne)

  // Update an extension with extensionId
  app.put('/api/extensions/:extensionId', extensions.update)

  // Delete an extension with extensionId
  app.delete('/api/extensions/:extensionId', extensions.delete)
}
