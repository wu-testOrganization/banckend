exports = module.exports = function(app, mongoose) {

	var gipiSchema = new mongoose.Schema({
		text: 		{ type: String },
		tatitude: 		{ type: Number },
		longitude: 	{ type: Number }
	});

	mongoose.model('GipiModel', gipiSchema);

};
