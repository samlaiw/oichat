
const gulp = require("gulp");
const webserver = require("gulp-webserver");

gulp.task("webserver", (cb) => {
	return gulp.src("./dist").pipe(webserver({
		port: 8888,
		https: true,
		fallback: "index.html"
	}));
});

gulp.task("default", gulp.series("webserver"));