// Require some modules
var gulp = require("gulp");
var stylus = require("gulp-stylus");
var watch = require("gulp-watch");

// Gulp tasks
gulp.task("stylus", function(){

	watch("./app/public/css/stylus/*.styl", function(){
		// Compile stylus to css
		gulp.src("./app/public/css/stylus/*.styl")
			.pipe(stylus({compress: true}))
			.pipe(gulp.dest("./app/public/css/"));
	})
	
});

// Set deafult tasks
gulp.task('default', ["stylus"]);