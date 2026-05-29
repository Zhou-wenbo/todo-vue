<template>
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-header">
        <h2>欢迎回来</h2>
        <p>请登录您的账号</p>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>用户名</label>
          <input 
            type="text" 
            v-model="username" 
            placeholder="输入用户名" 
            required 
            autocomplete="username"
            class="auth-input"
          />
        </div>
        <div class="input-group">
          <label>密码</label>
          <input 
            type="password" 
            v-model="password" 
            placeholder="输入密码" 
            required 
            autocomplete="current-password"
            class="auth-input"
          />
        </div>
        <button type="submit" class="auth-btn" :disabled="loading">
          {{ loading ? '登录中...' : '登录' }}
        </button>
        <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
        <p class="auth-footer">
          还没有账号？<router-link to="/register">立即注册</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    await userStore.login(username.value, password.value)
    // 登录成功后跳转首页
    await router.push('/')
  } catch (err: any) {
    errorMessage.value = err.message || '登录失败，请检查用户名和密码'
    console.error('登录错误:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* 样式与之前相同，此处略（可保留原有美化样式） */
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
  border-radius: 32px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 420px;
  padding: 40px 32px;
}
.auth-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
  text-align: center;
}
.auth-header p {
  color: #666;
  font-size: 14px;
  text-align: center;
}
.input-group {
  margin-bottom: 20px;
}
.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
  font-size: 14px;
}
.auth-input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  font-size: 16px;
  transition: all 0.2s;
  outline: none;
  background: #f9f9fc;
}
.auth-input:focus {
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
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.auth-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}
.auth-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.error-msg {
  color: #e53e3e;
  font-size: 14px;
  text-align: center;
  margin-top: 12px;
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
</style>