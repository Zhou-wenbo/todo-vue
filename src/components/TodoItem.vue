<template>
  <li class="task-item" @click="$emit('click-item', task.id)">
    <span>{{ index }}.</span>
    <input type="checkbox" :checked="task.completed" @change="$emit('toggle', task.id)" />
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <span v-if="task.due_date" class="due-date">📅 {{ task.due_date }}</span>
    <span v-if="task.priority" class="priority-badge" :class="task.priority">
      {{ task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢' }}
    </span>
    <button class="task-edit" @click.stop="$emit('edit', task.id)">✏️</button>
    <button class="task-delete" @click.stop="$emit('delete', task.id)">🗑️</button>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  task: any
  index: number
}>()

defineEmits<{
  (e: 'toggle', id: number): void
  (e: 'edit', id: number): void
  (e: 'delete', id: number): void
  (e: 'click-item', id: number): void
}>()
</script>


<style scoped>
.due-date {
  font-size: 0.8rem;
  color: #888;
  margin-left: 10px;
}
.task-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
  gap: 10px;
  cursor: pointer;
}
.task-item span:first-child {
  min-width: 28px;
}
.task-text {
  flex: 1;
}
.task-text.completed {
  text-decoration: line-through;
  color: #aaa;
}
.task-edit,
.task-delete {
  background: transparent;
  border: 1px solid;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.priority-badge {
  margin-left: 8px;
  font-size: 0.9rem;
}
</style>