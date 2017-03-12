var _gutil = require('gulp-util');
var _gplumber = require('gulp-plumber');

// Main Function
var PrettyError = (function(customErrorFormat){

    // custom error format function provided ?
    if (typeof customErrorFormat != 'undefined'){

        // proxy
        return _gplumber(function(error){
            // run custom error handler/output formatting
            customErrorFormat.apply(this, [error, _gutil]);

            // make sure the process is finished
            this.emit('end');
        });

    }else{
        // default appearance
        return _gplumber(function(error){

            // extract values and apply defaults
            var plugin = error.plugin || 'unknown';
            var message = error.message || 'unknown error';
            var codeFrame = error.codeFrame || null;
            var cause = error.cause || {};

            // detailed message given ? append it
            if (cause.message){
                var file = cause.filename || 'unknown file';
                var line = cause.line || '0';
                var position = cause.position || '0';

                // generate detailed error message
                message = '[' + file + '] - ' +  cause.message + ' (' + line + ':' + position + ')';
            }

            // log the error message
            _gutil.log('|- ' + _gutil.colors.bgRed.bold('Build Error in ' + plugin));
            _gutil.log('|- ' + _gutil.colors.bgRed.bold(message));
            
            // make sure there is codeFrame in the error object
            if (codeFrame){
                // add indentation
                var msg = codeFrame.replace(/\n/g, '\n    ');
                
                _gutil.log('|- ' + _gutil.colors.bgRed('>>>'));
                _gutil.log('|\n    ' + msg + '\n           |');
                _gutil.log('|- ' + _gutil.colors.bgRed('<<<'));

            // stacktrace available ?
            }else if (cause.stack){
                // add indentation
                var stacktrace = cause.stack.replace(/^(\s*)/gm, '           | ');
                
                _gutil.log('|- ' + _gutil.colors.bgRed('>>>'));
                _gutil.log('|\n' + stacktrace + '\n           |');
                _gutil.log('|- ' + _gutil.colors.bgRed('<<<'));
            }
            
            // make sure the process is finished
            this.emit('end');
        });
    }
});

// Expose the Main Function
module.exports = PrettyError;
