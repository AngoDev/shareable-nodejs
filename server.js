// Require modules
var Hapi = require("hapi");
var routes = require("./app/routes/routes");
var inert = require("inert");
var path = require("path");
var configs = require("./app/configs");

// Init the server
var app = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: path.join(__dirname, '/app/public')
			}
		}
	}
});

app.connection({
	port: 3000
});

// Init configs
configs(app);

// Start routes here
routes(app);

app.start(function(){
	console.log("Shareable is online!");	
});