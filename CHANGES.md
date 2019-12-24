### 2.0.0 ##

* Added: gulp v4 compatibility
* Changed: removed deprecated `gulp-util`

### 1.2.1 ###
* Bugfix: Suppress errors in case `error.cause` object is not available (set default value to `{}`)- thanks to [Sasmen on GitHub](https://github.com/AndiDittrich/gulp-prettyerror/issues/7)

### 1.2.0 ###
* Enhancement: Detailed Error Messages are displayed in case `error.cause` or `error.codeFrame` object is provided - suggested by [anweshknayak on GitHub](https://github.com/AndiDittrich/gulp-prettyerror/issues/6)

### 1.1.1 ###
* Bugfix: Error handler doesn't emit the `end` event to terminate the current gulp task - thanks to [haqqi on GitHub](https://github.com/AndiDittrich/gulp-prettyerror/pull/4)

### 1.1.0 ###
* Changed: Added default value to error message and plugin to avoid errors
* Bugfix: In some cases (e.g. gulp-less) the `Error.codeFrame` object is not exposed and caused a fatal error - thanks to [haqqi on GitHub](https://github.com/AndiDittrich/gulp-prettyerror/pull/3)

### 1.0.2 ###
* Bugfix: removed dead code

### 1.0.1 ###
* Bugfix: wrong dependency context

### 1.0.0 ###
Initial public release