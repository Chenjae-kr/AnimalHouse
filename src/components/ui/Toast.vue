<template>
  <Transition name="toast">
    <div class="toast" :class="`toast-${type}`">
      <span class="toast-icon">{{ getIcon(type) }}</span>
      <span class="toast-message">{{ message }}</span>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'warning', 'error', 'info'].includes(value)
  }
})

const getIcon = (type) => {
  const icons = {
    success: '✅',
    warning: '⚠️',
    error: '❌',
    info: 'ℹ️'
  }
  return icons[type] || icons.info
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-toast);
  
  display: flex;
  align-items: center;
  gap: 12px;
  
  padding: 16px 24px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(10px);
  
  font-size: 16px;
  font-weight: 500;
  color: white;
  
  min-width: 300px;
  max-width: 500px;
}

.toast-success {
  background: linear-gradient(135deg, var(--success-color), #7EDCC7);
}

.toast-warning {
  background: linear-gradient(135deg, var(--warning-color), #FFC93C);
}

.toast-error {
  background: linear-gradient(135deg, var(--danger-color), #FF5252);
}

.toast-info {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
}

.toast-icon {
  font-size: 24px;
}

.toast-message {
  flex: 1;
}

/* 애니메이션 */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px) scale(0.9);
}

/* 모바일 */
@media (max-width: 768px) {
  .toast {
    top: 60px;
    min-width: 250px;
    max-width: calc(100% - 40px);
    padding: 12px 20px;
    font-size: 14px;
  }
}
</style>
