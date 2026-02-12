<template>
  <div class="progress-bar">
    <div 
      class="progress-fill"
      :style="{
        width: `${value}%`,
        backgroundColor: color
      }"
    >
    </div>
    <span class="progress-text">{{ value }}%</span>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100
  },
  color: {
    type: String,
    default: 'var(--primary-color)'
  }
})
</script>

<style scoped>
.progress-bar {
  position: relative;
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease, background-color 0.3s ease;
  min-width: 0;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
}
</style>
