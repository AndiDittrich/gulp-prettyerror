var _gutil = require('gulp-util');
var _gplumber = require('gulp-plumber');

var PrettyError = (function(customErrorFormat){

    // custom error format function provided ?
    if (typeof customErrorFormat != 'undefined'){

        // proxy
        return _gplumber(function(error){
            customErrorFormat.apply(this, [error, _gutil]);
        });

    }else{
        // default appearance
        return _gplumber(function(error){
            // log the error message
            _gutil.log('|- ' + _gutil.colors.bgRed.bold('Build Error in ' + error.plugin));
            _gutil.log('|- ' + _gutil.colors.bgRed.bold(error.message));
            
            // make sure there is codeFrame in the error object.
            // gulp-less does not have it, so it will throw an error
            if(error.codeFrame != 'undefined') {
                // add indentation
                var msg = error.codeFrame.replace(/\n/g, '\n    ');
                
                _gutil.log('|- ' + _gutil.colors.bgRed('>>>'));
                _gutil.log('|\n    ' + msg + '\n           |');
                _gutil.log('|- ' + _gutil.colors.bgRed('<<<'));
            }
        });
    }
});

module.exports = PrettyError;
