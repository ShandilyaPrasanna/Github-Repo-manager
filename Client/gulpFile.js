var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

//First task of browserify that handles all the require statements in our application, because the browser doesn't knows about require statements.
gulp.task('browserify',function(){
    browserify('src/js/main.js')
        .transform('reactify') //converts jsx to normal javascript
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'))
});

//Second task of copy that copies the contents of the complete src folder in the destination folder i.e. dist folder.
gulp.task('copy',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('src/**/*.*',['browserify','copy']); //This continuously keeps a watch on all the files in our src folder and as soon as there is a change it runs the two tasks browserify and copy once again.
});
