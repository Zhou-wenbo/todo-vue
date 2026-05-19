<template>
  <div class="todo-view">
    <!-- 顶部区域：标题与用户快捷操作（用户信息已在 App.vue 导航栏，这里可选保留简洁标题） -->
    <div class="view-header">
      <h1 class="view-title">📋 我的任务看板</h1>
    </div>

    <!-- 添加任务卡片 -->
    <div class="add-task-card">
      <TodoInput @add="addTask" />
    </div>

    <!-- 统计卡片组（仅当有任务时显示） -->
    <div v-if="tasks.length" class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📌</div>
        <div class="stat-info">
          <span class="stat-label">全部任务</span>
          <span class="stat-number">{{ tasks.length }}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-info">
          <span class="stat-label">已完成</span>
          <span class="stat-number">{{ tasks.filter(t => t.completed).length }}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⏳</div>
        <div class="stat-info">
          <span class="stat-label">未完成</span>
          <span class="stat-number">{{ tasks.filter(t => !t.completed).length }}</span>
        </div>
      </div>
    </div>

    <!-- 筛选 / 排序 / 搜索栏（玻璃态） -->
    <div class="control-bar">
      <div class="filter-group">
        <TodoFilter :currentFilter="currentFilter" @change="setFilter" />
      </div>
      <div class="action-group">
        <select v-model="dueDateFilter" class="glass-select">
          <option value="all">所有日期</option>
          <option value="has">有截止日期</option>
          <option value="none">无截止日期</option>
        </select>
        <button @click="toggleSortOrder" class="glass-btn">
          {{ sortOrder === 'asc' ? '📅 升序' : '📅 降序' }}
        </button>
        <button @click="togglePriorityOrder" class="glass-btn">
          {{ priorityOrder === 'asc' ? '⭐ 优先级升序' : '⭐ 优先级降序' }}
        </button>
        <div class="search-wrapper">
          <span class="search-icon">🔍</span>
          <input 
            type="text" 
            v-model="rawKeyword" 
            placeholder="搜索任务..." 
            class="search-input"
          />
        </div>
      </div>
    </div>

    <!-- 任务列表（毛玻璃 + 悬浮效果） -->
    <div class="task-list-container">
      <TodoList
        :tasks="filteredAndSortedTasks"
        :filter="currentFilter"
        @toggle="toggleComplete"
        @delete="deleteTask"
        @edit="handleEditTask"
        @click-item="handleItemClick"
      />
      <div v-if="!filteredAndSortedTasks.length && !loading" class="empty-state">
        <span>✨ 暂无任务，添加一条吧～</span>
      </div>
    </div>

    <!-- 加载指示器 -->
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, provide } from 'vue';
import { useTodoStore } from '../stores/todo';
import { storeToRefs } from 'pinia';
import TodoInput from '../components/TodoInput.vue';
import TodoFilter from '../components/TodoFilter.vue';
import TodoList from '../components/TodoList.vue';
import { useDebounce } from '../composables/useDebounce';

const dueDateFilter = ref<'all'|'has'|'none'>('all');
const sortOrder = ref<'asc'|'desc'>('asc');
const priorityOrder = ref<'asc'|'desc'>('asc');
const todoStore = useTodoStore();
const { tasks, currentFilter, loading, themeColor } = storeToRefs(todoStore);
provide('themeColor', themeColor);

const rawKeyword = ref('');
const searchKeyword = useDebounce(rawKeyword, 300);

const addTask = (text: string, dueDate?: string, priority?: 'high'|'medium'|'low') =>
  todoStore.addTask(text, dueDate, priority);
const deleteTask = (id: string) => todoStore.deleteTask(id);
const toggleComplete = (id: string) => todoStore.toggleComplete(id);
const setFilter = (filter: 'all' | 'pending' | 'completed') => todoStore.setFilter(filter);
const handleItemClick = (id: string) => alert(`点击任务 ID: ${id}`);

const togglePriorityOrder = () => {
  priorityOrder.value = priorityOrder.value === 'asc' ? 'desc' : 'asc';
};

