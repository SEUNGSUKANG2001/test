# UX & Accessibility Violation Testbed

이 프로젝트는 다양한 UX 원칙과 접근성(Accessibility) 위반 사례를 학습하고 테스트하기 위한 샌드박스 웹 어플리케이션입니다. 각 단계(Phase)별로 의도적으로 설계된 "나쁜 UX" 사례를 직접 체험하며 개선 방향을 탐구할 수 있습니다.

## 🚀 시작하기

이 프로젝트는 [Vite](https://vitejs.dev/)를 사용하여 구축되었습니다.

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```

기본적으로 `http://localhost:5173`에서 실행됩니다.

## 🛠 주요 기능 (Test Phases)

프로젝트는 4개의 주요 단계로 구성되어 있습니다:

### 1. Phase 1: First Impression (Analyze)
*   **시각적 명확성**: 대비(Contrast) 부족, 상태 표시 오류.
*   **실제 세계와의 일치**: 혼란스러운 아이콘 사용 (예: 저장 아이콘이 검색 기능 수행).
*   **위치 정보 부재**: 브레드크럼(Breadcrumb)이 없는 페이지 등.

### 2. Phase 2: Interaction (Action)
*   **효율성 (Efficiency)**: 피츠의 법칙(Fitts's Law) 위반 사례.
    *   **다단계 내비게이션**: 목표물에 도달하기 위해 불필요하게 깊은 단계(Depth)를 거쳐야 하는 구성.
*   **안전성 (Safety)**: 실수 방지 부족, 취소(Undo) 기능의 부재.

### 3. Phase 3: Feedback & Efficiency
*   **시스템 상태의 가시성**:
    *   **Good**: 로딩 스피너 및 처리 상태가 명확한 버튼.
    *   **Bad**: 클릭해도 아무런 반응이 없는 모호한 버튼.
*   **대기 시간 및 반응성**:
    *   **Good**: 진행률 표시줄(Progress Bar)이 있는 작업.
    *   **Bad**: 진행 상태를 알 수 없는 막연한 대기.

### 4. Phase 4: Accumulated Flow
*   **일관성**: 예측 불가능한 레이아웃 변화 (예: '다음' 버튼 위치 변경).
*   **인식과 회상**: 사용자의 기억력에 의존해야 하는 복잡한 코드 입력.
*   **유연성 및 데이터 손실**: 페이지 이동 시 작성 중인 데이터가 보존되지 않는 사례.

## 🏗 프로젝트 구조

*   `index.html`: 메인 레이아웃 및 진입점.
*   `src/scripts/`:
    *   `auth.js`: 사용자 상태 관리 및 초기화.
    *   `router.js`: 클라이언트 사이드 라우팅 시스템.
    *   `pages.js`: 각 페이지의 콘텐츠 및 로직 (가장 중요한 파일).
*   `src/styles/`: 각 위반 사례별 특화된 CSS 파일들.

## 📝 라이선스
ISC License
