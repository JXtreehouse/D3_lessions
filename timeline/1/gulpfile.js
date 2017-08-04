/*
* Gulpfile for timeline(d3-components)
* Reference : https://github.com/photino/d3-components/blob/master/src/js/timeline-diagram.js
*/

var gulp = require('gulp');
var header = require('gulp-header');
var concat = require ('gulp-concat');
var rename = require('gulp-rename');
var uglifyJS = require('gulp-uglify');
var ghPages = require('gulp-gh-pages');
var pug = require ('gulp-pug');


var pkg = require ('./package.json');
var version = pkg.version;
var banner = '/*! timeline v<%= version%> | (c)2017 AlexZ33 | GLP-3.0 license */\n';

gulp.task('default',[
   'concat-js',
   'minify-js',
   'compile-docs',
   'watch'

]);

gulp.task('concat-js', function() {
  gulp.src([
      'src/js/core.js',
      'src/js/timeline-diagram.js'
	])
        .pipe(concat('d3-components-' + version + '.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(gulp.dest('docs/dist/'));

});

gulp.task('minify-js', ['concat-js'], function () {
  gulp.src('dist/d3-components' + version + '.js')
      .pipe(uglifyJS())
      .pipe(header(banner, {
      version: version
  }))
      .pipe(rename('d3-components-' + version + '.min.js'))
      .pipe(gulp.dest('dist/'))
      .pipe(gulp.dest('docs/dist/'));

})


gulp.task ('compile-docs', function () {
   gulp.src('src/docs/!(layout|links).pug')
       .pipe(pug({
         pretty: true
       }))
       .pipe(gulp.dest('docs/'));

   gulp.src('src/docs/api/!(components).pug')
       .pipe(pug({
        pretty:true
       }))
       .pipe(gulp.dest('docs/api/'));

   gulp.src('src/docs/gallery/!(links).pug')
      .pipe(pug({
        pretty:true
      }))
      .pipe(gulp.dest("docs/gallery"));

});


gulp.task("watch", function () {
  gulp.watch('src/js/*.js', [
    'concat-js',
    'minify-js'
  ]);

  gulp.watch('src/docs/{*,*/}*.pug', [
    'compile-docs'
  ]);

})
