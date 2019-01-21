var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/gipis', function(err, res) {
  if(err) {
    console.log('ERROR: Connected to Database');
  };
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/gipi')(app, mongoose);
var GipiCtrl = require('./controllers/gipis');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Gipi API. OK!!");
});
app.use(router);

// API routes
var gipis = express.Router();

gipis.route('/gipis')
  .get(GipiCtrl.findAllTVShows)
  .post(GipiCtrl.addTVShow);

app.use('/api', gipis);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
