const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("index.scss").pipe(sass.sync()).pipe(dest("css"));
}

function watchTask() {
  watch(["index.scss"], buildStyles);
}

exports.buildStyles = buildStyles;

exports.default = series(buildStyles, watchTask);
