import axios from 'axios'
import './mock'
// 创建axios实例
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000 * 60
});

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error)
})


// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    return Promise.resolve(res)
  }, error => { // 请求失败
    return Promise.reject(error)
  })

let api = {
  getArticles(params) { return instance.get('/api/articles', { params }) }
}

instance.install = function (Vue) {
  Vue.prototype.api = api
}

export default instance
