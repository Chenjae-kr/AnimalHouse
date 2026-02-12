import { ref } from 'vue'

export function useAnimalState() {
  // 동물 상태 객체
  const animalState = ref({
    hunger: 50,      // 배고픔 (0-100, 높을수록 배고픔)
    happiness: 50,   // 행복도 (0-100)
    health: 50,      // 건강 (0-100)
    energy: 50       // 에너지 (0-100)
  })

  // 상태 업데이트 (시간 경과)
  const updateState = () => {
    // 배고픔 증가
    animalState.value.hunger = Math.min(100, animalState.value.hunger + 2)
    
    // 행복도 감소
    animalState.value.happiness = Math.max(0, animalState.value.happiness - 1)
    
    // 건강도 계산 (배고픔이 높으면 건강 감소)
    if (animalState.value.hunger > 80) {
      animalState.value.health = Math.max(0, animalState.value.health - 1)
    } else if (animalState.value.hunger < 30 && animalState.value.happiness > 70) {
      // 배고프지 않고 행복하면 건강 증가
      animalState.value.health = Math.min(100, animalState.value.health + 0.5)
    }
    
    // 에너지 회복 (천천히)
    if (animalState.value.energy < 100) {
      animalState.value.energy = Math.min(100, animalState.value.energy + 0.5)
    }
  }

  // 먹이주기
  const feedAnimal = () => {
    animalState.value.hunger = Math.max(0, animalState.value.hunger - 30)
    animalState.value.happiness = Math.min(100, animalState.value.happiness + 5)
  }

  // 놀아주기
  const playWithAnimal = () => {
    animalState.value.happiness = Math.min(100, animalState.value.happiness + 25)
    animalState.value.energy = Math.max(0, animalState.value.energy - 10)
    animalState.value.hunger = Math.min(100, animalState.value.hunger + 5)
  }

  // 상태 리셋
  const resetState = () => {
    animalState.value = {
      hunger: 50,
      happiness: 50,
      health: 50,
      energy: 50
    }
  }

  return {
    animalState,
    updateState,
    feedAnimal,
    playWithAnimal,
    resetState
  }
}
