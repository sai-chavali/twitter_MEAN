var gulp=require('gulp')
var stylus=require('gulp-stylus')
var concat=require('gulp-concat')
var sourcemaps=require('gulp-sourcemaps')
var uglify=require('gulp-uglify')
var ngAnnotate=require('gulp-ng-annotate')
gulp.task('css',function(){
     gulp.src('css/**/*.styl')
     .pipe(stylus())
      .pipe(gulp.dest('assets'))
})
gulp.task('watch:css',function(){
    gulp.watch('css/**/*.styl',['css'])
})  