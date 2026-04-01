<template>
  <ul class="task-list">
    <TodoItem
      v-for="task in filteredTasks"
      :key="task.id"
      :task="task"
      @toggle="$emit('toggle', $event)"
      @delete="$emit('delete', $event)"
      @edit="$emit('edit', $event)"
    />
  </ul>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import { computed } from 'vue'

const props = defineProps(['tasks', 'filter'])
const emit = defineEmits(['toggle', 'delete', 'edit'])

const filteredTasks = computed(() => {
  if (props.filter === 'pending') {
    return props.tasks.filter(t => !t.completed)
  } else if (props.filter === 'completed') {
    return props.tasks.filter(t => t.completed)
  } else {
    return props.tasks
  }
})
</script>