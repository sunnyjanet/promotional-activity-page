const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    proxy: {
      '/mock': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/mock': '/mock'
        }
      }
    }
  }
}
