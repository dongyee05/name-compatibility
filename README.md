## 이름 궁합 테스트 (React + Vite)

두 사람의 이름과 성별을 입력하면 재미로 보는 궁합 점수와 코멘트를 보여주는 웹 앱입니다. Vite + React + Tailwind CSS 기반으로 쉽고 빠르게 실행/배포할 수 있습니다.

> 참고/엔터테인먼트용 서비스입니다.

---

## 빠른 시작

사전 요구: Node.js 18+

```cmd
npm install
npm run dev
```

프로덕션:

```cmd
npm run build
npm run preview
```

---

## 주요 기능

- 이름 기반 궁합(0~100%) + 메시지/명언 표시
- “궁합 계산 방식 보기” 토글 + 애니메이션 전개
- 반응형 UI, Tailwind + 모듈식 CSS

---

## 폴더 구조(요약)

```
src/
  App.jsx
  main.jsx
  style.css
  components/
    NameForm.jsx
    ResultDisplay.jsx
    QuoteDisplay.jsx
    CompatibilityExplanation.jsx
  styles/
    *.css
```

---

## 커스터마이징

- 포트: `vite.config.js` → `server.port`
- 색/테마: `tailwind.config.js`, `src/styles/*.css`
- 폰트: `src/styles/fonts.css`(로컬 폰트 등록), 섹션별 적용은 각 CSS에 지정

---

## NPM 스크립트

- `dev` 개발 서버
- `build` 프로덕션 빌드
- `preview` 빌드 미리보기

---

## 폰트 라이선스 상세 링크

로컬 폰트는 `src/font/`에 있으며, 각 폰트의 라이선스를 준수해야 합니다.
프로젝트에 포함된 폰트의 출처/라이선스 정보이며, 반드시 ‘공식 원문’을 기준으로 사용 범위를 확인하세요.

- CookieRun Typeface (CookieRun Regular.ttf)

  - 제공/저작권: Devsisters Corp. © 2019 Devsisters Corp.
  - 공식 사이트: https://www.cookierunfont.com/
  - 요약: 모든 사용자에게 무료 제공 및 자유 사용 가능. 단, 게임 산업군에 한해 상업·비상업 사용 모두 금지. 세부 조건은 사이트 내 가이드 참고. 문의: font@devsisters.com

- 배달의민족 주아체 (BMJUA_ttf.ttf)

  - 제공/저작권: (주)우아한형제들
  - 공식 페이지: https://www.woowahan.com/fonts (라이선스: https://www.woowahan.com/fonts/license)
  - 요약: 배민 글꼴 라이선스 정책에 따라 무료 사용 가능(상업/비상업 포함). 재배포/수정 등 세부 조건은 라이선스 페이지 확인 필수.

- 학교안심 둥근미소체 (Hakgyoansim Dunggeunmiso TTF R.ttf)

  - 공식: 한국교육학술정보원(KERIS) 학교안심 글꼴 다운로드
  - 링크: https://copyright.keris.or.kr/wft/fntDwnldView?fntGrpId=GFT202408200000000000003
  - 안내: 공식 배포 페이지의 사용 조건을 따르세요.

- 오뮤 다예쁨체 (omyu.ttf)

  - 공식 배포/라이선스: https://omyudiary.com/product/%EC%98%A4%EB%AE%A4-%EB%8B%A4%EC%98%88%EC%81%A8%EC%B2%B4/73/
  - 비고: 배포처에 따라 허용 범위가 다를 수 있어 원문 확인 필요.

- 이서윤체 (이서윤체.ttf)

  - 안내(사용자 제공 요약): 개인/기업 포함 모든 사용자에게 무료 제공, 온·오프라인/상품/광고 등 상업적 사용 가능. 단, 유료 판매 금지, 임의 수정·개작 후 재배포 금지, 배포된 형태 그대로 사용.

권장 사항

- 재배포 금지 조항이 있는 폰트는 리포지토리에 파일을 포함하지 말고, 설치 안내 또는 CDN 방식으로 대체하세요.
- 저작권(고지) 의무가 있는 라이선스는 사이트 하단 또는 `NOTICE.md`/`ATTRIBUTION` 파일로 명시하세요.
