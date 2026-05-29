import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useUserStore } from './stores/user';
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
// 恢复登录状态
const userStore = useUserStore();
userStore.loadSession();
app.mount('#app');
