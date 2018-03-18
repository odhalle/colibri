module.exports = function (app) {

    var extensions = require('../controllers/extension.controller.js');

    // Create a new extension
    app.post('/extensions', extensions.create);

    // Retrieve all extensions
    app.get('/extensions', extensions.findAll);

    // Retrieve a single extension with extensionId
    app.get('/extensions/:extensionId', extensions.findOne);

    // Update an extension with extensionId
    app.put('/extensions/:extensionId', extensions.update);

    // Delete an extension with extensionId
    app.delete('/extensions/:extensionId', extensions.delete);
}