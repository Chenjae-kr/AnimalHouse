# 라이브러리 및 도구 목록

## 📦 필수 라이브러리

### 1. Vue.js
**버전**: ^3.4.0  
**용도**: 프론트엔드 프레임워크  
**설치**:
```bash
npm install vue@latest
```

**주요 기능**:
- Composition API로 상태 관리
- 반응형 데이터 바인딩
- 컴포넌트 기반 아키텍처

**공식 문서**: https://vuejs.org/

---

### 2. Three.js
**버전**: ^0.160.0  
**용도**: 3D 그래픽스 렌더링  
**설치**:
```bash
npm install three
```

**주요 기능**:
- WebGL 기반 3D 렌더링
- 3D 모델 로딩 (GLTF/GLB)
- 조명, 카메라, 애니메이션 시스템

**공식 문서**: https://threejs.org/docs/

**주요 모듈**:
- `THREE.Scene`: 3D 씬
- `THREE.PerspectiveCamera`: 원근 카메라
- `THREE.WebGLRenderer`: WebGL 렌더러
- `THREE.GLTFLoader`: GLTF 모델 로더
- `THREE.AnimationMixer`: 애니메이션 믹서
- `OrbitControls`: 카메라 컨트롤

---

### 3. Vite
**버전**: ^5.0.0  
**용도**: 빌드 도구 및 개발 서버  
**설치**:
```bash
npm create vite@latest
```

**주요 기능**:
- 빠른 개발 서버 (HMR)
- 최적화된 프로덕션 빌드
- Vue 플러그인 지원

**공식 문서**: https://vitejs.dev/

**설정 파일**: `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/AnimalHouse/', // GitHub Pages용
  server: {
    port: 5173
  }
})
```

---

## 🔧 개발 도구

### 4. @vitejs/plugin-vue
**버전**: ^5.0.0  
**용도**: Vite에서 Vue 파일 처리  
**설치**:
```bash
npm install -D @vitejs/plugin-vue
```

**기능**: `.vue` 파일을 JavaScript로 컴파일

---

### 5. ESLint
**버전**: ^8.56.0  
**용도**: 코드 품질 관리 (선택 사항이지만 강력 권장)  
**설치**:
```bash
npm install -D eslint eslint-plugin-vue
```

**설정 파일**: `.eslintrc.js`
```javascript
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
```

---

### 6. Prettier
**버전**: ^3.1.0  
**용도**: 코드 포맷팅  
**설치**:
```bash
npm install -D prettier
```

**설정 파일**: `.prettierrc`
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## 🎨 선택적 라이브러리

### 7. Stats.js
**용도**: FPS 및 성능 모니터링  
**설치**:
```bash
npm install stats.js
```

**사용 예시**:
```javascript
import Stats from 'stats.js'

const stats = new Stats()
document.body.appendChild(stats.dom)

function animate() {
  stats.begin()
  // 렌더링 코드
  stats.end()
  requestAnimationFrame(animate)
}
```

---

### 8. GSAP (GreenSock Animation Platform)
**버전**: ^3.12.0  
**용도**: 고급 애니메이션 (선택 사항)  
**설치**:
```bash
npm install gsap
```

**사용 예시**:
```javascript
import gsap from 'gsap'

gsap.to(camera.position, {
  duration: 1,
  x: 5,
  y: 2,
  z: 5,
  ease: 'power2.inOut'
})
```

**용도**: 카메라 애니메이션, UI 트랜지션

---

### 9. Pinia
**버전**: ^2.1.0  
**용도**: 상태 관리 라이브러리 (복잡한 상태 관리 시 추가)  
**설치**:
```bash
npm install pinia
```

**사용 시기**: 
- 여러 컴포넌트 간 복잡한 상태 공유
- 전역 상태 관리 필요 시

**현재 프로젝트**: Composition API로 충분하므로 나중에 필요 시 추가

---

