const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  productionSourceMap: false,
  // 将entry指向examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    // 为packages目录添加babel-loader处理
    config.module
      .rule('js')
      .include
      .add(resolve('packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /.md$/,
      use: [{
        loader: 'text-loader'
      }]
    })
  }
}
