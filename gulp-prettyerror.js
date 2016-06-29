var _gutil = require('gulp-util');
var _gplumber = require('gulp-plumber');

// Main Function
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
            // extract values and apply defaults
            var plugin = error.plugin || 'unknown';
            var rawMessage = error.message || 'unknown error';
            var codeFrame = error.codeFrame || null;

            // log the error message
            _gutil.log('|- ' + _gutil.colors.bgRed.bold('Build Error in ' + plugin));
            _gutil.log('|- ' + _gutil.colors.bgRed.bold(rawMessage));
            
            // make sure there is codeFrame in the error object
            if (codeFrame){
                // add indentation
                var msg = codeFrame.replace(/\n/g, '\n    ');
                
                _gutil.log('|- ' + _gutil.colors.bgRed('>>>'));
                _gutil.log('|\n    ' + msg + '\n           |');
                _gutil.log('|- ' + _gutil.colors.bgRed('<<<'));
            }
        });
    }
});

// Expose the Main Function
module.exports = PrettyError;
