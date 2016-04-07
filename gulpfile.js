var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build:sass',function(){
  gulp.src('sass/**/*.*')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('css'));
});

gulp.task('default',['build:sass']);
