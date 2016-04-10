var gulp = require('gulp');
var serve = require('gulp-webserver');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('files/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./files'));
})
gulp.task('serve', ['sass'], function() {
  gulp.src('files')
  .pipe(serve({
        livereload: true,
        open: true,
        host: '0.0.0.0'
  }))
  gulp.watch('files/**/*.scss', ['sass']);
})
