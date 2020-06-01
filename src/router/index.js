import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import List from '../components/List.vue'

Vue.use(VueRouter)

  const routes = [
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {
      path:'/home',
      component:Home, 
      redirect:'/welcome',
      children:[
        {path:'/welcome',component:Welcome},
        {path:'/list',component:List}
      ]
    }
]

const router = new VueRouter({
  routes
})

// //路由导航守卫
// router.beforeEach((to, from, next)=>{
//   //to将要访问的标签
//   //from从哪个路径来
//   //next是一个函数表事放行
//   if(to.path === '/login') return next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
//   next()
// })

export default router
