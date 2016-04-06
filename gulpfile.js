(function() {
    'use strict';

    var del = require('del');
    var gulp = require('gulp');
    var plugins = require('gulp-load-plugins')();

    gulp.task('default', ['clean'], function() {
        gulp.start('build');
    });

    gulp.task('build', ['bower'], function() {

    });

    gulp.task('bower', function() {
        return plugins.bower();
    });

    gulp.task('clean', function() {
        return del('dist/*');
    });

})();
