<template>
  <div class="filter-area">
    <button
      v-for="filter in filters"
      :key="filter.value"
      :class="{ active: currentFilter === filter.value }"
      @click="$emit('change', filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup>
defineProps(['currentFilter'])
defineEmits(['change'])

const filters = [
  { label: '全部', value: 'all' },
  { label: '未完成', value: 'pending' },
  { label: '已完成', value: 'completed' }
]
</script>