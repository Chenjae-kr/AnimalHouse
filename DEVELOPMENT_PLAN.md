# 3D 동물 키우기 웹사이트 개발 계획서

## 📋 프로젝트 개요

### 프로젝트 정보
- **프로젝트명**: AnimalHouse
- **개발 기간**: 10주 (약 2.5개월)
- **개발 방식**: 단독 개발 (학습 병행)
- **배포 목표**: GitHub Pages
- **저장소**: https://github.com/Chenjae-kr/AnimalHouse

### 기술 스택
- **프론트엔드 프레임워크**: Vue.js 3.4+
- **3D 렌더링**: Three.js r160+
- **빌드 도구**: Vite 5.0+
- **언어**: JavaScript (향후 TypeScript 고려)
- **스타일링**: CSS3 (Scoped CSS)
- **상태 관리**: Vue Composition API (Pinia는 필요 시 추가)

---

## 🗓️ 개발 일정

### Week 1-2: 환경 설정 및 기초 학습
**목표**: 개발 환경 구축 및 기본 지식 습득

#### Week 1: 학습 및 환경 구축
- **Day 1-2**: 개발 환경 설정
  - [ ] Node.js 18+ 설치
  - [ ] VSCode 설정 및 확장 프로그램 설치
  - [ ] Git 설정 및 GitHub 저장소 생성
  - [ ] 프로젝트 디렉토리 구조 계획

- **Day 3-4**: Vue.js 기초 학습
  - [ ] Vue 3 공식 문서 읽기
  - [ ] Composition API 개념 이해
  - [ ] 간단한 카운터 앱 실습
  - [ ] 컴포넌트 통신 (props, emit) 이해

- **Day 5-7**: Three.js 기초 학습
  - [ ] Three.js 기본 개념 학습
  - [ ] Scene, Camera, Renderer 이해
  - [ ] 회전하는 큐브 만들기
  - [ ] OrbitControls 사용법 익히기

#### Week 2: 프로젝트 초기 설정
- **Day 1-2**: 프로젝트 생성 및 구조 설정
  - [ ] Vite로 Vue 프로젝트 생성
  - [ ] 필요한 라이브러리 설치
  - [ ] 폴더 구조 생성
  - [ ] ESLint/Prettier 설정
  - [ ] GitHub에 첫 커밋

- **Day 3-4**: 기본 3D 씬 구성
  - [ ] Three.js를 Vue 컴포넌트에 통합
  - [ ] 기본 씬, 카메라, 렌더러 설정
  - [ ] OrbitControls 적용
  - [ ] 반응형 캔버스 구현

- **Day 5-7**: 첫 3D 모델 로딩
  - [ ] GLTFLoader 설정
  - [ ] 무료 3D 동물 모델 다운로드
  - [ ] 모델 로딩 및 표시
  - [ ] 조명 설정
  - [ ] 첫 마일스톤 달성 🎉

**산출물**:
- 작동하는 프로젝트 기본 구조
- 3D 씬에 동물 모델 표시
- README.md 작성

---

### Week 3-4: UI 컴포넌트 개발
**목표**: 사용자 인터페이스 구축

#### Week 3: 상태 표시 UI
- **Day 1-2**: 컴포넌트 구조 설계
  - [ ] 컴포넌트 계층 구조 설계
  - [ ] 데이터 모델 정의
  - [ ] 컴포넌트 파일 생성

- **Day 3-5**: StatusBar 컴포넌트
  - [ ] 진행 바 컴포넌트 구현
  - [ ] 배고픔, 행복도, 건강 게이지
  - [ ] 색상 코드 시스템 (녹색/노란색/빨간색)
  - [ ] 반응형 레이아웃

- **Day 6-7**: ActionButtons 컴포넌트
  - [ ] 버튼 그리드 레이아웃
  - [ ] 먹이주기, 놀아주기 버튼
  - [ ] 호버 효과 및 스타일링
  - [ ] 아이콘 추가 (이모지 또는 SVG)

