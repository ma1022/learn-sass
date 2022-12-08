const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// *.scss means we are getting/accessing/monitoring all scss files,
// EXCEPT scss files that the files name starts with _

function buildStyles() {
  return src("thedays-ds/**/*.scss").pipe(sass.sync()).pipe(dest("css"));
}

function watchTask() {
  watch(["thedays-ds/**/*.scss"], buildStyles);
}

exports.buildStyles = buildStyles;

exports.default = series(buildStyles, watchTask);
