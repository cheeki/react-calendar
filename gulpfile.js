/**
 * Created by 1001196 on 16. 1. 13..
 */
var gulp = require("gulp");
var gutil = require("gulp-util");
var jshint = require('gulp-jshint');
var webpack = require('webpack-stream');
var del = require('del');

gulp.task("default", function () {
    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});


gulp.task("dev", function () {
    gutil.log("dev");
    del(['build/', 'dist/']);
    return gulp.src('src/test.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('build/'));
});

gulp.task('jshint', ['default'], function () {
    gulp.src('dist/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


//gulp.watch('src/**/*.js', ['dev']);