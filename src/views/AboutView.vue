<template>
  <div class="about-view">
    <div class="about-card">
      <div class="about-header">
        <h1>📘 关于本项目</h1>
        <p>一个现代化的待办应用，全栈技术实践</p>
      </div>

      <div class="about-content">
        <div class="feature-grid">
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span>Vue 3 + TypeScript</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📦</span>
            <span>Pinia 状态管理</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🛣️</span>
            <span>Vue Router 路由</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🎨</span>
            <span>毛玻璃 UI 设计</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🗑️</span>
            <span>回收站 & 恢复</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🔍</span>
            <span>搜索 / 筛选 / 排序</span>
          </div>
        </div>

        <div class="tech-stack">
          <h3>技术栈</h3>
          <div class="tech-badges">
            <span class="badge">Vue 3</span>
            <span class="badge">TypeScript</span>
            <span class="badge">Pinia</span>
            <span class="badge">Vue Router</span>
            <span class="badge">Axios</span>
            <span class="badge">Express.js</span>
            <span class="badge">MongoDB</span>
            <span class="badge">JWT</span>
          </div>
        </div>

        <div class="author-info">
          <p>👨‍💻 作者：<strong>周文波</strong></p>
          <p>📅 版本：1.0.0</p>
        </div>
      </div>

      <div class="about-footer">
        <router-link to="/" class="back-home">← 返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-view {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.about-card {
  max-width: 750px;
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  border-radius: 48px;
  padding: 2rem 2rem 2rem;
  box-shadow: 0 25px 40px -12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: all 0.2s;
}

.about-header {
  text-align: center;
  margin-bottom: 2rem;
}
.about-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e293b, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}
.about-header p {
  color: #4b5563;
  font-size: 1rem;
}

.about-content {
  margin-bottom: 2rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-bottom: 2rem;
}
.feature-item {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 60px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: #1f2937;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,0.5);
}
.feature-icon {
  font-size: 1.2rem;
}

.tech-stack {
  text-align: center;
  margin-bottom: 2rem;
}
.tech-stack h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
}
.tech-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
}
.badge {
  background: white;
  padding: 6px 14px;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #1e293b;
  box-shadow: 0 2px 6px rgba(0,0,0,0.03);
  border: 1px solid #e2e8f0;
}

.author-info {
  text-align: center;
  background: rgba(255,255,255,0.5);
  border-radius: 32px;
  padding: 1rem;
  margin-top: 1rem;
}
.author-info p {
  margin: 0.3rem 0;
  color: #334155;
}

.about-footer {
  text-align: center;
  margin-top: 1rem;
}
.back-home {
  text-decoration: none;
  display: inline-block;
  padding: 8px 24px;
  border-radius: 40px;
  background: rgba(59,130,246,0.1);
  color: #3b82f6;
  font-weight: 500;
  transition: 0.2s;
}
.back-home:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-2px);
}

/* 响应式 */
@media (max-width: 600px) {
  .about-card {
    padding: 1.5rem;
  }
  .feature-grid {
    grid-template-columns: 1fr;
  }
  .about-header h1 {
    font-size: 1.8rem;
  }
}
</style>