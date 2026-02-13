# AnimalHouse 초보자 학습 가이드

이 문서는 **웹 개발/프론트엔드 입문자**가 이 프로젝트를 빠르게 이해하고, 직접 수정해 보며 학습할 수 있도록 만든 가이드입니다.

## 1) 이 프로젝트가 무엇인가요?

AnimalHouse는 Vue + Three.js로 만든 **3D 반려동물 웹 앱**입니다.

- 화면 가운데 3D 씬이 렌더링됩니다.
- 사용자는 `먹이주기`, `놀아주기` 버튼으로 동물 상태를 바꿉니다.
- 상태(배고픔/행복/건강/에너지)는 시간에 따라 자동으로 변합니다.
- 상태는 localStorage에 저장되어 새로고침 후에도 유지됩니다.

핵심은 "**UI(Vue)** + **상태 관리(Composables)** + **3D 렌더링(Three.js)**"의 결합입니다.

---

## 2) 아주 빠른 실행 순서 (처음 하는 사람용)

```bash
npm install
npm run dev
```

그 다음 브라우저에서 `http://localhost:5173` 접속.

추천 첫 실습:
1. 버튼 클릭해서 상태가 바뀌는지 확인
2. 새로고침 후 값이 유지되는지 확인
3. 코드에서 숫자(예: 먹이 효과량) 바꿔서 다시 확인

---

## 3) 프로젝트 구조 한눈에 보기

```text
AnimalHouse/
├── src/
│   ├── main.js                      # 앱 시작점
│   ├── App.vue                      # 전체 화면 조립(씬 + UI + 토스트)
│   ├── style.css                    # 전역 스타일
│   ├── assets/styles/variables.css  # CSS 변수(색상/간격 등)
│   ├── components/
│   │   ├── scene/MainScene.vue      # Three.js 캔버스 영역
│   │   ├── ui/StatusBar.vue         # 상태바 UI
│   │   ├── ui/ActionButtons.vue     # 액션 버튼 UI
│   │   ├── ui/Toast.vue             # 토스트 메시지
│   │   └── common/ProgressBar.vue   # 공통 진행바
│   ├── composables/
│   │   ├── useAnimalState.js        # 동물 상태 로직
│   │   ├── useStorage.js            # localStorage 저장/복원
│   │   └── useThreeScene.js         # Three.js 씬 생성/애니메이션
│   └── utils/constants.js           # 상수 정의(게임 수치/메시지 등)
├── README.md
├── LEARNING_PLAN.md
└── package.json
```

초보자 관점에서 중요한 포인트는 다음 3개입니다.

- `App.vue`: 화면과 이벤트의 중심
- `composables`: 비즈니스 로직이 있는 곳
- `components`: 화면 조각(표시 담당)

---

## 4) 동작 흐름(초보자용 사고 순서)

### 4-1. 앱 시작

1. `main.js`에서 Vue 앱 생성
2. `App.vue`가 마운트됨
3. `onMounted`에서 저장 데이터 로드 + 1분 타이머 시작

### 4-2. 버튼 클릭 시

- `ActionButtons.vue`에서 이벤트 발생(`feed`, `play`)
- `App.vue`의 `handleFeed`, `handlePlay`가 처리
- 내부에서 `useAnimalState` 함수 호출로 상태 변경
- `Toast`로 사용자 피드백 표시

### 4-3. 시간 경과 시

- 1분마다 `updateState()` 실행
- 상태가 자동으로 변함
- 변경된 상태를 localStorage에 저장

즉, **입력(버튼/시간)** → **로직(composable)** → **반영(UI)** 순서입니다.

---

## 5) 파일별로 무엇을 보면 좋은가요?

### `src/main.js`
- Vue 엔트리포인트입니다.
- "앱이 어디서 시작하는지"를 이해하려면 가장 먼저 보세요.

### `src/App.vue`
- 전체 화면 조립, 이벤트 핸들러, 쿨다운, 주기 업데이트를 다룹니다.
- 초보자 기준으로 가장 중요한 파일입니다.

### `src/composables/useAnimalState.js`
- 상태 변화 규칙(배고픔 증가, 행복도 감소 등)이 정의된 핵심 로직입니다.
- 밸런싱(게임 수치) 실습에 가장 좋습니다.

### `src/composables/useStorage.js`
- 저장/복원, 오프라인 시간 보정 로직이 있습니다.
- "새로고침해도 유지되는 이유"를 이해할 수 있습니다.

### `src/composables/useThreeScene.js`
- Three.js 씬/카메라/조명/렌더 루프를 설정합니다.
- 현재는 임시 큐브를 돌리고 있고, 추후 동물 모델(GLTF)로 교체 가능한 구조입니다.

---

## 6) 초보자 추천 학습 순서 (7단계)

1. **실행 먼저**: `npm run dev`로 화면 확인
2. **UI 읽기**: `App.vue` 템플릿에서 어떤 컴포넌트를 쓰는지 확인
3. **이벤트 추적**: `@feed`, `@play`가 어디로 연결되는지 따라가기
4. **상태 로직 이해**: `useAnimalState.js` 숫자 규칙 읽기
5. **저장 로직 이해**: `useStorage.js`에서 load/save 흐름 읽기
6. **3D 로직 이해**: `useThreeScene.js`에서 카메라/조명/animate 확인
7. **작은 수정 실습**: 수치 하나를 바꾸고 실제 동작 비교

---

## 7) 바로 해볼 수 있는 실습 과제

### 실습 A: 먹이 효과량 바꾸기
- `useAnimalState.js`의 `feedAnimal()`에서 배고픔 감소량 `30`을 `20`으로 변경
- 게임 난이도가 어떻게 변하는지 확인

### 실습 B: 쿨다운 시간 바꾸기
- `App.vue`에서 feed/play 쿨다운 값을 조정
- 너무 짧거나 길 때 UX가 어떻게 달라지는지 기록

### 실습 C: 상태바 항목 추가
- `StatusBar.vue`에 에너지 수치 표시 확장
- `ProgressBar.vue`를 재사용해 UI 일관성을 유지

### 실습 D: Three.js 배경색 변경
- `useThreeScene.js`의 `scene.background` 색상 변경
- UI 색상과 톤이 맞는지 비교

---

## 8) 자주 헷갈리는 포인트

- `ref`는 값 접근할 때 `.value`가 필요합니다.
- Vue 컴포넌트는 "표시", composable은 "로직"에 더 가깝습니다.
- `setInterval`은 컴포넌트 언마운트 시 반드시 정리(`clearInterval`)해야 합니다.
- Three.js는 렌더 루프(`requestAnimationFrame`)와 정리(`dispose`)가 중요합니다.

---

## 9) 다음 단계(중급으로 가는 길)

- `utils/constants.js`의 상수를 실제 로직에서 일관되게 사용하도록 리팩터링
- GLTFLoader로 실제 동물 모델을 불러오기
- 상태 변화 규칙을 테스트 가능한 순수 함수로 분리
- Pinia 도입으로 전역 상태 아키텍처 학습
- 모바일 터치 제스처 UX 개선

---

## 10) 한 줄 요약

이 프로젝트는 "**Vue 화면 구성 + 상태 로직 분리 + Three.js 렌더링**"을 한 번에 연습하기 좋은 학습용 구조입니다. 먼저 `App.vue`와 `useAnimalState.js`를 이해하면 전체가 빠르게 보이기 시작합니다.
