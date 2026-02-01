# CLAUDE.md

## 프로젝트 개요

- **프레임워크**: Next.js 14.1 (App Router) + TypeScript + Tailwind CSS
- **패키지 매니저**: pnpm
- **배포**: Vercel
- **도메인**: https://gimbap.dev
- **DB**: Neon PostgreSQL (조회수 트래킹)
- **MDX 렌더링**: next-mdx-remote + gray-matter (frontmatter 파싱)
- **코드 하이라이팅**: sugar-high
- **폰트**: Geist

## 디렉토리 구조

```
app/                        → Next.js App Router
  blog/[slug]/page.tsx      → 개별 포스트 페이지
  blog/utils.ts             → 포스트 파싱/유틸리티
  tags/[tag]/page.tsx       → 태그별 필터 페이지
  tags/page.tsx             → 전체 태그 목록 페이지
  og/route.tsx              → OG 이미지 자동 생성
  rss/route.ts              → RSS 피드
  api/view-count/route.ts   → 조회수 API
  components/
    mdx.tsx                 → MDX 커스텀 컴포넌트 (헤딩, 링크, 이미지 등)
    posts.tsx               → 포스트 목록 컴포넌트
    theme-switcher.tsx      → 테마 전환 (light/dark/system)
    view-count.tsx          → 조회수 표시 (서버 컴포넌트)
    increment-view-count.tsx → 조회수 증가 (클라이언트)
    code-copy-button.tsx    → 코드 블록 복사 버튼
posts/                      → MDX 블로그 포스트 파일
public/posts/               → 포스트별 이미지 에셋
queries/db.ts               → Neon DB 쿼리 (조회수)
utils/theme-effect.ts       → 초기 테마 적용 (FOUC 방지)
```

## 블로그 글 작성 가이드

### 파일 위치 및 명명 규칙

- 파일 위치: `posts/[slug].mdx`
- 파일명: lowercase, 하이픈 구분 (예: `my-post-title.mdx`)
- 파일명이 곧 URL slug가 됨 → `/blog/my-post-title`

### Frontmatter 스키마

```yaml
---
title: "제목"               # 필수
publishedAt: "YYYY-MM-DD"   # 필수
summary: "요약 설명"         # 필수
tags: ["tag1", "tag2"]      # 선택, lowercase 하이픈 구분
image: "/posts/custom-og.png" # 선택, 커스텀 OG 이미지
---
```

TypeScript 타입 (`app/blog/utils.ts`):

```ts
type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags?: string[];
};
```

### 이미지 사용

- 저장 위치: `public/posts/[slug]/` 디렉토리
- MDX 참조: `![alt](/posts/[slug]/image.png)`
- 자동으로 Next.js Image 컴포넌트 + `rounded-lg` 스타일 적용

### 기존 태그 목록

react, valtio, proxy, weakmap, usesyncexternalstore, state-management,
nextjs, msw, api-mocking, app-router, frontend-testing,
ios-14, safari, crypto-randomuuid, uuid, browser-support,
context-api, custom-hook, factory-pattern,
raspberry-pi, ddns, ssh, port-forwarding, linux-security,
speech-recognition, web-speech-api, typescript, stt,
media-recorder, web-api,
pnpm, monorepo, shared-modules,
gitlab-ci, ci-caching, yarn-cache, build-performance, devops,
ubuntu, google-authenticator, otp, authentication-error,
static-ip, ssh-access, dhcp

## MDX 기능

- **코드 블록**: sugar-high 구문 하이라이팅, 언어 지정 시 복사 버튼 자동 추가
- **헤딩 (h1~h6)**: 자동 앵커 링크 생성 (`slugify` 기반 id 부여)
- **외부 링크**: 자동으로 `target="_blank"` + `rel="noopener noreferrer"` 적용
- **내부 링크**: Next.js `Link` 컴포넌트 사용
- **이미지**: Next.js `Image` 컴포넌트 + `rounded-lg`
- **테이블**: `<Table data={{ headers: [...], rows: [[...]] }} />` 형태
- **블록쿼트**: 커스텀 스타일 (`Block` 컴포넌트, 좌측 보더 + 배경)

## URL 구조

| URL | 설명 |
|-----|------|
| `/blog/[slug]` | 개별 포스트 |
| `/tags/[tag]` | 태그별 필터 |
| `/tags` | 전체 태그 목록 |
| `/rss` | RSS 피드 |
| `/og?title=...` | OG 이미지 자동 생성 |

## 빌드 & 배포

```bash
pnpm dev      # 개발 서버
pnpm build    # 프로덕션 빌드
pnpm start    # 프로덕션 서버
```

- **pre-push hook** (husky): `pnpm build` 실행하여 빌드 검증
- **정적 생성**: `generateStaticParams()` 사용 (포스트 페이지)
- **환경 변수**: `DATABASE_URL`, `POSTGRES_URL` (Neon DB 연결)
