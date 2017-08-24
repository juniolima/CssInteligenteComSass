var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var htmlmin = require('gulp-html-minifier2');
//pasta de destino css
var cssDest = './dist/css/';


//tarefa para compilar e minificar
gulp.task('compile-sass', function(){
	return gulp.src('./source/scss/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
	gulp.watch('./source/scss/*.scss', ['compile-sass']);
});


gulp.task('default', ['compile-sass', 'watch']);
