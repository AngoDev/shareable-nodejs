// Require modules
var jade = require("jade");
var vision = require("vision");

module.exports = function(app){
	
	app.register(vision, function(err){

		app.views({
			engines: {
				jade: require("jade")
			},
			relativeTo: __dirname,
			path: './views'
		});		

	});

}