### 10. VueUse
**버전**: ^10.7.0  
**용도**: Vue Composition 유틸리티 모음  
**설치**:
```bash
npm install @vueuse/core
```

**유용한 함수**:
- `useLocalStorage`: localStorage 관리
- `useWindowSize`: 창 크기 반응형
- `useRafFn`: requestAnimationFrame 래퍼

**사용 예시**:
```javascript
import { useLocalStorage } from '@vueuse/core'

const animalState = useLocalStorage('animal-state', {
  hunger: 50,
  happiness: 50
})
```

---

## 🎵 사운드 관련

### 11. Howler.js
**버전**: ^2.2.0  
**용도**: 웹 오디오 라이브러리 (선택 사항)  
**설치**:
```bash
npm install howler
```

**사용 예시**:
```javascript
import { Howl } from 'howler'

const eatSound = new Howl({
  src: ['/sounds/eat.mp3'],
  volume: 0.5
})

eatSound.play()
```

**대안**: Web Audio API 직접 사용

---

## 📦 3D 모델 최적화 도구

### 12. gltf-pipeline (CLI 도구)
**용도**: GLTF 모델 최적화  
**설치** (전역):
```bash
npm install -g gltf-pipeline
```

**사용법**:
```bash
gltf-pipeline -i model.gltf -o model-optimized.glb -d
```

**기능**:
- Draco 압축
- 텍스처 최적화
- GLB 변환

---

### 13. three-stdlib
**버전**: ^2.28.0  
**용도**: Three.js 확장 라이브러리  
**설치**:
```bash
npm install three-stdlib
```

**포함 내용**:
- GLTFLoader
- OrbitControls
- DRACOLoader
- 기타 유틸리티

**사용 예시**:
```javascript
import { GLTFLoader } from 'three-stdlib'
```

**참고**: Three.js r160+에서는 `three/addons`로 직접 import 가능

---

## 🚀 배포 도구

### 14. gh-pages
**버전**: ^6.1.0  
**용도**: GitHub Pages 자동 배포  
**설치**:
```bash
npm install -D gh-pages
```

**package.json 스크립트**:
```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

**사용법**:
```bash
npm run deploy
```

---

## 📊 완전한 package.json

```json
{
  "name": "animal-house",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist",
    "lint": "eslint src --ext .vue,.js",
    "format": "prettier --write \"src/**/*.{vue,js,css}\""
  },
  "dependencies": {
    "vue": "^3.4.0",
    "three": "^0.160.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0",
    "eslint": "^8.56.0",
    "eslint-plugin-vue": "^9.19.0",
    "prettier": "^3.1.0",
    "gh-pages": "^6.1.0"
  },
  "optionalDependencies": {
    "@vueuse/core": "^10.7.0",
    "gsap": "^3.12.0",
    "stats.js": "^0.17.0",
    "howler": "^2.2.0",
    "three-stdlib": "^2.28.0"
  }
}
```

---

## 🎯 설치 순서 (초기 설정)

### 1단계: 프로젝트 생성
```bash
# Vite로 Vue 프로젝트 생성
npm create vite@latest animal-house -- --template vue

# 프로젝트 디렉토리 이동
cd animal-house

