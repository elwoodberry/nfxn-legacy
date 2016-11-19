var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    paths = {sass: ['./scss/**/*.scss']};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/style.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./client/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./client/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});