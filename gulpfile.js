/**
 * Created by 1001196 on 16. 1. 13..
 */
var gulp = require("gulp");
var babel = require("gulp-babel");
var gutil = require("gulp-util");
var jshint = require('gulp-jshint');

gulp.task("default", function () {
    gutil.log("test");

    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});


gulp.task("dev", ["default"], function () {
    return gutil.log("dev");
});

gulp.task('jshint', ['default'], function () {
    gulp.src('dist/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


//gulp.watch('src/**/*.js', ['dev']);