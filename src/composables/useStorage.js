export function useStorage() {
  const STORAGE_KEY = 'animal-house-data'

  // 데이터 저장
  const saveData = (animalState) => {
    try {
      const dataToSave = {
        animalState: {
          hunger: animalState.hunger,
          happiness: animalState.happiness,
          health: animalState.health,
          energy: animalState.energy
        },
        lastUpdateTime: Date.now()
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))
      return true
    } catch (error) {
      console.error('데이터 저장 실패:', error)
      return false
    }
  }

  // 데이터 로드
  const loadData = (animalState) => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY)
      
      if (!savedData) {
        return false
      }
      
      const data = JSON.parse(savedData)
      
      // 마지막 업데이트 이후 경과 시간 계산 (분 단위)
      const now = Date.now()
      const elapsed = Math.floor((now - data.lastUpdateTime) / (1000 * 60))
      
      // 저장된 상태 복원
      animalState.value = { ...data.animalState }
      
      // 경과 시간만큼 상태 업데이트 (최대 1440분 = 24시간)
      const minutesToUpdate = Math.min(elapsed, 1440)
      
      for (let i = 0; i < minutesToUpdate; i++) {
        // 배고픔 증가
        animalState.value.hunger = Math.min(100, animalState.value.hunger + 2)
        
        // 행복도 감소 (5분마다 1씩)
        if (i % 5 === 0) {
          animalState.value.happiness = Math.max(0, animalState.value.happiness - 1)
        }
        
        // 건강도 조정
        if (animalState.value.hunger > 80) {
          animalState.value.health = Math.max(0, animalState.value.health - 1)
        }
      }
      
      return true
    } catch (error) {
      console.error('데이터 로드 실패:', error)
      return false
    }
  }

  // 데이터 초기화
  const clearData = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      return true
    } catch (error) {
      console.error('데이터 삭제 실패:', error)
      return false
    }
  }

  // localStorage 지원 여부 확인
  const isStorageAvailable = () => {
    try {
      const test = '__storage_test__'
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch (error) {
      return false
    }
  }

  return {
    saveData,
    loadData,
    clearData,
    isStorageAvailable
  }
}
