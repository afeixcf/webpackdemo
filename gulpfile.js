'use strict';

var gulp = require('gulp')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server');

var gutil = require('gulp-util');
var clean = require('gulp-clean');

var webpackConf = require('./webpack.config');

var srcDir = process.cwd() + '/src';
var distDir = process.cwd() + '/dist';


// clean dist dir
gulp.task('clean', function(){
    return gulp.src(distDir, {read: true}).pipe(clean());
})

// run webpack pack
gulp.task('pack', ['clean'], function(done) {
    webpack(webpackConf, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({colors: true}));
        done();
    })
})

// html process
gulp.task('default', ['pack']);

gulp.task('server', function(callback) {

    var compiler = webpack(webpackConf);
    
    webpackConf.entry['common'].unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
    
    var devSvr = new WebpackDevServer(compiler, webpackConf.devServer);

    devSvr.listen(8080, '0.0.0.0', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);

        gutil.log('[webpack-dev-server]','http://localhost:8080/');
    });

});

// deploy assets to remote server
gulp.task('deploy', function()  {
    var  sftp = require('gulp-sftp')

    return gulp.src(distDir + '/**')
        .pipe(sftp({
            host: '[remote server ip]',
            remotePath: '/www/app/',
            user: 'foo',
            pass: 'bar'
        }))
})
