var gulp = require("gulp");//importo un modulo completo 

var spawn = require("child_process").spawn;//importo solamente a "spawn"

var node;

var server = require("gulp-server-livereload");

gulp.task("server", function(){
    if (node) node.kill();

    node = spawn("node", ["index.js"], {stdio: "inherit"})
});

gulp.task("default", function(){
    
    gulp.run("server");//deprecado

    gulp.src("./scripts/**/*.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./lib/all.min.js"))

    gulp.watch(["index.js"], () => {
        gulp.run("server");
    });

});

gulp.task("serve", () => {
    gulp.src("app")
    .pipe(server({
        port:8100,
        defaultfile:"index.html",
        livereload: true,
        open: true
    }));
});