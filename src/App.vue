<template>
  <div id="app">
    <nav class="glass-nav">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">✅ 任务大师</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/deleted">回收站</router-link>
      </div>
      <div class="nav-auth">
        <template v-if="userStore.user">
          <span class="user-greeting">👋 {{ userStore.user.username }}</span>
          <button @click="logout" class="logout-btn">退出</button>
        </template>
        <template v-else>
          <router-link to="/login" class="auth-link">登录</router-link>
          <router-link to="/register" class="auth-link register">注册</router-link>
        </template>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from './stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.logout();
  router.push('/login');
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: linear-gradient(145deg, #f1f5f9 0%, #e6edf4 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 玻璃态导航栏 */
.glass-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: 70px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.brand-link {
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(135deg, #0f172a, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  font-weight: 500;
  color: #1e293b;
  transition: color 0.2s;
  font-size: 1rem;
  padding: 6px 0;
}

.nav-links a:hover {
  color: #3b82f6;
}

.nav-links a.router-link-active {
  color: #3b82f6;
  border-bottom: 2px solid #3b82f6;
}

.nav-auth {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-greeting {
  font-weight: 500;
  color: #0f172a;
  background: rgba(59, 130, 246, 0.1);
  padding: 6px 14px;
  border-radius: 40px;
  font-size: 0.9rem;
}

.auth-link {
  text-decoration: none;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 40px;
  transition: all 0.2s;
}

.auth-link:first-child {
  color: #3b82f6;
  background: transparent;
  border: 1px solid #3b82f6;
}

.auth-link:first-child:hover {
  background: #3b82f6;
  color: white;
}

.auth-link.register {
  background: #3b82f6;
  color: white;
  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
}

.auth-link.register:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.logout-btn {
  background: none;
  border: none;
  color: #dc2626;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 6px 12px;
  border-radius: 40px;
  transition: 0.2s;
}

.logout-btn:hover {
  background: #fee2e2;
  color: #b91c1c;
}

.main-content {
  flex: 1;
  padding: 2rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

/* 响应式 */
@media (max-width: 768px) {
  .glass-nav {
    flex-wrap: wrap;
    height: auto;
    padding: 12px 20px;
    gap: 12px;
  }
  .nav-links {
    order: 3;
    width: 100%;
    justify-content: center;
    gap: 1.5rem;
  }
  .nav-auth {
    margin-left: auto;
  }
  .main-content {
    padding: 1.5rem 1rem;
  }
}
</style>