/**
 * Small gulp file to reproduce issue with using Fractal logger
 * together with Gulp 4.
 *
 * When using the logger (which in turn uses a Vorpal instance?),
 * the watch task will complain about forgetting to signal async 
 * completion on exit (ctrl + c).
 */

const fractal = require('./fractal.js');

const gulp = require('gulp');

function watch() {
  gulp.watch('**.md', doLog);
}
// Uncomment this line to get rid of errors.
const logger = fractal.cli.console;

function doLog() {
  return new Promise((resolve, reject) => {
    console.log('hello');
    resolve();
    });
}
gulp.task(watch);
gulp.task('default', watch);


