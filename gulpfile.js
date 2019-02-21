const gulp = require('gulp')
const webserver = require('gulp-webserver')
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const watch = require('gulp-watch') // 监听文件
const Path = require('path') // 处理路径
const del = require('del') // 删除文件
const {path, serverConfig, webpackConfig} = require('./config')

//迁移HTML文件
gulp.task('copy-html', () => {
  let {src, dist} = path
  return gulp.src(src + '/*.html')
  .pipe(gulp.dest(dist))
})

//迁移静态文件
gulp.task('copy-static', () => {
  let {static, dist} = path
  return gulp.src(static + '/**/*')
  .pipe(gulp.dest(dist + '/static'))
})

//处理SASS文件
gulp.task('compile-sass', () => {
  let {src, dist} = path
  return gulp.src(src + '/stylesheets/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest(dist + '/stylesheets'))
})

//处理JS文件
gulp.task('pack-js', () => {
  let {src, dist} = path
  return gulp.src(src + '/javascripts/**/*.js')
      .pipe(webpack(webpackConfig))
      .pipe(gulp.dest(dist + '/javascripts'))
})

//开启开发服务器
gulp.task('webserver', () => {
  let {dist} = path
  return gulp.src(dist)
      .pipe(webserver(serverConfig))
})

//监听任务
gulp.task('watch', () => {
  let { dist, src } = path
  gulp.watch(src + '/*.html', ['copy-html']);
  gulp.watch(src + '/stylesheets/**/*.scss', ['compile-sass']);
  gulp.watch(src + '/javascripts/**/*', ['pack-js']);
  watch(src + '/static/**/*', (v) => {
    if ( v.event === 'unlink' ) { // 如果是删除文件
      // 将dist/static中的对应文件也删掉
      let _path = Path.resolve(dist + '/static/', v.path.split('\\static\\')[1])
      del(_path) // 删除
    } else {
        gulp.start(['copy-static']) // 执行复制静态文件的任务
    }
  })
})




gulp.task('default', ['copy-static', 'copy-html',  'compile-sass', 'pack-js', 'watch', 'webserver'], () => console.log('gulp'))