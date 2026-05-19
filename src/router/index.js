import { createRouter, createWebHashHistory } from 'vue-router';
import TodoView from '../views/TodoView.vue';
import AboutView from '../views/AboutView.vue';
import DeletedView from '../views/DeletedView.vue';
import LoginView from '../views/LoginView.vue'; // 导入登录组件
import RegisterView from '../views/RegisterView.vue'; // 导入注册组件
const routes = [
    { path: '/', name: 'Todo', component: TodoView, meta: { requiresAuth: true } },
    { path: '/deleted', name: 'Deleted', component: DeletedView, meta: { requiresAuth: true } },
    { path: '/about', name: 'About', component: AboutView, meta: { requiresAuth: true } },
    { path: '/login', name: 'Login', component: LoginView, meta: { requiresAuth: false } },
    { path: '/register', name: 'Register', component: RegisterView, meta: { requiresAuth: false } }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
// 在 routes 定义之后添加
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    // 如果前往的路由需要登录且没有 token，则跳转到登录页
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next('/login');
    }
    else {
        next();
    }
});
export default router;
