import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main'
import Login from '../views/login/Login'

const routes = [
  {
    path: '/',
    name: 'Home',
    components:{ 
      Main,
      Login,
    },
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
