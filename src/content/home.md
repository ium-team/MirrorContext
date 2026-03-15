---
title: Mirror Context
description: A minimal framework for AI-assisted software development that keeps documents and the codebase synchronized at all times.
---

<h1 class="mt-3 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">Mirror Context</h1>

<p class="mt-5 text-xl leading-relaxed text-slate-600">
  As development with AI increases, I felt that how we maintain project context is becoming an important issue.<br>
  So I organized an idea called Mirror Context: managing project context by keeping a document structure that corresponds to the code structure.

</p>

<p class="mt-8 text-lg leading-8 text-slate-700">
  It is not yet a proven method, but I think it can be considered as one approach to managing context in the era of developing together with AI.
</p>

<div class="mt-10 flex flex-wrap items-center gap-3">
  <a
    class="inline-flex items-center border border-slate-300 px-4 py-2.5 text-base font-medium text-slate-900"
    href="/mirror-context"
  >
    Read the full article
  </a>
  <a
    class="inline-flex items-center border border-slate-200 bg-slate-50 px-4 py-2.5 text-base font-medium text-slate-700"
    href="/raw/mirror-context.md"
  >
    Open markdown source
  </a>
</div>

<section class="mt-16">
  <h2 class="text-lg font-semibold uppercase tracking-[0.12em] text-slate-900">Mirror Context Structure Example</h2>
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
