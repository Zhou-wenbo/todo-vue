import { createRouter, createWebHashHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import AboutView from '../views/AboutView.vue'
import DeletedView from '../views/DeletedView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  { path: '/', name: 'Todo', component: TodoView, meta: { requiresAuth: true } },
  { path: '/about', name: 'About', component: AboutView, meta: { requiresAuth: true } },
  { path: '/deleted', name: 'Deleted', component: DeletedView, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: LoginView, meta: { requiresAuth: false } },
  { path: '/register', name: 'Register', component: RegisterView, meta: { requiresAuth: false } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局前置守卫：检查 localStorage 中的 session
router.beforeEach((to, from, next) => {
  const session = localStorage.getItem('supabase.session')
  if (to.meta.requiresAuth && !session) {
    next('/login')
  } else {
    next()
  }
})

export default router