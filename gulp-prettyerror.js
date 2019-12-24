const _logger = require('gulplog');
const _colors = require('ansi-colors');
const _gplumber = require('gulp-plumber');

// Main Function
module.exports = function PrettyError(customErrorFormat){

    // custom error format function provided ?
    if (typeof customErrorFormat != 'undefined'){

        // proxy
        return _gplumber(function(error){
            // run custom error handler/output formatting
            customErrorFormat.apply(this, [error, _logger]);

            // make sure the process is finished
            this.emit('end');
        });

    }else{
        // default appearance
        return _gplumber(function(error){

            // extract values and apply defaults
            const plugin = error.plugin || 'unknown';
            let message = error.message || 'unknown error';
            const codeFrame = error.codeFrame || null;
            const cause = error.cause || {};

            // detailed message given ? append it
            if (cause.message){
                const file = cause.filename || 'unknown file';
                const line = cause.line || '0';
                const position = cause.position || '0';

                // generate detailed error message
                message = '[' + file + '] - ' +  cause.message + ' (' + line + ':' + position + ')';
            }

            // log the error message
            _logger.error('|- ' + _colors.bgRed.bold('Build Error in ' + plugin));
            _logger.error('|- ' + _colors.bgRed.bold(message));
            
            // make sure there is codeFrame in the error object
            if (codeFrame){
                // add indentation
                const msg = codeFrame.replace(/\n/g, '\n    ');
                
                _logger.error('|- ' + _colors.bgRed('>>>'));
                _logger.error('|\n    ' + msg + '\n           |');
                _logger.error('|- ' + _colors.bgRed('<<<'));

            // stacktrace available ?
            }else if (cause.stack){
                // add indentation
                const stacktrace = cause.stack.replace(/^(\s*)/gm, '           | ');
                
                _logger.error('|- ' + _colors.bgRed('>>>'));
                _logger.error('|\n' + stacktrace + '\n           |');
                _logger.error('|- ' + _colors.bgRed('<<<'));
            }
            
            // make sure the process is finished
            this.emit('end');
        });
    }
}