#### Week 4: 추가 UI 및 스타일링
- **Day 1-3**: 알림 시스템
  - [ ] Toast 메시지 컴포넌트
  - [ ] 메시지 큐 관리
  - [ ] 페이드 인/아웃 애니메이션
  - [ ] 다양한 메시지 타입 (성공/경고/오류)

- **Day 4-7**: 전체 스타일링
  - [ ] 전역 CSS 변수 설정
  - [ ] 컴포넌트별 스타일 완성
  - [ ] 모바일 반응형 디자인
  - [ ] 다크/라이트 테마 기본 설정
  - [ ] UI 통합 테스트

**산출물**:
- 완성된 UI 컴포넌트 세트
- 스타일 가이드 문서
- 반응형 레이아웃

---

### Week 5-6: 핵심 기능 구현
**목표**: 동물 키우기 시스템 구현

#### Week 5: 상태 관리 시스템
- **Day 1-2**: 데이터 모델
  - [ ] 동물 상태 객체 정의
  - [ ] Composition API로 상태 관리
  - [ ] 상태 변화 로직 구현

- **Day 3-4**: 시간 기반 시스템
  - [ ] setInterval로 시간 경과 처리
  - [ ] 배고픔 증가 로직
  - [ ] 행복도 감소 로직
  - [ ] 건강 연동 시스템

- **Day 5-7**: 데이터 저장
  - [ ] localStorage API 통합
  - [ ] 데이터 저장 함수
  - [ ] 데이터 로딩 함수
  - [ ] 마지막 업데이트 시간 기반 계산
  - [ ] 예외 처리 (저장 실패 시)

#### Week 6: 인터랙션 구현
- **Day 1-3**: 액션 기능
  - [ ] 먹이주기 기능 구현
  - [ ] 놀아주기 기능 구현
  - [ ] 쿨다운 시스템
  - [ ] 버튼 비활성화 로직

- **Day 4-5**: Raycasting 클릭 감지
  - [ ] Three.js Raycaster 설정
  - [ ] 마우스 위치를 3D 좌표로 변환
  - [ ] 동물 클릭 감지
  - [ ] 클릭 시 반응 구현

- **Day 6-7**: 피드백 시스템
  - [ ] 토스트 메시지 통합
  - [ ] 파티클 이펙트 기본 구현
  - [ ] 효과음 준비 (선택 사항)
  - [ ] 전체 인터랙션 테스트

**산출물**:
- 작동하는 동물 키우기 시스템
- 데이터 저장/로딩 기능
- 사용자 피드백 시스템

---

### Week 7-8: 애니메이션 및 고급 기능
**목표**: 생동감 있는 3D 경험 구현

#### Week 7: 애니메이션 시스템
- **Day 1-2**: 애니메이션 준비
  - [ ] 애니메이션 포함 3D 모델 찾기
  - [ ] AnimationMixer 설정
  - [ ] 애니메이션 목록 확인

- **Day 3-5**: 애니메이션 구현
  - [ ] Idle 애니메이션 기본 재생
  - [ ] Eat 애니메이션 (먹이주기 시)
  - [ ] Play 애니메이션 (놀아주기 시)
  - [ ] 애니메이션 크로스페이드

- **Day 6-7**: 랜덤 행동
  - [ ] 랜덤 타이머 설정
  - [ ] 랜덤하게 Walk 애니메이션
  - [ ] 자연스러운 애니메이션 전환
  - [ ] 성능 최적화

#### Week 8: 환경 및 효과
- **Day 1-3**: 3D 환경 개선
  - [ ] 바닥 텍스처 적용
  - [ ] 하늘 배경 또는 그라데이션
  - [ ] 조명 최적화
  - [ ] 그림자 효과 (선택 사항)

- **Day 4-5**: 파티클 시스템
  - [ ] Points를 사용한 파티클
  - [ ] 하트 파티클 (놀아주기)
  - [ ] 반짝임 파티클 (클릭)
  - [ ] 애니메이션 및 라이프사이클

