const serverConfig = {
  livereload: {
    enable: true
  },
  directoryListing: false,
  open: false,
  port: 3000,
  proxies: [
    {
      source: '/maoyan',
      target: 'http://m.maoyan.com/'
    }
  ]
}

module.exports = serverConfig