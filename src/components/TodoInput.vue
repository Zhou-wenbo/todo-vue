<template>
  <div class="todo-input-wrapper">
    <div class="input-group">
      <input
        type="text"
        v-model="newTaskText"
        @keyup.enter="submit"
        placeholder="✍️ 写一个任务..."
        class="task-input"
      />
      <input type="date" v-model="dueDate" class="date-input" />
      <select v-model="priority" class="priority-select">
        <option value="high">🔴 高优先级</option>
        <option value="medium">🟡 中优先级</option>
        <option value="low">🟢 低优先级</option>
      </select>
      <button @click="submit" class="add-btn">
        <span>+ 添加任务</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTaskText = ref('');
const dueDate = ref('');
const priority = ref('medium');

const emit = defineEmits(['add']);

const submit = () => {
  if (newTaskText.value.trim()) {
    emit('add', newTaskText.value.trim(), dueDate.value || undefined, priority.value);
    newTaskText.value = '';
    dueDate.value = '';
    priority.value = 'medium';
  }
};
</script>

<style scoped>
/* 毛玻璃圆润卡片 */
.todo-input-wrapper {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  border-radius: 60px;
  padding: 8px;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);
  transition: all 0.2s;
}

.input-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

/* 输入框样式 */
.task-input {
  flex: 3;
  min-width: 180px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 48px;
  padding: 12px 20px;
  font-size: 0.95rem;
  font-weight: 500;
  outline: none;
  transition: 0.2s;
}

.task-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.date-input {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 48px;
  padding: 12px 16px;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  transition: 0.2s;
}

.date-input:focus {
  border-color: #3b82f6;
}

.priority-select {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 48px;
  padding: 12px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
  font-weight: 500;
}

/* 添加按钮渐变效果 */
.add-btn {
  background: linear-gradient(120deg, #3b82f6, #2563eb);
  border: none;
  border-radius: 48px;
  padding: 12px 28px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.add-btn:hover {
  transform: translateY(-2px);
  background: linear-gradient(120deg, #2563eb, #1d4ed8);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

/* 移动端适配 */
@media (max-width: 640px) {
  .todo-input-wrapper {
    border-radius: 28px;
  }
  .input-group {
    flex-direction: column;
    align-items: stretch;
  }
  .task-input,
  .date-input,
  .priority-select,
  .add-btn {
    width: 100%;
  }
}
</style>