const api = require('../api');
const getFilmsList = (callback) => {
  return api.request({url: '/ajax/movieOnInfoList?token='})
  /* api.request({
    url: '/ajax/movieOnInfoList?token=',
    // url: '/science_api/channels',
    success: (data) => {
      callback(data)
    }
  }) */
}

module.exports = {
  getFilmsList
}