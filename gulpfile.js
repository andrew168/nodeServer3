'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var uglifyjs = require("uglify-js");
var fs = require('fs');
var del = require('del');
var crypto = require('crypto');
var args = require('yargs').argv;
var runSequence = require('run-sequence');
JSON.minify = JSON.minify || require("node-json-minify");

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
