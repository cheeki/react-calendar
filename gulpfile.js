/**
 * Created by 1001196 on 16. 1. 13..
 */
var gulp = require("gulp");
var gutil = require("gulp-util");
var jshint = require('gulp-jshint');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var del = require('del');

gulp.task("default", function () {
    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task("build", function () {
    del(['build/', 'dist/']);

    var webpackConfig = require('./webpack.config.js');
        webpack(webpackConfig).run( function(err, stats) {
                    if (err) {
                        gutil.log('Error', err);
                    } else {
                        Object.keys(stats.compilation.assets).forEach(function(key) {
                            gutil.log('Webpack: output ', gutil.colors.green(key));
                        });
                        gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
                    }
            })
});

gulp.task('serve', function () {
    var config = require('./webpack.config.js');
    var compiler = webpack(config);
    var server = new WebpackDevServer(compiler, config.devServer);

    server.listen(8000, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
    });
});

gulp.task('jshint', ['default'], function () {
    gulp.src('dist/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


//gulp.watch('src/**/*.js', ['dev']);