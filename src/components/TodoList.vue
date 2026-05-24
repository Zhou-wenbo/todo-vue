<template>
  <ul class="task-list">
    <TodoItem
      v-for="(task, idx) in tasks"
      :key="task.id"
      :task="task"
      :index="idx + 1"
      @toggle="$emit('toggle', $event)"
      @delete="$emit('delete', $event)"
      @edit="$emit('edit', $event)"
      @click-item="$emit('click-item', $event)"
    />
  </ul>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue'

defineProps<{
  tasks: any[]
}>()

defineEmits<{
  (e: 'toggle', id: number): void
  (e: 'delete', id: number): void
  (e: 'edit', id: number): void
  (e: 'click-item', id: number): void
}>()
</script>

<style scoped>
.task-list {
  list-style: none;
}
</style>