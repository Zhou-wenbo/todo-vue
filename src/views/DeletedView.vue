<template>
  <div class="trash-view">
    <div class="trash-card">
      <div class="trash-header">
        <h2>🗑️ 回收站</h2>
        <p>已删除的任务会在这里保留，你可以恢复或彻底删除。</p>
      </div>

      <div v-if="!deletedTasks.length" class="empty-state">
        <span>✨ 回收站空空如也 ✨</span>
      </div>

      <ul v-else class="trash-list">
        <li v-for="task in deletedTasks" :key="task._id" class="trash-item">
          <div class="task-info">
            <span class="task-text">{{ task.text }}</span>
            <span class="delete-time">🗑️ 删除于 {{ formatDate(task.deletedAt) }}</span>
          </div>
          <div class="task-actions">
            <button @click="restoreTask(task._id)" class="btn-restore">
              ↻ 恢复
            </button>
            <button @click="permanentDeleteTask(task._id)" class="btn-permanent">
              ✕ 彻底删除
            </button>
          </div>
        </li>
      </ul>

      <div v-if="deletedTasks.length" class="trash-footer">
        <button @click="clearAll" class="btn-clear-all">清空回收站</button>
      </div>

      <div class="back-home">
        <router-link to="/" class="back-link">← 返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/todo'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { deletedTasks } = storeToRefs(todoStore)

const restoreTask = (id: string) => todoStore.restoreTask(id)
const permanentDeleteTask = (id: string) => todoStore.permanentDeleteTask(id)
const clearAll = () => {
  if (confirm('确定要清空回收站吗？此操作不可恢复。')) {
    todoStore.clearDeletedTasks()
  }
}

const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleString()
}
</script>

<style scoped>
/* 整体背景与布局 */
.trash-view {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.trash-card {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  border-radius: 40px;
  padding: 2rem 2rem 1.8rem;
  box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: all 0.2s;
}

.trash-header {
  text-align: center;
  margin-bottom: 2rem;
}
.trash-header h2 {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1f2937, #4b5563);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}
.trash-header p {
  color: #4b5563;
  font-size: 0.9rem;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 3rem;
  color: #6c757d;
  font-size: 1.1rem;
  background: rgba(255,255,255,0.5);
  border-radius: 32px;
}

/* 回收站列表 */
.trash-list {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 55vh;
  overflow-y: auto;
  padding-right: 6px;
}

.trash-list::-webkit-scrollbar {
  width: 5px;
}
.trash-list::-webkit-scrollbar-track {
  background: #e2e8f0;
  border-radius: 10px;
}
.trash-list::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 10px;
}

.trash-item {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  border-radius: 28px;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  transition: all 0.2s;
  border: 1px solid rgba(255,255,255,0.6);
}
.trash-item:hover {
  transform: translateY(-2px);
  background: white;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

.task-info {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: baseline;
}
.task-text {
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b;
  word-break: break-word;
}
.delete-time {
  font-size: 0.75rem;
  color: #6c757d;
  background: rgba(0,0,0,0.03);
  padding: 2px 8px;
  border-radius: 20px;
}

.task-actions {
  display: flex;
  gap: 0.8rem;
}
.btn-restore,
.btn-permanent {
  border: none;
  padding: 6px 16px;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
}
.btn-restore {
  background-color: #10b981;
  color: white;
  box-shadow: 0 2px 6px rgba(16,185,129,0.2);
}
.btn-restore:hover {
  background-color: #059669;
  transform: translateY(-1px);
}
.btn-permanent {
  background-color: #ef4444;
  color: white;
  box-shadow: 0 2px 6px rgba(239,68,68,0.2);
}
.btn-permanent:hover {
  background-color: #dc2626;
  transform: translateY(-1px);
}

.trash-footer {
  text-align: center;
  margin-top: 1.8rem;
}
.btn-clear-all {
  background: rgba(245, 158, 11, 0.9);
  border: none;
  padding: 10px 24px;
  border-radius: 40px;
  font-weight: 600;
  color: #1e293b;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: 0.2s;
}
.btn-clear-all:hover {
  background: #f59e0b;
  transform: translateY(-1px);
}

.back-home {
  text-align: center;
  margin-top: 1.5rem;
}
.back-link {
  text-decoration: none;
  color: #3b82f6;
  font-weight: 500;
  transition: 0.2s;
}
.back-link:hover {
  color: #2563eb;
  text-decoration: underline;
}

/* 响应式 */
@media (max-width: 640px) {
  .trash-card {
    padding: 1.5rem;
  }
  .trash-item {
    flex-direction: column;
    align-items: stretch;
  }
  .task-actions {
    justify-content: flex-end;
  }
}
</style>