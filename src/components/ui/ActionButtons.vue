<template>
  <div class="action-buttons">
    <button
      class="action-btn"
      :class="{ disabled: feedCooldown > 0 }"
      :disabled="feedCooldown > 0"
      @click="$emit('feed')"
      :title="feedCooldown > 0 ? `${feedCooldown}초 후 사용 가능` : '먹이주기'"
    >
      <span class="btn-icon">🍖</span>
      <span class="btn-label">먹이주기</span>
      <span v-if="feedCooldown > 0" class="cooldown">{{ feedCooldown }}s</span>
    </button>
    
    <button
      class="action-btn"
      :class="{ disabled: playCooldown > 0 }"
      :disabled="playCooldown > 0"
      @click="$emit('play')"
      :title="playCooldown > 0 ? `${playCooldown}초 후 사용 가능` : '놀아주기'"
    >
      <span class="btn-icon">🎾</span>
      <span class="btn-label">놀아주기</span>
      <span v-if="playCooldown > 0" class="cooldown">{{ playCooldown }}s</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  feedCooldown: {
    type: Number,
    default: 0
  },
  playCooldown: {
    type: Number,
    default: 0
  }
})

defineEmits(['feed', 'play'])
</script>

<style scoped>
.action-buttons {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
}

.action-btn {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: var(--bg-overlay);
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(10px);
  transition: all var(--transition-normal);
}

.action-btn:hover:not(.disabled) {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  background: var(--primary-color);
}

.action-btn:active:not(.disabled) {
  transform: translateY(-2px);
}

.action-btn.disabled {
  filter: grayscale(1);
  opacity: 0.6;
}

.btn-icon {
  font-size: 32px;
  margin-bottom: 4px;
}

.btn-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
}

.action-btn:hover:not(.disabled) .btn-label {
  color: white;
}

.cooldown {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 모바일 */
@media (max-width: 768px) {
  .action-buttons {
    bottom: 20px;
    gap: 12px;
  }
  
  .action-btn {
    width: 70px;
    height: 70px;
  }
  
  .btn-icon {
    font-size: 28px;
  }
  
  .btn-label {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .action-btn {
    width: 60px;
    height: 60px;
  }
  
  .btn-icon {
    font-size: 24px;
  }
}
</style>
