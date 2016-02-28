var gulp = require("gulp");

var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
var browserify = require("browserify");
var uglify = require("gulp-uglify");
var minifyHTML = require("gulp-htmlmin");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var sync = require("gulp-sync");
var cssmin = require("gulp-clean-css");

// JS Linter
gulp.task('jshint', function() {
    return gulp.src('site/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// SASS Compiling
gulp.task('sass', function() {
    return gulp.src('site/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('site/css'));
});

// Watch function
gulp.task('watch', function() {
    gulp.watch('site/js/*.js', ['jshint']);
    gulp.watch('site/css/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['jshint', 'sass', 'watch']);

// Minify HTML
gulp.task('html', function() {
    return gulp.src('site/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});

// Javascript build task, minifies and concatenates
gulp.task('scripts', function() {
    return browserify('site/js/scripts.js')
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Styles build task, concatenates
gulp.task('styles', function() {
    return gulp.src('site/css/*.css')
    .pipe(concat('main.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('build/css'));
});

// Image Opitimization
gulp.task('images', function() {
    return gulp.src('site/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});

// Build Task
gulp.task('build', ['jshint', 'sass', 'html', 'scripts', 'styles', 'images']);