var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
    gulp.src('root')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});