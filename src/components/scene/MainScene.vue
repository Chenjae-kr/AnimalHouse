<template>
  <div class="scene-container">
    <canvas ref="canvasRef"></canvas>
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>동물을 불러오는 중...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThreeScene } from '@/composables/useThreeScene'

const canvasRef = ref(null)
const loading = ref(true)

// Three.js 씬 관리
const { initScene, animate, cleanup, loadModel } = useThreeScene()

onMounted(async () => {
  try {
    // 씬 초기화
    initScene(canvasRef.value)
    
    // 3D 모델 로딩 (현재는 기본 큐브)
    // 나중에 실제 동물 모델로 교체
    await loadModel()
    
    loading.value = false
    
    // 애니메이션 시작
    animate()
  } catch (error) {
    console.error('씬 초기화 실패:', error)
    loading.value = false
  }
})

onUnmounted(() => {
  cleanup()
})
</script>

<style scoped>
.scene-container {
  width: 100%;
  height: 100%;
  position: relative;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--text-primary);
}

.spinner {
  width: 50px;
  height: 50px;
  margin: 0 auto 16px;
  border: 4px solid var(--text-light);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
