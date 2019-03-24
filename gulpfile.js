const gulp = require( 'gulp');
const babel = require( 'gulp-babel' );
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
  src: {
    styles: 'css/*.css',
    scripts: 'js/*.js'
  },
  build: {
    styles: 'build/styles',
    scripts: 'build/scripts'
  },
  buildNames: {
    styles: 'style.min.css',
    scripts: 'script.min.js'
  }
}

gulp.task('hello', () => console.log('hello'));
gulp.task('currentTime', () => {
  let date = new Date;
  console.log( "Текущее время: " + date.getHours() + ":" + date.getMinutes() );
});

gulp.task( 'build-js', () => {
  return gulp.src( [paths.src.scripts] )
  .pipe( sourcemaps.init() )
    .pipe( concat( paths.buildNames.scripts ) )
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe( uglify() )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest( paths.build.scripts ) );
});

gulp.task( 'build-css', () => {
  return gulp.src( [paths.src.styles] )
    .pipe( sourcemaps.init() )
      .pipe( concat( paths.buildNames.styles ) )
      .pipe( cssnano())
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest( paths.build.styles ) );
});

gulp.task( 'default', ['build-css', 'build-js'] );

gulp.task( 'watch', () => {
  gulp.watch( paths.src.scripts, ['build-js'] );
  gulp.watch( paths.src.styles, ['build-css'] );
});