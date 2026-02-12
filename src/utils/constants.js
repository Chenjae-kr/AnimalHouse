// 게임 설정 상수
export const GAME_CONFIG = {
  // 상태 업데이트 간격 (밀리초)
  UPDATE_INTERVAL: 60000, // 1분
  
  // 쿨다운 시간 (초)
  FEED_COOLDOWN: 30,
  PLAY_COOLDOWN: 60,
  
  // 상태 변화량
  HUNGER_INCREASE_RATE: 2, // 1분당
  HAPPINESS_DECREASE_RATE: 1, // 5분당
  FEED_HUNGER_DECREASE: 30,
  FEED_HAPPINESS_INCREASE: 5,
  PLAY_HAPPINESS_INCREASE: 25,
  PLAY_ENERGY_DECREASE: 10,
  PLAY_HUNGER_INCREASE: 5,
  
  // 상태 임계값
  HUNGER_THRESHOLD_HIGH: 80,
  HUNGER_THRESHOLD_LOW: 20,
  HAPPINESS_THRESHOLD_HIGH: 70,
  HAPPINESS_THRESHOLD_LOW: 30,
  HEALTH_THRESHOLD_HIGH: 70,
  HEALTH_THRESHOLD_LOW: 30
}

// 메시지
export const MESSAGES = {
  FEED_SUCCESS: '냠냠! 맛있어요!',
  FEED_NOT_HUNGRY: '아직 배고프지 않아요!',
  FEED_COOLDOWN: '아직 먹이를 줄 수 없어요!',
  
  PLAY_SUCCESS: '와! 재미있어요!',
  PLAY_TIRED: '너무 피곤해요!',
  PLAY_COOLDOWN: '조금만 쉬었다 놀아요!',
  
  CLICK_GREET: ['안녕!', '만나서 반가워!', '놀아줘!', '배고파!', '사랑해!'],
  
  SAVE_SUCCESS: '저장되었습니다!',
  SAVE_FAILED: '저장에 실패했습니다.',
  LOAD_SUCCESS: '불러왔습니다!',
  LOAD_FAILED: '불러오기에 실패했습니다.'
}

// 3D 씬 설정
export const SCENE_CONFIG = {
  BACKGROUND_COLOR: 0xfff5f7,
  GROUND_COLOR: 0x98d8c8,
  GRID_SIZE: 20,
  
  CAMERA: {
    FOV: 75,
    NEAR: 0.1,
    FAR: 1000,
    POSITION: { x: 0, y: 2, z: 5 }
  },
  
  CONTROLS: {
    MIN_DISTANCE: 3,
    MAX_DISTANCE: 10,
    MAX_POLAR_ANGLE: Math.PI / 2,
    DAMPING_FACTOR: 0.05
  },
  
  LIGHTS: {
    AMBIENT: {
      COLOR: 0xffffff,
      INTENSITY: 0.6
    },
    DIRECTIONAL: {
      COLOR: 0xffffff,
      INTENSITY: 0.8,
      POSITION: { x: 5, y: 10, z: 5 }
    }
  }
}

// 로컬 저장소 키
export const STORAGE_KEYS = {
  ANIMAL_DATA: 'animal-house-data',
  SETTINGS: 'animal-house-settings'
}

// 애니메이션 상태
export const ANIMATION_STATES = {
  IDLE: 'idle',
  WALK: 'walk',
  EAT: 'eat',
  PLAY: 'play',
  SLEEP: 'sleep'
}

// 색상 팔레트
export const COLORS = {
  PRIMARY: '#FF6B9D',
  SECONDARY: '#C44569',
  ACCENT: '#FFA07A',
  SUCCESS: '#98D8C8',
  WARNING: '#FFD93D',
  DANGER: '#FF6B6B'
}
