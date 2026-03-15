---
title: 미러 컨텍스트
description: 문서와 코드베이스를 항상 동기화해 두는 AI 지원 소프트웨어 개발을 위한 최소한의 프레임워크입니다.
---

<h1 class="mt-3 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">Mirror Context</h1>

<p class="mt-5 text-xl leading-relaxed text-slate-600">
  AI를 사용한 개발이 늘어나면서 프로젝트의 맥락(context)을 어떻게 유지할 것인가가 중요한 문제라고 느꼈습니다.<br>
그래서 코드 구조에 대응되는 문서 구조를 함께 두어 프로젝트의 맥락을 관리하는 방식, Mirror Context라는 아이디어를 정리해 보았습니다.

</p>

<p class="mt-8 text-lg leading-8 text-slate-700">
  아직 검증된 방법은 아니지만, AI와 함께 개발하는 시대에 context를 관리하는 하나의 접근으로 생각해 볼 수 있을 것 같습니다.
</p>


<div class="mt-10 flex flex-wrap items-center gap-3">
  <a
    class="inline-flex items-center border border-slate-300 px-4 py-2.5 text-base font-medium text-slate-900"
    href="/mirror-context"
  >
    전체 아티클 읽기
  </a>
  <a
    class="inline-flex items-center border border-slate-200 bg-slate-50 px-4 py-2.5 text-base font-medium text-slate-700"
    href="/raw/mirror-context.ko.md"
  >
    마크다운 원본 열기
  </a>
</div>

<section class="mt-16">
  <h2 class="text-lg font-semibold uppercase tracking-[0.12em] text-slate-900">Mirror Context 구조 예시</h2>
  <pre class="mt-6 overflow-x-auto border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-800"><code>my-project/
│
├─ README.md
├─ package.json
├─ docker-compose.yml
│
├─ backend/
│  ├─ src/
│  │  ├─ api/
│  │  │  ├─ userController.ts
│  │  │  └─ authRoutes.ts
│  │  │
│  │  ├─ services/
│  │  │  └─ authService.ts
│  │  │
│  │  ├─ models/
│  │  │  └─ userModel.ts
│  │  │
│  │  └─ utils/
│  │     └─ validator.ts
│  │
│  ├─ config/
│  │  └─ env.ts
│  │
│  └─ tests/
│     ├─ userController.test.ts
│     └─ authService.test.ts
│
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  └─ LoginForm.tsx
│  │  │
│  │  ├─ pages/
│  │  │  └─ login.tsx
│  │  │
│  │  └─ utils/
│  │     └─ apiClient.ts
│  │
│  └─ public/
│
└─ mirror_docs/
   │
   ├─ RULES.md
   ├─ CONVENTION.md
   ├─ ARCHITECTURE.md
   │
   ├─ GLOBAL_PLAN.md
   ├─ INDEX.md
   ├─ MAP.md
   │
   ├─ TEST_REPORT.md
   ├─ LEARNINGS.md
   ├─ DEBUG_LOG.md
   │
   ├─ backend/
   │  ├─ EPIC.md
   │  │
   │  ├─ src/
   │  │  ├─ EPIC.md
   │  │  │
   │  │  ├─ api/
   │  │  │  ├─ EPIC.md
   │  │  │  ├─ userController.md
   │  │  │  ├─ userControllerPlan.md
   │  │  │  ├─ authRoutes.md
   │  │  │  └─ authRoutesPlan.md
   │  │  │
   │  │  ├─ services/
   │  │  │  ├─ EPIC.md
   │  │  │  ├─ authService.md
   │  │  │  └─ authServicePlan.md
   │  │  │
   │  │  ├─ models/
   │  │  │  ├─ EPIC.md
   │  │  │  ├─ userModel.md
   │  │  │  └─ userModelPlan.md
   │  │  │
   │  │  └─ utils/
   │  │     ├─ EPIC.md
   │  │     ├─ validator.md
   │  │     └─ validatorPlan.md
   │  │
   │  ├─ config/
   │  │  └─ EPIC.md
   │  │
   │  └─ tests/
   │     ├─ EPIC.md
   │     ├─ userController.test.md
   │     └─ authService.test.md
   │
   └─ frontend/
      ├─ EPIC.md
      │
      ├─ src/
      │  ├─ EPIC.md
      │  │
      │  ├─ components/
      │  │  ├─ EPIC.md
      │  │  ├─ LoginForm.md
      │  │  └─ LoginFormPlan.md
      │  │
      │  ├─ pages/
      │  │  ├─ EPIC.md
      │  │  ├─ login.md
      │  │  └─ loginPlan.md
      │  │
      │  └─ utils/
      │     ├─ EPIC.md
      │     ├─ apiClient.md
      │     └─ apiClientPlan.md
      │
      └─ public/
         └─ EPIC.md</code></pre>
</section>
