(function() {
    'use strict';

    var del = require('del');
    var gulp = require('gulp');

    gulp.task('default', ['clean'], function() {
        gulp.start('build');
    });

    gulp.task('build', function() {

    });

    gulp.task('clean', function() {
        return del('dist/*');
    });

})();
