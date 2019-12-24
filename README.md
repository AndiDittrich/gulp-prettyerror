GULP-PrettyError
================
Display Errors in a pretty way, without breaking watching tasks

```bash
$ yarn add gulp-prettyerror
```

![Screenshot](https://github.com/AndiDittrich/gulp-prettyerror/raw/master/screenshot1.jpg)

Features
--------

* **Simple**, **Robust** and **Easy** to use
* Displays task errors during development without breaking gulp-watch tasks
* Uses [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) to override the standard error handling
* Output styling created with [gulplog](https://www.npmjs.com/package/gulplog) and [ansi-colors](https://www.npmjs.com/package/ansi-colors)

Usage
------

```js
var prettyError = require('gulp-prettyerror');

// default release build
gulp.task('js', function (){
    return gulp.src(['Source/Lib/**/*.js')
        // add task error-handler
        .pipe(prettyError())

        // create sourcemaps for development
        .pipe(sourcemaps.init())

        // some stuff
        .pipe(...);
});
```


Any Questions ? Report a Bug ? Enhancements ?
---------------------------------------------
Please open a new issue on [GitHub](https://github.com/AndiDittrich/gulp-prettyerror/issues)

License
-------
Gulp-PrettyError is OpenSource and licensed under the Terms of [The MIT License (X11)](http://opensource.org/licenses/MIT). You're welcome to [contribute](https://github.com/AndiDittrich/gulp-prettyerror/blob/master/CONTRIBUTE.md)!