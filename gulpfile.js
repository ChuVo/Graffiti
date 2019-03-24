const gulp = require( 'gulp');
const babel = require( 'gulp-babel' );
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('hello', () => console.log('hello'));
gulp.task('currentTime', () => {
  let date = new Date;
  console.log( "Текущее время: " + date.getHours() + ":" + date.getMinutes() );
});

gulp.task('build-js', () => {
  return gulp.src('js/*.js')
  .pipe(sourcemaps.init())
    .pipe(concat('script-min.js'))
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('build-css', () => {
  return gulp.src('css/*.css')
    .pipe(sourcemaps.init())
      .pipe(concat('style-min.css'))
      .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['build-css', 'build-js']);

gulp.task('watch', () => {
  gulp.watch('js/*.js', ['build-js']);
  gulp.watch('css/*.js', ['build-css']);
});

