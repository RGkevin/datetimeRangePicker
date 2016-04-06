(function() {
    'use strict';

    var del = require('del');
    var gulp = require('gulp');
    var plugins = require('gulp-load-plugins')();

    gulp.task('default', ['clean'], function() {
        gulp.start('build');
    });

    gulp.task('build', ['styles'], function() {

    });

    gulp.task('styles', ['bower'], function() {
        return gulp.src('src/**/*.less')
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.less())
            .pipe(gulp.dest('dist'))
            .pipe(plugins.cleanCss())
            .pipe(plugins.concat('range-picker.min.css'))
            .pipe(plugins.sourcemaps.write('./', {
                includeContent: false,
                sourceRoot: './'
            }))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('bower', function() {
        return plugins.bower();
    });

    gulp.task('clean', function() {
        return del('dist/*');
    });

})();
