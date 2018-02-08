var express = require('express'),
app = express(),
port = process.env.PORT || 3000,

mongoose = require('mongoose'),
end_point = require('./api/models/loadTestModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LoadTestDb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/loadTestRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Load Test RESTful API server started on: ' + port);
