<script setup lang="ts">
import { inject } from 'vue';
import type { Task } from '../stores/todo';

const props = defineProps<{
  task: Task;
  index: number;
}>();

const emit = defineEmits<{
  (e: 'toggle', id: string): void;
  (e: 'edit', id: string): void;
  (e: 'delete', id: string): void;
  (e: 'click-item', id: string): void;
}>();

const themeColor = inject<string>('themeColor', '#42b983');
</script>

<template>
  <li class="task-item" @click="emit('click-item', task._id)">
    <span>{{ index }}.</span>
    <input type="checkbox" :checked="task.completed" @change="emit('toggle', task._id)" />
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <span v-if="task.dueDate" class="due-date">📅 {{ task.dueDate }}</span>
    <span v-if="task.priority" class="priority-badge">{{ task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢' }}</span>
    <button class="task-edit" :style="{ borderColor: themeColor }" @click.stop="emit('edit', task._id)">✏️</button>
    <button class="task-delete" :style="{ borderColor: themeColor }" @click.stop="emit('delete', task._id)">🗑️</button>
  </li>
</template>