import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/todo-vue/'   // 注意：这个名称必须和你的 GitHub 仓库名完全一致
})