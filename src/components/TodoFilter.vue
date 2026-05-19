<template>
  <div class="filter-area">
    <button
      v-for="filter in filters"
      :key="filter.value"
      :class="{ active: currentFilter === filter.value }"
      @click="emit('change', filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentFilter: 'all' | 'pending' | 'completed'
}>()

const emit = defineEmits<{
  (e: 'change', filter: 'all' | 'pending' | 'completed'): void
}>()

const filters: { label: string; value: 'all' | 'pending' | 'completed' }[] = [
  { label: '全部', value: 'all' },
  { label: '未完成', value: 'pending' },
  { label: '已完成', value: 'completed' }
]
</script>

<style scoped>
.filter-area {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}
.filter-area button {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: rgb(255, 255, 255);
  cursor:pointer;
  font-size: 14px;
}
.filter-area button.active {
  background-color: #007bff;
  color: white;
}
</style>