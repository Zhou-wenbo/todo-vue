<template>
  <div class="deleted-container">
    <h2>回收站</h2>
    <p v-if="!deletedTasks || !deletedTasks.length" class="empty">暂无已删除的任务</p>
    <ul v-else class="deleted-list">
      <li v-for="task in deletedTasks" :key="task.id" class="deleted-item">
        <span>{{ task.text }}</span>
        <span class="date">删除于 {{ formatDate(task.deleted_at) }}</span>
        <div class="actions">
          <button @click="restoreTask(task.id)" class="restore">恢复</button>
          <button @click="permanentDeleteTask(task.id)" class="permanent">彻底删除</button>
        </div>
      </li>
    </ul>
    <button v-if="deletedTasks && deletedTasks.length" @click="clearAll" class="clear-all">清空回收站</button>
    <router-link to="/" class="back-link">返回首页</router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTodoStore } from '../stores/todo'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { deletedTasks } = storeToRefs(todoStore)

const restoreTask = (id: number) => todoStore.restoreTask(id)
const permanentDeleteTask = (id: number) => todoStore.permanentDeleteTask(id)
const clearAll = () => {
  if (confirm('确定要清空回收站吗？此操作不可恢复。')) {
    todoStore.clearDeletedTasks()
  }
}

// 修复类型：参数可能为 null 或 undefined
const formatDate = (timestamp: string | null | undefined) => {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleString()
}

onMounted(() => {
  todoStore.fetchDeletedTasks()
})
</script>

<style scoped>
.deleted-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.deleted-list {
  list-style: none;
  padding: 0;
}
.deleted-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 12px 0;
  flex-wrap: wrap;
}
.date {
  font-size: 0.8rem;
  color: #888;
  margin: 0 10px;
}
.actions button {
  margin-left: 8px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.restore {
  background-color: #28a745;
  color: white;
}
.permanent {
  background-color: #dc3545;
  color: white;
}
.clear-all {
  margin-top: 20px;
  background-color: #ffc107;
  color: #333;
}
.back-link {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #42b983;
}
.empty {
  text-align: center;
  color: #aaa;
}
</style>