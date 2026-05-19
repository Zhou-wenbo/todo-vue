<template>
  <ul class="task-list">
    <TodoItem
      v-for="(task, idx) in filteredTasks"
      :key="task._id"
      :task="task"
      :index="idx + 1"
      @toggle="emit('toggle', task._id)"
      @delete="emit('delete', task._id)"
      @edit="emit('edit', task._id)"
      @click-item="emit('click-item', task._id)"
    />
  </ul>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import { computed } from 'vue';
import type { Task } from '../stores/todo';   // 只使用导入的类型

const props = defineProps<{
  tasks: Task[];
  filter: 'all' | 'pending' | 'completed';
}>();

const emit = defineEmits<{
  (e: 'toggle', id: string): void;
  (e: 'delete', id: string): void;
  (e: 'edit', id: string): void;
  (e: 'click-item', id: string): void;
}>();

const filteredTasks = computed(() => {
  if (props.filter === 'pending') return props.tasks.filter(t => !t.completed);
  if (props.filter === 'completed') return props.tasks.filter(t => t.completed);
  return props.tasks;
});
</script>

<style scoped>
.task-list {
  list-style: none;
}
</style>