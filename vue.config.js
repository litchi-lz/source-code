// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development';

// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    parallel: false,
    // 关闭eslint校验
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    lintOnSave: false,
    publicPath: './',
    productionSourceMap: false,
    configureWebpack: config => {

        // 生产环境相关配置
        if (isProduction) {
            //gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css']
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )
        }
        config.resolve.alias['@'] = resolve('src')
    },
    chainWebpack: config => {
        config.module
            .rule("md")
            .test(/\.md$/)
            .use("vue-loader")
            .loader("vue-loader")
            .end()
            .use("vue-markdown-loader")
            .loader("vue-markdown-loader/lib/markdown-compiler")
            .options({
                raw: true
            });
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    }

}