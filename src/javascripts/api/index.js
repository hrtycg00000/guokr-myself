//封装这个api是为了统一处理跨域路径还有对请求回来的数据处理
const api = {
  request ({
    url, data, methods, success
  }) {
    return $.ajax({
      url: '/maoyan' + url,
      data: data || {},
      methods: methods || 'get',
        success: (res) => {
          return res
      },
      error: (error) => {
        console.log('请求出错了', error)
      }
    })
  }
}

module.exports = api
