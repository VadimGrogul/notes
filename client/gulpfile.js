const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const webpack = require('webpack-stream');
const prefix = require('gulp-autoprefixer');
const named = require('vinyl-named');

function server() {
    return connect.server({
        root: './dist',
        livereload: true
    });
}

function style() {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(prefix({
            browsers: ['last 10 version']
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
}

function js() {
    return gulp.src('./app/js/*.js')
        .pipe(named())
        .pipe(webpack({
            output: {
            filename: '[name].bundle.js'
            }
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload())
}

function html() {
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
}

function watch() {
    gulp.watch('./app/scss.**/*.scss', style);
    gulp.watch('./app/*.html', html);
    gulp.watch('./app/js/**/*.js', js);
}


exports.server = server;
exports.style = style;
exports.js = js;
exports.html = html;
exports.watch = watch;
exports.default = gulp.parallel(watch, server);