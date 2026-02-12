# 🚀 빠른 시작 가이드

AnimalHouse 프로젝트를 시작하기 위한 단계별 가이드입니다.

## 📋 사전 준비

### 1. Node.js 설치
```bash
# 버전 확인 (18.0 이상 필요)
node --version
npm --version
```

Node.js가 설치되어 있지 않다면:
- [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 다운로드
- Windows: 설치 프로그램 실행
- macOS: `brew install node` 또는 설치 프로그램
- Linux: 패키지 매니저 사용

### 2. Git 설치 확인
```bash
git --version
```

### 3. VSCode 설치 (권장)
- [Visual Studio Code](https://code.visualstudio.com/) 다운로드

## 🎯 Step 1: 프로젝트 클론

```bash
# GitHub에서 저장소 클론
git clone https://github.com/Chenjae-kr/AnimalHouse.git

# 프로젝트 디렉토리로 이동
cd AnimalHouse
```

## 📦 Step 2: 의존성 설치

```bash
# npm을 사용한 설치
npm install

# 또는 yarn 사용
yarn install
```

설치에는 2-3분 정도 소요됩니다.

## 🏃 Step 3: 개발 서버 실행

```bash
npm run dev
```

성공하면 다음과 같은 메시지가 표시됩니다:
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

브라우저에서 `http://localhost:5173`을 열어보세요!

## 🎨 Step 4: 프로젝트 구조 확인

```
AnimalHouse/
├── src/
│   ├── components/      # Vue 컴포넌트
│   ├── composables/     # 재사용 가능한 로직
│   ├── utils/           # 유틸리티 함수
│   └── App.vue          # 루트 컴포넌트
├── public/              # 정적 파일
└── package.json         # 프로젝트 설정
```

## ✏️ Step 5: 첫 번째 수정해보기

1. `src/App.vue` 파일 열기
2. 코드 수정
3. 저장 (Ctrl+S / Cmd+S)
4. 브라우저에서 자동으로 변경사항 확인 (HMR)

## 🛠️ 유용한 명령어

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
```

## 🐛 문제 해결

### 포트가 이미 사용 중인 경우
```bash
# 다른 포트 사용
npm run dev -- --port 3000
```

### node_modules 문제
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

### ESLint 에러
```bash
# ESLint 자동 수정
npm run lint -- --fix
```

## 📚 다음 단계

1. [학습 계획서](./LEARNING_PLAN.md) 읽기
2. [기능 명세서](./FEATURES.md)로 기능 이해하기
3. Vue.js 기초 학습
4. Three.js 튜토리얼 따라하기

## 💡 VSCode 확장 프로그램 설치

프로젝트를 VSCode로 열면 자동으로 추천 확장 프로그램 설치 알림이 표시됩니다:

- **Volar**: Vue.js 지원
- **ESLint**: 코드 품질
- **Prettier**: 코드 포맷팅
- **Error Lens**: 에러 강조
- **GitLens**: Git 기능

"Install All" 버튼을 클릭하세요!

## 🎓 학습 자료

### Vue.js
- [Vue.js 공식 문서](https://vuejs.org/guide/)
- [Vue Mastery](https://www.vuemastery.com/)

### Three.js
- [Three.js 공식 문서](https://threejs.org/docs/)
- [Three.js Journey](https://threejs-journey.com/)

### JavaScript
- [MDN Web Docs](https://developer.mozilla.org/ko/)
- [JavaScript.info](https://javascript.info/)

## ✅ 체크리스트

설정이 모두 완료되었는지 확인하세요:

- [ ] Node.js 18+ 설치 확인
- [ ] Git 설치 확인
- [ ] 프로젝트 클론 완료
- [ ] npm install 성공
- [ ] 개발 서버 실행 확인
- [ ] 브라우저에서 페이지 확인
- [ ] VSCode 설정 완료
- [ ] 확장 프로그램 설치

모든 항목을 체크했다면 준비 완료입니다! 🎉

## 🆘 도움이 필요하신가요?

- GitHub Issues에 질문 올리기
- 학습 계획서의 "도움 받는 방법" 섹션 참고
- Stack Overflow 검색

---

**Happy Coding! 즐거운 개발 되세요! 🚀**
