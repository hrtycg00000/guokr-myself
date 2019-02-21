const path = require('path')
const serverConfig = require('./server_config')
const webpackConfig = require('./webpack-config')

const config = {
  path: { //路径配置
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    static: path.join(__dirname, '../src/static')
  },
  serverConfig,
  webpackConfig
}

module.exports = config