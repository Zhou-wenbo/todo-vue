<template>
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-header">
        <h2>欢迎回来</h2>
        <p>请登录您的账号</p>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <input 
            type="text" 
            v-model="username" 
            placeholder="用户名" 
            required 
            autofocus
          />
        </div>
        <div class="input-group">
          <input 
            type="password" 
            v-model="password" 
            placeholder="密码" 
            required 
          />
        </div>
        <button type="submit" class="auth-btn">登录</button>
        <p class="auth-footer">
          还没有账号？<router-link to="/register">立即注册</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const username = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    await userStore.login({ username: username.value, password: password.value });
    router.push('/');
  } catch (err) {
    alert('登录失败：' + (err.response?.data?.message || '网络错误'));
  }
};
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.auth-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 420px;
  padding: 40px 32px;
  transition: transform 0.2s;
}
.auth-header {
  text-align: center;
  margin-bottom: 32px;
}
.auth-header h2 {
  font-size: 28px;
  color: #1a1a2e;
  margin-bottom: 8px;
}
.auth-header p {
  color: #666;
  font-size: 14px;
}
.input-group {
  margin-bottom: 20px;
}
.input-group input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s;
  outline: none;
  background: #f9f9fc;
}
.input-group input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background: white;
}
.auth-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.2s;
}
.auth-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}
.auth-footer {
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: #666;
}
.auth-footer a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}
.auth-footer a:hover {
  text-decoration: underline;
}
</style>