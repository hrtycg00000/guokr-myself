//整个应用程序的控制器，其中有一个任务就是将app应用的主体视图渲染到页面
const appMainController = require('./app-main-controller')
const render = () => {
  //0. 承载容器
  let oapp = $('#app')
  //1. 获取视图
  let appHeaderView = require('../views/app-header.html')
  let appFooterView = require('../views/app-footer.html')
  let appMainView = require('../views/app-main.html')
  
  //2. 渲染视图
  $('#app #header').html(appHeaderView)
  $('#app #footer').html(appFooterView)
  appMainController.render()
}

module.exports = { render }