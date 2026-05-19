<template>
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-header">
        <h2>创建账号</h2>
        <p>加入我们，开始管理任务</p>
      </div>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <input 
            type="text" 
            v-model="username" 
            placeholder="用户名 (至少3位)" 
            required 
          />
        </div>
        <div class="input-group">
          <input 
            type="email" 
            v-model="email" 
            placeholder="邮箱" 
            required 
          />
        </div>
        <div class="input-group">
          <input 
            type="password" 
            v-model="password" 
            placeholder="密码 (至少6位)" 
            required 
          />
        </div>
        <div class="input-group">
          <input 
            type="password" 
            v-model="confirmPassword" 
            placeholder="确认密码" 
            required 
          />
        </div>
        <button type="submit" class="auth-btn" :disabled="loading">注册</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p class="auth-footer">
          已有账号？<router-link to="/login">立即登录</router-link>
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
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const errorMessage = ref('');

const handleRegister = async () => {
  if (username.value.length < 3) {
    errorMessage.value = '用户名至少3个字符';
    return;
  }
  if (password.value.length < 6) {
    errorMessage.value = '密码至少6个字符';
    return;
  }
  if (password.value !== confirmPassword.value) {
    errorMessage.value = '两次输入的密码不一致';
    return;
  }
  loading.value = true;
  errorMessage.value = '';
  try {
    await userStore.register({
      username: username.value,
      email: email.value,
      password: password.value
    });
    router.push('/');
  } catch (err) {
    errorMessage.value = err.response?.data?.message || '注册失败，请重试';
  } finally {
    loading.value = false;
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
.auth-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}
.auth-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.error-message {
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
.auth-footer a:hover {
  text-decoration: underline;
}
</style>