const filteredAndSortedTasks = computed(() => {
  let filtered = tasks.value;
  if (searchKeyword.value.trim()) {
    const keyword = searchKeyword.value.trim().toLowerCase();
    filtered = filtered.filter(t => t.text.toLowerCase().includes(keyword));
  }
  if (dueDateFilter.value === 'has') {
    filtered = filtered.filter(t => t.dueDate);
  } else if (dueDateFilter.value === 'none') {
    filtered = filtered.filter(t => !t.dueDate);
  }
  const priorityValue = (p?: string) => {
    if (p === 'high') return 3;
    if (p === 'medium') return 2;
    if (p === 'low') return 1;
    return 0;
  };
  return [...filtered].sort((a, b) => {
    const pa = priorityValue(a.priority);
    const pb = priorityValue(b.priority);
    if (pa !== pb) {
      return priorityOrder.value === 'asc' ? pa - pb : pb - pa;
    }
    if (sortOrder.value === 'asc') {
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return a.dueDate.localeCompare(b.dueDate);
    } else {
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return b.dueDate.localeCompare(a.dueDate);
    }
  });
});

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
};

const handleEditTask = (id: string) => {
  const task = tasks.value.find(t => t._id === id);
  if (task) {
    const newText = prompt('编辑任务', task.text);
    if (newText && newText.trim()) todoStore.editTask(id, newText.trim());
  }
};

onMounted(() => {
  todoStore.fetchTasks();
});
</script>

<style scoped>
/* ========== 全局惊艳风格 ========== */
.todo-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.view-header {
  margin-bottom: 2rem;
}
.view-title {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(120deg, #1f2937, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: -0.5px;
}

/* 添加任务卡片 */
.add-task-card {
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(12px);
  border-radius: 32px;
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.03);
  border: 1px solid rgba(255,255,255,0.8);
}

/* 统计卡片网格 */
.stats-grid {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.stat-card {
  flex: 1;
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
  border-radius: 28px;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.25s;
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}
.stat-card:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,0.85);
  box-shadow: 0 12px 24px -8px rgba(59,130,246,0.2);
}
.stat-icon {
  font-size: 2rem;
}
.stat-info {
  display: flex;
  flex-direction: column;
}
.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #4b5563;
}
.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
}

/* 控制栏（毛玻璃） */
.control-bar {
  background: rgba(255,255,255,0.65);
  backdrop-filter: blur(16px);
  border-radius: 48px;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255,255,255,0.7);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.filter-group {
  min-width: 160px;
}
.action-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
}
.glass-select, .glass-btn {
  background: rgba(255,255,255,0.85);
  border: 1px solid rgba(203,213,225,0.5);
  border-radius: 40px;
  padding: 0.5rem 1.2rem;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  color: #1e293b;
}
.glass-select:hover, .glass-btn:hover {
  background: white;
  border-color: #3b82f6;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
}
.search-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 12px;
  font-size: 0.9rem;
  color: #94a3b8;
  pointer-events: none;
}
.search-input {
  background: rgba(255,255,255,0.9);
  border: 1px solid #e2e8f0;
  border-radius: 40px;
  padding: 0.5rem 1rem 0.5rem 2.2rem;
  font-size: 0.85rem;
  width: 220px;
  transition: all 0.2s;
}
.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59,130,246,0.2);
  background: white;
  width: 260px;
}

/* 任务列表容器 */
.task-list-container {
  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(4px);
  border-radius: 32px;
  padding: 0.2rem 0.2rem;
  max-height: 60vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0,0,0,0.02);
}
/* 自定义滚动条 */
.task-list-container::-webkit-scrollbar {
  width: 6px;
}
.task-list-container::-webkit-scrollbar-track {
  background: #e2e8f0;
  border-radius: 10px;
}
.task-list-container::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 10px;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #64748b;
  font-size: 1rem;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255,255,255,0.8);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 响应式 */
@media (max-width: 768px) {
  .todo-view {
    padding: 1rem;
  }
  .control-bar {
    flex-direction: column;
    align-items: stretch;
    border-radius: 28px;
  }
  .action-group {
    justify-content: flex-start;
  }
  .stats-grid {
    flex-direction: column;
  }
  .search-input {
    width: 100%;
  }
  .search-input:focus {
    width: 100%;
  }
}
</style>