# src 폴더 구조 전환 설계

## 개요

프로젝트 루트에 흩어진 소스 폴더들을 `src/` 디렉토리로 통합한다.

## 변경 범위

### 이동할 폴더

| 현재 위치 | 변경 후 |
|-----------|---------|
| `app/` | `src/app/` |
| `components/` | `src/components/` |
| `lib/` | `src/lib/` |
| `stores/` | `src/stores/` |

### 루트에 유지할 항목

- `public/` — Next.js 요구 사항
- 모든 설정 파일 (`next.config.ts`, `tsconfig.json`, `package.json`, `eslint.config.mjs`, `postcss.config.mjs`, `components.json` 등)

### 수정할 설정 파일

**`tsconfig.json`**
- `paths["@/*"]`: `["./*"]` → `["./src/*"]`

**`components.json`**
- `tailwind.css`: `"app/globals.css"` → `"src/app/globals.css"`
