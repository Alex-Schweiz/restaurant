var gulp = require('gulp');
var pug = require('gulp-pug');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');

gulp.task('html', function buildHTML() {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('styles', function buildStyles(){
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
});

gulp.task('images', function() {
    return gulp.src('app/img/**/*')
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('public/img'));
});

gulp.task('watch', function() {
    gulp.watch('app/pug/*', ['html']);
});

gulp.task('default', ['html','styles','images']);