- **Day 6-7**: 통합 및 테스트
  - [ ] 모든 기능 통합
  - [ ] 버그 수정
  - [ ] 성능 측정 (Stats.js)
  - [ ] MVP 완성 🎉

**산출물**:
- 애니메이션이 적용된 동물
- 향상된 3D 환경
- 파티클 효과
- MVP (최소 기능 제품) 완성

---

### Week 9-10: 추가 기능 및 배포
**목표**: 폴리싱 및 배포

#### Week 9: 추가 기능
- **Day 1-3**: 동물 선택 시스템
  - [ ] 여러 동물 모델 준비
  - [ ] 동물 선택 UI
  - [ ] 동물별 데이터 분리 저장
  - [ ] 동물 전환 기능

- **Day 4-5**: 아이템 시스템 (선택 사항)
  - [ ] 아이템 데이터 구조
  - [ ] 인벤토리 UI
  - [ ] 아이템 사용 기능
  - [ ] 아이템 획득 메커니즘

- **Day 6-7**: 설정 메뉴
  - [ ] 설정 모달 컴포넌트
  - [ ] 효과음 on/off
  - [ ] 데이터 초기화 기능
  - [ ] 정보 페이지 (크레딧)

#### Week 10: 최적화 및 배포
- **Day 1-2**: 성능 최적화
  - [ ] 텍스처 압축
  - [ ] 코드 스플리팅
  - [ ] 번들 크기 최적화
  - [ ] 모바일 성능 테스트

- **Day 3-4**: 최종 테스트
  - [ ] 크로스 브라우저 테스트
  - [ ] 모바일 기기 테스트
  - [ ] 버그 수정
  - [ ] 사용성 테스트

- **Day 5-6**: 문서화 및 배포
  - [ ] README.md 완성
  - [ ] 사용 가이드 작성
  - [ ] 스크린샷 추가
  - [ ] GitHub Pages 배포 설정
  - [ ] 배포 완료 🚀

- **Day 7**: 마무리
  - [ ] 최종 점검
  - [ ] 포트폴리오에 추가
  - [ ] 블로그 포스트 작성 (선택 사항)
  - [ ] 피드백 수집

**산출물**:
- 완성된 웹 애플리케이션
- 배포된 사이트
- 완전한 문서
- 포트폴리오 자료

---

## 📂 프로젝트 구조

```
AnimalHouse/
├── public/                    # 정적 파일
│   ├── models/               # 3D 모델 파일 (.glb, .gltf)
│   │   ├── dog.glb
│   │   ├── cat.glb
│   │   └── rabbit.glb
│   ├── textures/             # 텍스처 이미지
│   │   ├── grass.jpg
│   │   └── sky.jpg
│   └── sounds/               # 효과음 파일
│       ├── eat.mp3
│       └── play.mp3
│
├── src/
│   ├── assets/               # 컴파일되는 에셋
│   │   ├── images/          # UI 이미지
│   │   └── styles/          # 전역 스타일
│   │       ├── variables.css
│   │       └── global.css
│   │
│   ├── components/           # Vue 컴포넌트
│   │   ├── scene/           # 3D 씬 관련
│   │   │   ├── MainScene.vue       # 메인 3D 씬
│   │   │   ├── AnimalViewer.vue    # 동물 뷰어
│   │   │   └── Environment.vue     # 환경 설정
│   │   │
│   │   ├── ui/              # UI 컴포넌트
│   │   │   ├── StatusBar.vue       # 상태 바
│   │   │   ├── ActionButtons.vue   # 액션 버튼
│   │   │   ├── Toast.vue          # 토스트 메시지
│   │   │   ├── SettingsModal.vue  # 설정 모달
│   │   │   └── ItemPanel.vue      # 아이템 패널
│   │   │
│   │   └── common/          # 공통 컴포넌트
│   │       ├── Button.vue
│   │       ├── ProgressBar.vue
│   │       └── Modal.vue
│   │
│   ├── composables/          # Composition API 함수
│   │   ├── useAnimalState.js      # 동물 상태 관리
│   │   ├── useThreeScene.js       # Three.js 씬 관리
│   │   ├── useAnimation.js        # 애니메이션 관리
│   │   ├── useStorage.js          # localStorage 관리
│   │   └── useSound.js            # 사운드 관리
│   │
│   ├── utils/                # 유틸리티 함수
│   │   ├── constants.js           # 상수 정의
│   │   ├── helpers.js             # 헬퍼 함수
│   │   └── validators.js          # 유효성 검사
│   │
│   ├── App.vue               # 루트 컴포넌트
│   ├── main.js               # 앱 진입점
│   └── style.css             # 메인 스타일
│
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
├── LEARNING_PLAN.md          # 학습 계획서
├── FEATURES.md               # 기능 명세서
├── DEVELOPMENT_PLAN.md       # 개발 계획서 (이 문서)
└── LIBRARIES.md              # 라이브러리 목록
```

