# 🐾 AnimalHouse

HammyHome에서 영감을 받은 3D 인터랙티브 동물 키우기 웹 애플리케이션

![Vue.js](https://img.shields.io/badge/Vue.js-3.4+-4FC08D?style=flat&logo=vue.js&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r160+-000000?style=flat&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

## ✨ 주요 기능

- 🎨 **3D 동물 뷰어**: Three.js를 활용한 실시간 3D 렌더링
- 🎮 **인터랙티브 게임플레이**: 먹이주기, 놀아주기 등 상호작용
- 📊 **상태 시스템**: 배고픔, 행복도, 건강 관리
- 💾 **데이터 저장**: localStorage를 통한 진행상황 자동 저장
- 📱 **반응형 디자인**: 데스크톱 및 모바일 지원
- ⚡ **빠른 성능**: Vite 기반 최적화

## 🎯 프로젝트 목표

이 프로젝트는 Vue.js와 Three.js를 학습하며 실제 3D 웹 애플리케이션을 구축하는 것을 목표로 합니다.

## 📚 문서

- [📖 학습 계획서](./LEARNING_PLAN.md) - 10주 학습 로드맵
- [📋 기능 명세서](./FEATURES.md) - 상세 기능 설명
- [🗓️ 개발 계획서](./DEVELOPMENT_PLAN.md) - 개발 일정 및 마일스톤
- [📦 라이브러리 목록](./LIBRARIES.md) - 사용 기술 스택

## 🚀 빠른 시작

### 필수 요구사항

- Node.js 18.0 이상
- npm 9.0 이상

### 설치

```bash
# 저장소 클론
git clone https://github.com/Chenjae-kr/AnimalHouse.git
cd AnimalHouse

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어보세요!

## 🛠️ 사용 가능한 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 코드 린팅
npm run lint

# 코드 포맷팅
npm run format

# GitHub Pages 배포
npm run deploy
```

## 📂 프로젝트 구조

```
AnimalHouse/
├── public/              # 정적 파일
│   ├── models/         # 3D 모델 (.glb)
│   ├── textures/       # 텍스처 이미지
│   └── sounds/         # 효과음
├── src/
│   ├── assets/         # 컴파일되는 에셋
│   ├── components/     # Vue 컴포넌트
│   │   ├── scene/     # 3D 씬 관련
│   │   ├── ui/        # UI 컴포넌트
│   │   └── common/    # 공통 컴포넌트
│   ├── composables/    # Composition API
│   ├── utils/          # 유틸리티
│   ├── App.vue         # 루트 컴포넌트
│   └── main.js         # 진입점
├── LEARNING_PLAN.md    # 학습 계획서
├── FEATURES.md         # 기능 명세서
├── DEVELOPMENT_PLAN.md # 개발 계획서
└── LIBRARIES.md        # 라이브러리 목록
```

## 🎮 사용법

1. **동물 관찰**: 마우스로 드래그하여 시점 변경, 휠로 줌
2. **먹이주기**: 🍖 버튼 클릭 (배고픔 감소)
3. **놀아주기**: 🎾 버튼 클릭 (행복도 증가)
4. **상태 확인**: 화면 좌측 상단에서 배고픔/행복도/건강 확인

## 🧰 기술 스택

### 핵심 기술
- **Vue.js 3.4+**: 프론트엔드 프레임워크
- **Three.js r160+**: 3D 그래픽스 라이브러리
- **Vite 5.0+**: 빌드 도구

### 개발 도구
- ESLint: 코드 품질 관리
- Prettier: 코드 포맷팅
- gh-pages: GitHub Pages 배포

### 선택적 라이브러리
- @vueuse/core: Vue Composition 유틸리티
- Stats.js: 성능 모니터링

## 🎨 디자인 시스템

- **색상 팔레트**: 부드러운 핑크/코랄 톤
- **타이포그래피**: 시스템 폰트 스택
- **컴포넌트**: 재사용 가능한 모듈식 설계
- **애니메이션**: 부드러운 트랜지션

## 📈 개발 진행상황

- [x] Week 1-2: 프로젝트 초기 설정 ✅
- [ ] Week 3-4: UI 컴포넌트 개발
- [ ] Week 5-6: 핵심 기능 구현
- [ ] Week 7-8: 애니메이션 및 고급 기능
- [ ] Week 9-10: 추가 기능 및 배포

## 🤝 기여하기

이 프로젝트는 개인 학습 프로젝트입니다. 하지만 제안이나 피드백은 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👤 개발자

**Chenjae**

- GitHub: [@Chenjae-kr](https://github.com/Chenjae-kr)
- Portfolio: [GitHub Pages](https://chenjae-kr.github.io)

## 🙏 감사의 말

- [HammyHome](https://hammyhome.com) - 영감을 준 프로젝트
- [Three.js](https://threejs.org) - 훌륭한 3D 라이브러리
- [Vue.js](https://vuejs.org) - 강력한 프론트엔드 프레임워크

## 📮 문의

프로젝트에 대한 질문이나 제안이 있으시면 이슈를 생성해주세요!

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
