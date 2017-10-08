/**
 * Created by Administrator on 2017/9/27.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minufycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('css',function(){
    gulp.src('./css/*.css')
        .pipe(concat('main.css'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minufycss())
        .pipe(gulp.dest('./css'));
});


gulp.task('js',function(){
    gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
})