---

## 🛠️ 개발 환경 요구사항

### 필수 소프트웨어
- **Node.js**: v18.0.0 이상 (LTS 버전 권장)
- **npm**: v9.0.0 이상 (또는 yarn, pnpm)
- **Git**: v2.30.0 이상

### 권장 개발 도구
- **에디터**: Visual Studio Code
- **브라우저**: Chrome (Three.js 디버깅에 최적)
- **확장 프로그램**:
  - Vetur 또는 Volar (Vue.js)
  - ESLint
  - Prettier
  - Error Lens
  - GitLens

### 개발 서버
- Vite 개발 서버 (자동 제공)
- Hot Module Replacement (HMR) 지원
- 로컬 개발 주소: `http://localhost:5173`

---

## 📦 의존성 관리

### 주요 의존성 (dependencies)
```json
{
  "vue": "^3.4.0",
  "three": "^0.160.0"
}
```

### 개발 의존성 (devDependencies)
```json
{
  "@vitejs/plugin-vue": "^5.0.0",
  "vite": "^5.0.0",
  "eslint": "^8.56.0",
  "prettier": "^3.1.0"
}
```

자세한 내용은 `LIBRARIES.md` 참조

---

## 🔄 개발 워크플로우

### 1. 일일 개발 루틴
```bash
# 1. 최신 코드 가져오기
git pull origin main

# 2. 개발 서버 시작
npm run dev

# 3. 코드 작성 및 테스트

# 4. 변경사항 커밋
git add .
git commit -m "feat: 기능 설명"
git push origin main
```

### 2. 브랜치 전략
- **main**: 안정된 코드 (배포 가능)
- **develop**: 개발 중인 코드
- **feature/기능명**: 새 기능 개발
- **fix/버그명**: 버그 수정

