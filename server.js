var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')


// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require accomodation, ride, extension routes
require('./app/routes/accomodation.routes.js')(app);
require('./app/routes/ride.routes.js')(app);
require('./app/routes/extension.router.js')(app);
require('./app/routes/relay.router.js')(app);

// listen for requests
app.listen(8080, function(){
    console.log("Server is listening on port 8080");
});