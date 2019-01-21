//File: controllers/tvshows.js
var mongoose = require('mongoose');
var GipiModel  = mongoose.model('GipiModel');

//GET - Return all tvshows in the DB
exports.findAllTVShows = function(req, res) {
	GipiModel.find(function(err, tvshows) {
    if(err) res.send(500, err.message);

    console.log('GET /tvshows')
		res.status(200).jsonp(tvshows);
	});
};



//POST - Insert a new TVShow in the DB
exports.addTVShow = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var gipiModel = new GipiModel({
		text:    req.body.title,
		latitude: 	  req.body.year,
		longitude:  req.body.country
	});

	gipiModel.save(function(err, gipiModel) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(gipiModel);
	});
};