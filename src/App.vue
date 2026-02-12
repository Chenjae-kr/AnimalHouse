<template>
  <div class="app-container">
    <!-- 3D 씬 영역 -->
    <MainScene />
    
    <!-- UI 오버레이 -->
    <div class="ui-overlay">
      <!-- 상태 바 -->
      <StatusBar
        :hunger="animalState.hunger"
        :happiness="animalState.happiness"
        :health="animalState.health"
      />
      
      <!-- 액션 버튼 -->
      <ActionButtons
        @feed="handleFeed"
        @play="handlePlay"
        :feedCooldown="feedCooldown"
        :playCooldown="playCooldown"
      />
    </div>
    
    <!-- 토스트 메시지 -->
    <Toast
      v-if="toast.show"
      :message="toast.message"
      :type="toast.type"
      @close="toast.show = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MainScene from './components/scene/MainScene.vue'
import StatusBar from './components/ui/StatusBar.vue'
import ActionButtons from './components/ui/ActionButtons.vue'
import Toast from './components/ui/Toast.vue'
import { useAnimalState } from './composables/useAnimalState'
import { useStorage } from './composables/useStorage'

// 동물 상태 관리
const { animalState, updateState, feedAnimal, playWithAnimal } = useAnimalState()

// 저장소 관리
const { saveData, loadData } = useStorage()

// 쿨다운 상태
const feedCooldown = ref(0)
const playCooldown = ref(0)

// 토스트 메시지
const toast = ref({
  show: false,
  message: '',
  type: 'success'
})

// 토스트 표시 함수
const showToast = (message, type = 'success') => {
  toast.value = {
    show: true,
    message,
    type
  }
  
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}

// 먹이주기 핸들러
const handleFeed = () => {
  if (feedCooldown.value > 0) {
    showToast('아직 먹이를 줄 수 없어요!', 'warning')
    return
  }
  
  if (animalState.value.hunger < 20) {
    showToast('아직 배고프지 않아요!', 'info')
    return
  }
  
  feedAnimal()
  showToast('냠냠! 맛있어요!', 'success')
  feedCooldown.value = 30
  
  // 쿨다운 타이머
  const interval = setInterval(() => {
    feedCooldown.value--
    if (feedCooldown.value <= 0) {
      clearInterval(interval)
    }
  }, 1000)
}

// 놀아주기 핸들러
const handlePlay = () => {
  if (playCooldown.value > 0) {
    showToast('조금만 쉬었다 놀아요!', 'warning')
    return
  }
  
  playWithAnimal()
  showToast('와! 재미있어요!', 'success')
  playCooldown.value = 60
  
  // 쿨다운 타이머
  const interval = setInterval(() => {
    playCooldown.value--
    if (playCooldown.value <= 0) {
      clearInterval(interval)
    }
  }, 1000)
}

// 시간 경과 시스템
let updateInterval = null

onMounted(() => {
  // 저장된 데이터 로드
  loadData(animalState)
  
  // 1분마다 상태 업데이트
  updateInterval = setInterval(() => {
    updateState()
    saveData(animalState.value)
  }, 60000) // 60초 = 1분
})

onUnmounted(() => {
  // 정리
  if (updateInterval) {
    clearInterval(updateInterval)
  }
  
  // 마지막 상태 저장
  saveData(animalState.value)
})
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.ui-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: var(--z-ui);
}

/* 자식 요소는 클릭 가능하게 */
.ui-overlay > * {
  pointer-events: auto;
}
</style>
