///<binding ProjectOpened='watch-clienthooks, watch-clientui'/>
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('watch-clienthooks', function () {
    gulp.watch('ClientHooks/out/**/*.js', ['build-clienthooks']);
});

gulp.task('watch-clienui', function () {
    gulp.watch('ClientUI/out/**/*.js', ['build-clientui']);
});

gulp.task('build-clienthooks', () => {
    gulp.src([
        './ClientHooks/out/ClientHooks.js'
    ])
        .pipe(sourcemaps.init(
            {
                loadMaps:true
            }
        ))
        .pipe(sourcemaps.write('./',
            {
                includeContent: false,
                sourceRoot:'/ClientHooks/src'
            }
        ))
    .pipe(gulp.dest('./WebResources/sf365_/js'))
})

gulp.task('build-clientui', () => {
    gulp.src([
        './ClientUI/out/ClientUI.js'
    ])
        .pipe(sourcemaps.init(
            {
                loadMaps: true
            }
        ))
        .pipe(sourcemaps.write('./',
            {
                includeContent: false,
                sourceRoot: '/ClientUI/src'
            }
        ))
        .pipe(gulp.dest('./WebResources/sf365_/js'))
})