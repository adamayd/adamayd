var gulp        = require ('gulp');
var browserSync = require ('browser-sync').create();
var sass        = require ('gulp-sass');

// create server and watch scss files
gulp.task('serve', function() {

  browserSync.init({
   server: "./dist"
  });

  gulp.watch("src/stylesheets/**/*.scss", ['sass']);
  gulp.watch("dist/*.html").on('change', browserSync.reload);
});

// compile sass into css and reload into browser

gulp.task('sass', function() {
  return gulp.src("src/stylesheets/main.scss")
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest("dist/css/"))
         .pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'serve']);