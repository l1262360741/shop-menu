import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:9002/'
Vue.prototype.$http = axios
// 请求拦截器加token，保证获取数据权限
// axios.interceptors.request.use((config)=>{
//   config.header.Authorization = window.sessionStorage.getItem('token')
//   return config
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