# 기본 의존성 설치
npm install
```

### 2단계: Three.js 추가
```bash
npm install three
```

### 3단계: 개발 도구 추가 (선택 사항)
```bash
npm install -D eslint eslint-plugin-vue prettier gh-pages
```

### 4단계: 선택적 라이브러리 (필요 시)
```bash
npm install @vueuse/core stats.js
```

### 5단계: 개발 서버 실행
```bash
npm run dev
```

---

## 🔍 라이브러리 선택 가이드

### 필수 (반드시 설치)
- ✅ Vue.js
- ✅ Three.js
- ✅ Vite
- ✅ @vitejs/plugin-vue

### 강력 권장 (개발 편의성)
- ⭐ ESLint (코드 품질)
- ⭐ Prettier (코드 포맷팅)
- ⭐ @vueuse/core (유틸리티)

### 선택 사항 (필요 시 추가)
- 🔘 Stats.js (성능 디버깅)
- 🔘 GSAP (고급 애니메이션)
- 🔘 Howler.js (사운드)
- 🔘 Pinia (복잡한 상태 관리)

### 배포 시
- 🚀 gh-pages (GitHub Pages 배포)

---

## 📚 학습 리소스

### Three.js 관련
- **Three.js Fundamentals**: https://threejs.org/manual/
- **Three.js Examples**: https://threejs.org/examples/
- **Discover Three.js**: https://discoverthreejs.com/

### Vue.js 관련
- **Vue 3 Guide**: https://vuejs.org/guide/
- **Vue School**: https://vueschool.io/ (유료)
- **VueUse Docs**: https://vueuse.org/

### 3D 모델 리소스
- **Sketchfab**: https://sketchfab.com/
- **Poly Pizza**: https://poly.pizza/
- **Mixamo**: https://www.mixamo.com/ (애니메이션)
- **Kenney**: https://kenney.nl/assets (무료 3D)

---

## 🛠️ VSCode 확장 프로그램 권장

### 필수
1. **Vetur** 또는 **Volar**: Vue.js 지원
2. **ESLint**: 린팅
3. **Prettier**: 포맷팅

### 유용한 확장
4. **Error Lens**: 에러 하이라이트
5. **Auto Rename Tag**: HTML 태그 자동 수정
6. **GitLens**: Git 기능 강화
7. **Path Intellisense**: 경로 자동완성
8. **Material Icon Theme**: 파일 아이콘

### VSCode 설정
`.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

---

## 🔄 의존성 업데이트

### 정기 업데이트 (주의 사항)
```bash
# 모든 패키지 최신 버전 확인
npm outdated

# 안전한 업데이트 (마이너 버전)
npm update

# 메이저 업데이트 (주의 필요)
npm install three@latest
```

### 버전 고정 (안정성)
- **개발 중**: 버전 고정 권장 (`package-lock.json` 커밋)
- **배포 후**: 정기적 보안 업데이트

---

## ⚠️ 주의사항

### Three.js 버전
- r160 이상 사용 (최신 기능)
- r150 미만은 API 변경 사항 많음
- 예제 코드 버전 확인 필수

### Vite vs Webpack
- Vite가 더 빠르고 간단 (권장)
- Webpack은 복잡한 설정 가능

### localStorage 제한
- 용량: 브라우저당 5-10MB
- 큰 데이터는 IndexedDB 고려

---

## 💡 트러블슈팅

### 1. Three.js import 에러
```javascript
// ❌ 잘못된 방법
import { OrbitControls } from 'three'

// ✅ 올바른 방법 (r160+)
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// ✅ 또는 (three-stdlib 사용)
import { OrbitControls } from 'three-stdlib'
```

### 2. Vite 빌드 에러
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

### 3. GLTF 모델 로딩 실패
- 파일 경로 확인 (`/public` 폴더)
- 브라우저 콘솔에서 네트워크 탭 확인
- CORS 문제 확인 (dev 서버는 자동 해결)

---

## 📝 체크리스트

### 프로젝트 시작 전
- [ ] Node.js 18+ 설치 확인
- [ ] npm 또는 yarn 설치 확인
- [ ] VSCode 설치
- [ ] Git 설정 완료

### 초기 설정
- [ ] Vite 프로젝트 생성
- [ ] package.json 확인
- [ ] 필수 라이브러리 설치
- [ ] 개발 서버 정상 작동 확인
- [ ] ESLint/Prettier 설정 (선택)

### 준비 완료
- [ ] 모든 의존성 설치 완료
- [ ] 개발 환경 테스트
- [ ] GitHub 저장소 연동
- [ ] 첫 커밋

---

**이제 개발을 시작할 준비가 되었습니다! 🎉**
