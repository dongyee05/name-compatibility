## 이름 궁합 테스트 (React + Vite)

두 사람의 이름과 성별을 입력하면 재미로 보는 궁합 점수와 코멘트를 보여주는 웹 앱입니다. Vite + React + Tailwind CSS로 제작되었으며, 정적 빌드가 가능한 프런트엔드 프로젝트입니다.

> 본 서비스는 참고/엔터테인먼트용입니다. 실제와 다를 수 있습니다.

---

## 주요 기능

- 이름 기반 궁합 점수(0~100%) 계산 및 메시지 표시
- 점수대별 이모지 하트 애니메이션과 컬러 변화
- 궁합 계산 로직의 상세 요인 설명 토글 제공
- 감성 한 줄 명언 출력
- 반응형 UI, 커스텀 스타일 + Tailwind 유틸리티 혼합 사용

## 기술 스택

- 빌드 도구: Vite (^7)
- UI 라이브러리: React (^19), React DOM (^19)
- 스타일: Tailwind CSS (^3), PostCSS, Autoprefixer + 모듈식 CSS
- 개발 플러그인: @vitejs/plugin-react

## 프로젝트 구조

```
name-compatibility/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ public/
│  └─ vite.svg
└─ src/
	 ├─ App.jsx
	 ├─ main.jsx
	 ├─ style.css                  # Tailwind 지시어 및 전역 스타일 import
	 ├─ components/
	 │  ├─ NameForm.jsx            # 입력 폼(이름/성별)
	 │  ├─ ResultDisplay.jsx       # 점수/메시지/하트 애니메이션
	 │  ├─ QuoteDisplay.jsx        # 한 줄 명언
	 │  └─ CompatibilityExplanation.jsx  # 상세 요인 설명 토글
	 └─ styles/
			├─ app.css
			├─ common.css
			├─ nameForm.css
			├─ resultDisplay.css
			├─ quoteDisplay.css
			└─ compatibilityExplanation.css
```

## 빠른 시작

사전 요구 사항

- Node.js 18 이상 권장

설치 및 실행 (Windows cmd)

```cmd
npm install
npm run dev
```

기본 개발 서버는 `http://localhost:3000`에서 실행됩니다. 포트는 `vite.config.js`의 `server.port`로 설정되어 있습니다.

프로덕션 빌드/미리보기

```cmd
npm run build
npm run preview
```

`dist/` 폴더가 생성되며 정적 호스팅(예: Netlify, Vercel, GitHub Pages)에 배포할 수 있습니다.

## 동작 원리 요약

핵심 로직은 `src/App.jsx`에 있으며, 아래 요인들을 조합하여 궁합 점수를 산출합니다.

- 이름 정제: 한글/영문만 남기고 공백·특수문자 제거
- 이름 값 계산:
  - 한글: 초성/중성/종성 분해 후 가중치 합산
  - 영문: 알파벳 순서 기반 가중치 합산
- 성별 조합: 이성 조합일 때 가중치 증가
- 길이 유사도: 이름 길이 차이가 적을수록 가산
- 첫 글자 일치: 일치 시 소폭 가산
- 공통 문자 수: 공통 글자가 많을수록 가산
- (한글) 발음 패턴 유사도: 유사 시 소폭 가산

최종 점수는 0~100 범위로 정규화 후, 점수대별 메시지(`getCompatibilityMessage`)와 명언(`getCompatibilityQuote`)을 매칭합니다. 계산 근거는 `CompatibilityExplanation` 토글에서 시각적으로 확인할 수 있습니다.

## 커스터마이징 포인트

- 포트 변경: `vite.config.js`의 `server.port`
- 테마/컬러: `tailwind.config.js`의 `theme.extend.colors`와 `src/styles/*.css`
- 폰트: `index.html`의 Google Fonts(`Noto Sans KR`) 링크
- 점수 로직/메시지: `src/App.jsx`의 `calculateCompatibilityDetails`, `getCompatibilityMessage`, `getCompatibilityQuote`

## 주의 사항

- `index.html`에는 F12/우클릭/Ctrl+U 방지 스크립트가 포함되어 있습니다. 이는 단순 억제용이며 보안 기능은 아닙니다. 필요 시 제거해도 앱 동작에는 영향이 없습니다.
- 본 앱은 오락용으로 설계되었습니다. 실제 성향·상황과는 무관합니다.

## NPM 스크립트

- `npm run dev`: 개발 서버 실행 (기본 포트 3000)
- `npm run build`: 프로덕션 번들 빌드
- `npm run preview`: 빌드 결과 미리보기 서버 실행

## 배포 팁

- 정적 호스팅: `dist/`를 그대로 업로드 (Netlify/Vercel/Cloudflare Pages 등)
- GitHub Pages: 빌드 아티팩트(`dist/`)를 Pages 소스로 설정하거나, Actions 워크플로를 사용해 자동 배포 구성

## 라이선스

이 저장소에는 별도의 라이선스 파일이 없습니다. 공개 배포/재사용 정책이 필요하다면 `LICENSE` 파일을 추가해 주세요.
