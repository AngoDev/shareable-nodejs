var root = require("../controllers/root");

module.exports = function(app){
	
	app.route({
		method: 'GET',
		path: '/',
		handler: root
	});

}