### 3. 커밋 메시지 컨벤션
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 업무 수정
```

---

## 🧪 테스트 전략

### 수동 테스트
- **기능 테스트**: 각 기능별 체크리스트
- **브라우저 테스트**: Chrome, Firefox, Safari, Edge
- **기기 테스트**: 데스크톱, 태블릿, 모바일
- **성능 테스트**: FPS 측정, 메모리 사용량

### 테스트 도구
- **Chrome DevTools**: 디버깅 및 성능 분석
- **Vue DevTools**: Vue 컴포넌트 검사
- **Stats.js**: FPS 및 렌더링 성능 모니터링

### 체크리스트
각 마일스톤마다 다음 항목 확인:
- [ ] 모든 기능 정상 작동
- [ ] 에러 없음 (콘솔 확인)
- [ ] 모바일에서 정상 작동
- [ ] 데이터 저장/로딩 정상
- [ ] 성능 기준 충족

---

## 🚀 배포 전략

### GitHub Pages 배포
1. **Vite 설정**:
   ```javascript
   // vite.config.js
   export default {
     base: '/AnimalHouse/',
   }
   ```

2. **빌드 명령어**:
   ```bash
   npm run build
   ```

3. **배포 스크립트**: `package.json`에 추가
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **자동 배포**: GitHub Actions (선택 사항)

### 배포 체크리스트
- [ ] 모든 경로 상대 경로로 변경
- [ ] 프로덕션 빌드 테스트
- [ ] 이미지 및 모델 파일 최적화
- [ ] 번들 크기 확인 (<5MB)
- [ ] SEO 메타 태그 추가
- [ ] favicon 추가
- [ ] README에 라이브 데모 링크 추가

---

## 📊 진행 상황 추적

### 마일스톤
- [ ] **M1**: 개발 환경 구축 완료 (Week 1)
- [ ] **M2**: 첫 3D 모델 표시 (Week 2)
- [ ] **M3**: UI 컴포넌트 완성 (Week 4)
- [ ] **M4**: 핵심 기능 구현 (Week 6)
- [ ] **M5**: MVP 완성 (Week 8)
- [ ] **M6**: 배포 완료 (Week 10)

### 주간 리뷰
매주 일요일:
- 이번 주 완료한 작업 정리
- 다음 주 목표 설정
- 학습 내용 블로그에 정리 (선택 사항)
- GitHub 커밋 히스토리 확인

---

## 🐛 이슈 관리

### 발생 가능한 이슈
1. **Three.js 통합 문제**
   - 해결: 공식 문서 및 예제 참고
   - 커뮤니티: Three.js Discourse

2. **성능 문제**
   - 해결: 모델 최적화, LOD 시스템
   - 도구: Stats.js로 병목 지점 파악

3. **모바일 터치 이슈**
   - 해결: 터치 이벤트 핸들링 최적화
   - 테스트: 실제 기기에서 확인

4. **데이터 저장 실패**
   - 해결: 예외 처리 강화
   - 대안: 세션 저장소 사용

### 이슈 추적
- GitHub Issues 활용
- 버그 재현 방법 상세히 기록
- 스크린샷 및 에러 로그 첨부

---

## 📚 학습 리소스

### 필수 문서
- [Vue.js 공식 가이드](https://vuejs.org/guide/)
- [Three.js 공식 문서](https://threejs.org/docs/)
- [Vite 공식 문서](https://vitejs.dev/guide/)

### 추천 튜토리얼
- Vue Mastery (Vue.js)
- Three.js Journey (Three.js)
- Net Ninja YouTube (Vue 3)

### 커뮤니티
- Vue.js Discord
- Three.js Discourse
- Stack Overflow

---

## 🎯 성공 기준

### 기술적 성공
- [ ] 모든 MVP 기능 구현
- [ ] 60fps 이상 유지 (데스크톱)
- [ ] 3초 이내 초기 로딩
- [ ] 크로스 브라우저 호환
- [ ] 모바일 최적화

### 학습 성공
- [ ] Vue.js Composition API 이해
- [ ] Three.js 기본 개념 숙지
- [ ] 컴포넌트 기반 설계 능력
- [ ] 3D 그래픽스 기초 지식
- [ ] 포트폴리오 추가

### 개인적 성공
- [ ] 완성된 프로젝트 배포
- [ ] 학습 과정 블로그 기록
- [ ] GitHub 활동 이력
- [ ] 자신감 향상

---

## 💡 추가 고려사항

### 접근성 (Accessibility)
- 키보드 네비게이션 지원
- ARIA 레이블 추가
- 색상 대비 준수

### SEO
- 메타 태그 최적화
- Open Graph 태그
- 구조화된 데이터

### 분석
- Google Analytics (선택 사항)
- 사용자 행동 추적

---

## 📝 변경 이력

### v1.0 (2026-02-12)
- 초기 개발 계획서 작성
- 10주 일정 수립
- 마일스톤 정의

---

**"작은 단계들을 꾸준히 밟아 나가면, 어느새 큰 산을 오르게 됩니다."**

**행운을 빕니다! 🚀**
