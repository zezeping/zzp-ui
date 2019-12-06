// 引入mockjs
import Mock from 'mockjs'
import articles from './articles'
Mock.setup({
  timeout: '200-600'
})
// Mock.mock( url, post/get , 返回的数据)
Mock.mock(new RegExp('/api/articles'), 'get', articles.getArticles)　　
