var gulp = require('gulp');
var include = require("gulp-include");
// var uglify = require('gulp-uglify');
var config = require('../config');
var browserSync = require('browser-sync');
var minify = require('gulp-minify');
reload = browserSync.reload;

gulp.task('js', function () {
    gulp.src(config.src.js+'/app.js')
        .pipe(include())
        // .on('error', function(){notify("Javascript include error");})
        //.pipe(uglify())
        .pipe(minify())
        .pipe(gulp.dest(config.dest.js+'/'))
        .pipe(reload({stream: true}));
});

gulp.task('js:watch', function() {
    gulp.watch(config.src.js+'/**/*.js', ['js']);
});