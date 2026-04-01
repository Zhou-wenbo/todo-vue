<template>
  <div class="input-area">
    <input 
      type="text" 
      v-model="newTaskText" 
      @keyup.enter="submit" 
      placeholder="输入新任务..."
    >
    <button @click="submit">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const newTaskText = ref('')

const submit = () => {
  if (newTaskText.value.trim()) {
    emit('add', newTaskText.value.trim())
    newTaskText.value = ''
  }
}
</script>