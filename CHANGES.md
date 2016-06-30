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