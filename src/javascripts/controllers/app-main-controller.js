//整个应用程序的控制器，其中有一个任务就是将app应用的主体视图渲染到页面
const {getFilmsList} = require('../models/app-main-model')
const render = async () => {
  let appMainView = require('../views/app-main.html')
  let filmsList = await getFilmsList()
  let template = Handlebars.compile(appMainView)
  for (const i of filmsList.movieList) {
    i.img = 'https://p' + i.img.charAt(8) + '.meituan.net/128.180/movie/' + i.img.split('/')[5]
  }
  $('#app #main').html(template({films: filmsList.movieList}))
  
  
  /* getFilmsList((data) => {
    let template = Handlebars.compile(appMainView)
    for (const i of data.movieList) {
      i.img = 'https://p' + i.img.charAt(8) + '.meituan.net/128.180/movie/' + i.img.split('/')[5]
    }
    $('#app #main').html(template({films: data.movieList}))
  }) */
}

module.exports = { render }