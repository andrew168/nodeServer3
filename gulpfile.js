/*eslint strict: ["error", "global"]*/
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); //jshint ignore:line
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('task1', function(callback) {
    runSequence('task2', 'task3', callback);
});

gulp.task('task2', function () {
    console.log("task2");
});

gulp.task('task3', function () {
    console.log("task3");
});

gulp.task('default', function () {
    gulp.start('task1');
});
