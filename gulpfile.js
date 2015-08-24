//*********************
//GulpFile
//*********************


//Variables
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');

//Sources
var coffeeSources = ['components/coffee/*.coffee'];



//Tasks
gulp.task('coffee', function(){
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});