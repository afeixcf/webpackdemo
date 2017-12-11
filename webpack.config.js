var path = require('path');
var webpack = require('webpack');
var glob = require('glob');
var args = require('yargs').argv;
var assign = require('object-assign');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var precss = require('precss');
var autoprefixer = require('autoprefixer');
var env = args.env || 'dev';

var isDev = env != 'production' ? true : false;


function getEntry(globPath, replaceDir, exclude) {
    var files = glob.sync(globPath);
    var entries = {};
    var entryname, filepath, dirname;

    for (var i = 0; i < files.length; i++) {
        filepath = files[i];
        dirname = path.dirname(filepath);

        if (replaceDir) {
            dirname = dirname.replace(new RegExp('^' + replaceDir), '');
        }

        entryname = dirname.substring(dirname.lastIndexOf('\/') + 1);

        if (exclude && exclude.indexOf(entryname) > -1) {
            continue;
        }
        entries[entryname] = [filepath];
    }
    return entries;
}

var srcComponentsDir = path.resolve(__dirname, 'src/components');
var srcEntrysDir = path.resolve(__dirname, 'src/app');

var entryPages = getEntry(srcEntrysDir + '/**/main.js');

var entryChunks = {
    'compontents': glob.sync(srcComponentsDir + '/**/*.js')
};

var entries = assign(entryPages, entryChunks);

var webpackConfig = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isDev ? 'statics/js/[name].js' : 'statics/js/[chunkhash:8].[name].min.js',
        chunkFilename: isDev ? 'statics/js/[chunkhash:8].chunk.js' : 'statics/js/[chunkhash:8].chunk.min.js',
        hotUpdateChunkFilename: isDev ? 'statics/js/[id].js' : 'statics/js/[id].[chunkhash:8].min.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: ['/node_modules|vendors/'],
                options: {
                    presets: ['es2015']
                }

            },
            {
                test: /\.tpl$/,
                loader: 'text-loader'
            },

            {
                test: /\.html$|\.htm$|\.php$/,
                loader: 'html-loader'
            },

            {
                test: /\.css$|\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader!postcss-loader"
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?[a-z0-9]+)?$/,
                loader: 'url-loader?limit=10240&name=statics/font/[name].[hash:8].[ext]'
            },

            {
                test: /\.(png|jpg|gif|jpeg)(\?[a-z0-9]+)?$/,
                loader: 'url-loader?limit=10240&name=statics/img/[name].[hash:8].[ext]'
            }

        ]
    },


    resolve: {
        modules: [
            path.resolve(__dirname, 'src'), 'node_modules'
        ],
        alias: {
            '_event': 'components/_event/main.js'
        }
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            names: ['all', 'compontents', 'common'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin('statics/css/[chunkhash:8].[name].css'),

        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/externals'),
            to: path.resolve(__dirname, 'dist/externals')
        }, {
            from: path.resolve(__dirname, 'src/statics/favicon.ico'),
            to: path.resolve(__dirname, 'dist/favicon.ico')
        }, {
            from: path.resolve(__dirname, 'src/statics/404.html'),
            to: path.resolve(__dirname, 'dist/404.html')
        }])

    ]

}

if (!isDev) {
    webpackConfig.plugins.push(
        new UglifyJsPlugin({ //压缩代码
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require'] //排除关键字
        }),
        // new webpack.NoErrorsPlugin(),

        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$|\.less$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        })
    );

} else {

    webpackConfig = assign(webpackConfig, {
        devServer: {
            contentBase: path.join(__dirname, "dist"), //本地服务器所加载的页面所在的目录
            compress: true,
            publicPath: '/',
            port: '8080',
            // historyApiFallback: true, //不跳转
            inline: true, //实时刷新
            hot: true,
            proxy: {
                '/tomorrow/*': {
                    target: 'http://apit.airobotq.com',
                    host: 'apit.airobotq.com',
                    changeOrigin: true,
                    pathRewrite: {'^/tomorrow': '/tomorrow'},
                    secure: false
                }
            }
        }
    });
}

var pages;
if (isDev) {
    pages = Object.keys(getEntry(srcEntrysDir + '/**/main.html', '', 'common'));
} else {
    pages = Object.keys(getEntry(srcEntrysDir + '/**/main.html', '', 'common clear'));
}

pages.forEach(function (pathname) {
    var conf = {
        filename: pathname + '.html', //生成的html存放路径，相对于path
        template: path.resolve(__dirname, 'src/app/' + pathname + '/main.html'), //html模板路径
        inject: false //js插入的位置，true/'head'/'body'/false

    };
    if (pathname in webpackConfig.entry) {
        conf.inject = 'body';
        conf.chunks = ['common', 'compontents', 'all', pathname];
        conf.chunksSortMode = 'dependency';
    }

    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
});


module.exports = webpackConfig;

