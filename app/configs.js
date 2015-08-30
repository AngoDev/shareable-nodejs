// Require modules
var jade = require("jade");
var vision = require("vision");
var inert = require("inert");

module.exports = function(app){

	
	app.register(vision, function(err){

		// Handle with the error
		if(err) throw err;

		app.views({
			engines: {
				jade: require("jade")
			},
			relativeTo: __dirname,
			path: './views'
		});		

	});

	app.register(inert, function(){});

	app.route({
		method: 'GET',
		path: "/{params*}",
		handler: {
			directory: {
				path: "."
			}
		}
	});

}

