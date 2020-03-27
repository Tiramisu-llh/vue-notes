module.exports = {
  devServer: {
    proxy: { // 代理
      '/posts': { // '*'所有请求
        target: 'http://jsonplaceholder.typicode.com',
        //   ws: true,
        changeOrigin: true
      }
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}
