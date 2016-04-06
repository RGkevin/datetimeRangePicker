(function() {
    'use strict';

    var del = require('del');
    var gulp = require('gulp');
    var plugins = require('gulp-load-plugins')({
        lazy: true
    });

    gulp.task('default', ['clean'], function() {
        gulp.start('build');
    });

    gulp.task('build', ['styles', 'scripts'], function() {

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

    gulp.task('scripts', function() {
        return gulp.src('src/**/*.js')
            .pipe(plugins.jshint())
            .pipe(plugins.jscs())
            .pipe(plugins.jscsStylish.combineWithHintResults())
            .pipe(plugins.jshint.reporter('jshint-stylish', {
                verbose: true
            }))
            .pipe(gulp.dest('dist'))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.uglify({
                preserveComments: 'license'
            }))
            .pipe(plugins.concat('range-picker.min.js'))
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

    gulp.task('test', function() {
        console.log(plugins);
    });

    gulp.task('watch', function() {
        gulp.watch('src/**/*.js', ['scripts']);
        gulp.watch('src/**/*.less', ['styles']);
        gulp.watch('bower.json', ['bower']);
    });

})(require);
