'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    browserSync.watch('build', browserSync.reload)
  
});    

gulp.task('pug',function(){
    return gulp.src('src/*.pug')
        .pipe(gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('less',function(){
    return gulp.src('src/less/*.less')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.less({ }))
        .pipe(gp.autoprefixer({
            overrideBrowserslist: ['last 10 versions']
            
        }))
        .on("error", gp.notify.onError(function (error) {
        return "Style: " + error.message;
        }))
        .pipe(gp.csso({}))
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build'));
});

gulp.task('watch',function(){
    gulp.watch('src/*.pug',gulp.series('pug'));
    gulp.watch('src/less/*.less',gulp.series('less'));
});

gulp.task('default',gulp.series(
    gulp.parallel('pug','less'),
    gulp.parallel('watch','serve')
));