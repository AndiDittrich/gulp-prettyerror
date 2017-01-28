// GULP plugins
var _gulp = require('gulp');
var _util = require('gulp-util');
var _sourcemaps = require('gulp-sourcemaps');
var _uglify = require('gulp-uglify');
var _rename = require('gulp-rename');
var _prettyError = require('../gulp-prettyerror.js');

// default test build
_gulp.task('js', function (){
    return _gulp.src(['testfile.js', 'x.js'])
        .pipe(_prettyError())

        // create sourcemaps for development
        .pipe(_sourcemaps.init())

        // create minified (compressed) version
        .pipe(_uglify().on('error', _util.log))
        .pipe(_rename({
            suffix: '.min'
        }))

        // write source-map
        .pipe(_sourcemaps.write('.'))

        .pipe(_gulp.dest('.'))
});
