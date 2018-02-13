# Hi.

This repo demos an issue when using the Fractal logger together with Gulp (4).

The logger seems to convince Gulp that the watch task didn’t finish correctly,
resulting in the following output:

```
[16:01:59] Using gulpfile ~/Development/projects/gulptest-fractallogger/gulpfile.js
[16:01:59] Starting 'watch'...
^C
[16:02:00] The following tasks did not complete: watch
[16:02:00] Did you forget to signal async completion?
```

Run `npm install`, then `npm run gulp`, then exit the process with ctrl+c
to see the issue.