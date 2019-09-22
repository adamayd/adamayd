var gulp        = require ('gulp');
var browserSync = require ('browser-sync').create();
var sass        = require ('gulp-sass');

// create server and watch scss files
gulp.task('serve', function() {

  browserSync.init({
   server: './public'
  });

  gulp.watch('src/stylesheets/**/*.scss', ['sass']);
  gulp.watch('public/*.html').on('change', browserSync.reload);
  gulp.watch('public/js/*.js').on('change', browserSync.reload);
});

// compile sass into css and reload into browser

gulp.task('sass', function() {
  return gulp.src('src/stylesheets/styles.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('public/css/'))
         .pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'serve']);