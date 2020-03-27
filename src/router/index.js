import Vue from 'vue'
import VueRouter from 'vue-router'
import File from '../views/File'
import Comingsoon from '../views/File/Comingsoon'
import Nowplaying from '../views/File/Nowplaying'
import Center from '../views/Center'
import Cinema from '../views/Cinema'
import Detail from '../views/File/Detail'
import Login from '../views/File/Login'
Vue.use(VueRouter)
// 判断登录否
// const auth = {
//   isLogin () {
//     return true // true放行，false进入login
//   }
// }
const routes = [
  {
    path: '/File',
    component: File,
    children: [
      {
        path: '/File/nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon', // 不能加/！
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/File/nowplaying'
      }
    ]
  },
  {
    path: '/Center',
    component: Center
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Detail/:myid', // Detail/aa  动态路由  detail路径不存在，必须加/aa
    name: 'cannoli',
    component: Detail
  },
  {
    path: '/Cinema',
    component: Cinema
  },
  {
    path: '*',
    redirect: '/file'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes // 缩写  相当于routes: routes
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (to.path === '/center') {
//     console.log('盘查')
//     if (auth.isLogin()) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })
export default router
