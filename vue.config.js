const path = require('path')
const webpack = require('webpack')
// const debug = process.env.NODE_ENV !== 'production'
const IP = 'http://119.28.227.116'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: false,
  lintOnSave: false,//
  productionSourceMap: false,//生产环境不打包为 map.css
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/less/global.less')
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  configureWebpack: { // 插件
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        moment: 'moment'
      }),
    ]
  },
  css: {
    extract: false, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    modules: false,
    sourceMap: true,
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      },

    }
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 99,
    https: false,
    hotOnly: false,
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    proxy: {
      '/yx/*': {
        target: IP,
        secure: false
      },
    },
    before: app => {
    }
  }
}
