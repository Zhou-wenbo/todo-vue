<template>
  <div class="container">
    <h1>待办事项 (Vue版)</h1>
    
    <TodoInput @add="addTask" />
    
    <TodoFilter 
      :currentFilter="currentFilter" 
      @change="setFilter" 
    />
    
    <TodoList 
      :tasks="tasks" 
      :filter="currentFilter"
      @toggle="toggleComplete"
      @delete="deleteTask"
      @edit="editTask"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoList from './components/TodoList.vue'

const tasks = ref([])
const currentFilter = ref('all')

const addTask = (text) => {
  const newId = tasks.value.length ? Math.max(...tasks.value.map(t => t.id)) + 1 : 1
  tasks.value.push({
    id: newId,
    text: text,
    completed: false
  })
}

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

const toggleComplete = (id) => {
  const task = tasks.value.find(t => t.id === id)
  if (task) task.completed = !task.completed
}

const editTask = (id) => {
  const task = tasks.value.find(t => t.id === id)
  if (task) {
    const newText = prompt('编辑任务', task.text)
    if (newText && newText.trim()) {
      task.text = newText.trim()
    }
  }
}

const setFilter = (filter) => {
  currentFilter.value = filter
}

const loadTasks = () => {
  const stored = localStorage.getItem('tasks')
  if (stored) {
    tasks.value = JSON.parse(stored)
  } else {
    tasks.value = [{ id: 1, text: '学习 Vue 组件', completed: false }]
  }
}
loadTasks()

watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}, { deep: true })
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f5f5f5;
  padding: 20px;
}
.container {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.input-area {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
#taskInput {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}
button:hover {
  background-color: #0056b3;
}
.filter-area {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}
.filter-btn {
  background-color: #e9ecef;
  color: #495057;
}
.filter-btn.active {
  background-color: #007bff;
  color: white;
}
.task-list {
  list-style: none;
}
.task-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
  gap: 10px;
}
.task-check {
  width: 20px;
  height: 20px;
}
.task-text {
  flex: 1;
}
.task-text.completed {
  text-decoration: line-through;
  color: #aaa;
}
.task-edit, .task-delete {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.task-edit {
  color: #28a745;
}
.task-delete {
  color: #dc3545;
}
</style>