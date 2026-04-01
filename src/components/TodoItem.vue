<template>
  <li class="task-item">
    <input 
      type="checkbox" 
      :checked="task.completed" 
      @change="$emit('toggle', task.id)"
    >
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <button class="task-edit" @click="$emit('edit', task.id)">✏️</button>
    <button class="task-delete" @click="$emit('delete', task.id)">🗑️</button>
  </li>
</template>

<script setup>
defineProps(['task'])
defineEmits(['toggle', 'edit', 'delete'])
</script>