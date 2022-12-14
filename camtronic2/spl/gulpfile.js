const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const colors = require("ansi-colors");
const notifier = require("node-notifier");
const rename = require("gulp-rename");
const wait = require("gulp-wait");
const csso = require("gulp-csso");
const browserSync = require("browser-sync").create();
const webpack = require("webpack");


const showError = function(err) {
    //console.log(err.toString());

    notifier.notify({
        title: "Error in sass",
        message: err.messageFormatted
    });

    console.log(colors.red("==============================="));
    console.log(colors.red(err.messageFormatted));
    console.log(colors.red("==============================="));
}

const server = function(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false,
        host: "192.168.1.24",
        port: 3000,
        open: true,
        browser: "firefox"
    });

    cb();
}

const css = function() {
    return gulp.src("dev-assets/*.scss")
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: "nested"
            }).on("error", showError)
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))

    .pipe(gulp.dest("prod-assets")) //tu nie ma średnika!
        .pipe(browserSync.stream({ match: "**/*.css" }));
}

const js = function(cb) { //https://github.com/webpack/docs/wiki/usage-with-gulp#normal-compilation
    return webpack(require("./webpack.config.js"), function(err, stats) {
        if (err) throw err;
        console.log(stats.toString());
        browserSync.reload();
        cb();
    })
}

const watch = function() {
    gulp.watch("dev-assets/*.scss", gulp.series(css));
    gulp.watch("js/**/*.js", gulp.series(js));
    gulp.watch("*.html").on("change", browserSync.reload);
}

const startText = function(cb) {
    console.log(colors.yellow(`
        ───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
        ───█▒▒░░░░░░░░░▒▒█───
        ────█░░█░░░░░█░░█────
        ─▄▄──█░░░▀█▀░░░█──▄▄─
        █░░█─▀▄░░░░░░░▄▀─█░░█
    `));
    console.log(colors.blue('Start :)'))
    cb();
}

exports.default = gulp.series(startText, css, js, server, watch);
exports.css = css;
exports.watch = watch;
exports.js = js;