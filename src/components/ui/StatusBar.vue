<template>
  <div class="status-bar">
    <div class="status-item">
      <div class="status-icon">🍖</div>
      <div class="status-info">
        <div class="status-label">배고픔</div>
        <ProgressBar :value="hunger" :color="getColor(hunger)" />
      </div>
    </div>
    
    <div class="status-item">
      <div class="status-icon">😊</div>
      <div class="status-info">
        <div class="status-label">행복도</div>
        <ProgressBar :value="happiness" :color="getColor(happiness)" />
      </div>
    </div>
    
    <div class="status-item">
      <div class="status-icon">❤️</div>
      <div class="status-info">
        <div class="status-label">건강</div>
        <ProgressBar :value="health" :color="getColor(health)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProgressBar from '../common/ProgressBar.vue'

defineProps({
  hunger: {
    type: Number,
    required: true
  },
  happiness: {
    type: Number,
    required: true
  },
  health: {
    type: Number,
    required: true
  }
})

// 수치에 따른 색상 결정
const getColor = (value) => {
  if (value >= 70) return 'var(--success-color)'
  if (value >= 30) return 'var(--warning-color)'
  return 'var(--danger-color)'
}
</script>

<style scoped>
.status-bar {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--bg-overlay);
  padding: 16px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(10px);
}

.status-item {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 200px;
}

.status-icon {
  font-size: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-info {
  flex: 1;
}

.status-label {
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 4px;
  font-weight: 500;
}

/* 모바일 */
@media (max-width: 768px) {
  .status-bar {
    top: 10px;
    left: 10px;
    right: 10px;
    padding: 12px;
  }
  
  .status-item {
    min-width: auto;
  }
}
</style>
