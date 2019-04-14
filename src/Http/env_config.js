// 一些全局的config配置
const nodeEnvObj = {
  // 生产环境
  'production': {
    NODE_ENV: 'pro',
    baseURL: 'http://www.kuaidi100.com',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    NODE_ENV: 'dev',
    baseURL: 'http://www.kuaidi100.com',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    NODE_ENV: 'test',
    baseURL: 'http://www.kuaidi100.com',
    authBaseURL: ''
  }
}
export default nodeEnvObj[process.env.NODE_ENV]
