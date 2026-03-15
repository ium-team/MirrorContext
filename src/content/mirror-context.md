# Mirror Context

**A personal idea about context management**

## 🚀 Beginning

At some point, I started thinking about this.  
Now that AI usage in development is increasing, maybe handling context is becoming more important.

To be honest, this is not a verified method, nor is it something I organized after extensive experimentation.  
One day I suddenly thought, "In the end, won't we develop with natural language and manage through documents?" and by following that thought, I ended up here.

So this is not really a document that explains a confirmed method. Rather, it is closer to a document that gives concrete shape to the idea of managing with documentation, even though it is not yet verified.  
I do not know whether this is truly a good approach, whether this structure is realistically sustainable, or whether working developers may find parts of it lacking.

Still, at this point, I wanted to organize it in writing once.

## ☁️ Dream

AI-assisted development has opened a new world.  
Tasks that people used to do one by one - reading code directly, understanding structure, judging the scope of changes, searching documents, and connecting everything together - can now be helped quickly by AI.

But at that very point, I started seeing a different problem instead.  
The AI as I understand it was not smart. It is an entity that cannot remember.

To make an analogy, it is like a person who loses their memory every day due to an accident. In movies or dramas, those people start each morning by reading everything that happened yesterday and in the past.  
AI is the same. Whenever it starts a new conversation, it has to read all prior content. And after reading, it answers the user's question.  
But there is one problem. If there is too much for AI to read, its head might explode while reading. I think that is why "context engineering" emerged.  
It seems to have become important how AI can read long past stories well and quickly.

So this idea came to me.  
When we use AI in regular development, if we just use it as-is, AI will simply read code and understand the project.

Why this structure was created,  
why this separation of responsibilities was necessary,  
if something is modified, how far you need to review together,  
why a similar attempt in the past stopped,  
what judgment led to the current form.

But these things are not fully left in the code.  
These things live only in human memory, and AI cannot know them. People always have to keep explaining these things to AI.

In the end, I felt that as projects grow, understanding context well becomes critical.

Mirror Context started from this concern about context,  
and its goal is to let any AI that comes in at any time read the same structure and traces of the same judgments.

## 🪞 Mirror Context

This method is simple.  
**Keep a document structure that corresponds to the code structure, and treat that document structure itself as the project's context repository.**

The key is that it does not exist separately outside the project; it exists together inside the project with the same form and the same sense of location as the code.  
It is not merely documentation that is easy for people to read, but documentation that acts as AI's brain.

Existing context management usually centered on global documents such as `README`, `RULES.md`, `ARCHITECTURE.md`, and `CONVENTION.md`.  
This approach is certainly useful for explaining the overall direction and principles of a project.  
But I felt it has limits in preserving file-level context where real development actually happens.

So I wanted to solve this problem.  
Rather than keeping only high-level documents that explain the project, I began to think about **also maintaining a document structure that corresponds to the code structure itself**.

## 🤔 What is this?

Mirror Context did not start from the idea of just organizing project documents a bit better.  
If anything, it is closer to the opposite. Existing context management typically centered on global documents like `README`, `ARCHITECTURE.md`, `RULES.md`, and `CONVENTION.md`,  
and I initially thought that was the default approach too.

But development does not happen inside global documents; in the end, it happens inside folders and files.  
Actual modifications and judgments are made in specific files, and most problems also occur at the file level.    
And I felt that with only global documents, it is hard to preserve the context of that location sufficiently.

For example, assume the actual code structure looks like this.

```text
backend/
├── src/
│   ├── api/
│   │   ├── userController.ts
│   │   └── authRoutes.ts
│   ├── services/
│   │   └── authService.ts
│   ├── models/
│   │   └── userModel.ts
│   └── utils/
│       └── validator.ts
├── config/
└── tests/
```

In the existing approach, high-level documents such as README, architecture docs, and rule docs are often placed on top of this structure.  
This certainly helps explain the overall direction of a project.  
But why `userController.ts` looks like this, how far you should review together when changing `authService.ts`, what plan existed when this file was created, what attempts were made in the past and why they failed - these details are not preserved well.

So I started thinking about **a method that creates a document structure corresponding to the code structure itself**.  
In other words, instead of stopping at documents that explain the project, maintain **a document structure with the same granularity as the code units that compose the project**.

```text
mirror_docs/
├── backend/
│   ├── EPIC.md
│   ├── src/
│   │   ├── EPIC.md
│   │   ├── api/
│   │   │   ├── EPIC.md
│   │   │   ├── userController.md
│   │   │   ├── userControllerPlan.md
│   │   │   ├── authRoutes.md
│   │   │   └── authRoutesPlan.md
│   │   ├── services/
│   │   │   ├── EPIC.md
│   │   │   ├── authService.md
│   │   │   └── authServicePlan.md
│   │   ├── models/
│   │   │   ├── EPIC.md
│   │   │   ├── userModel.md
│   │   │   └── userModelPlan.md
│   │   └── utils/
│   │       ├── EPIC.md
│   │       ├── validator.md
│   │       └── validatorPlan.md
│   ├── config/
│   │   └── EPIC.md
│   └── tests/
│       ├── EPIC.md
│       ├── userController.test.md
│       └── authService.test.md
├── RULES.md
├── CONVENTION.md
├── ARCHITECTURE.md
├── GLOBAL_PLAN.md
├── INDEX.md
├── MAP.md
├── TEST_REPORT.md
├── LEARNINGS.md
└── DEBUG_LOG.md
```

The core point here is not the fact that global documents exist.   
The real core point is that **documents correspond to code spatially**.

- `EPIC.md` for folder-level context in folders
- Explanatory documents corresponding to files
- Planning documents near each file for that file
- Project-wide memory documents for tests, failures, and debug records
- Global documents as the reference point for all of this structure

In other words, Mirror Context is not a way to gather documents in one place; it is **a way to mirror the project's code structure once more as a document structure**.

## What do documents do here?

In this structure, documents are not just manuals.   
Documents are references for people to read, but at the same time they become the **first entry point** for AI to understand the project.

In the existing approach, AI tries to understand the project by reading a lot of code directly.  
But as projects grow, this approach can become heavy.  
Because reading only code may reveal structure, but often does not sufficiently reveal the reasons behind that structure or the background of judgments.

Mirror Context changes this flow a little.

1. AI first reads the corresponding documents.
2. Through those documents, it identifies structure, responsibilities, connections, plans, and failure history.
3. It reads code directly only when real implementation or modification is needed.

In short, documents are not just summaries; they become context that AI reads first before entering the project.

What matters here is the nature of the documents.  
In Mirror Context, documents are closer to organized records than to summaries.

Summarizing is reducing information.  
It keeps only the core and removes the rest.  
Organizing, in contrast, is structuring information.  
It not only says what is important, but also leaves where to read further, which code it connects to, and which higher-level documents to read first.

I thought maintaining project context is ultimately closer to **organizing**.

What is important is not making sentences short, but making sure we do not lose the path of understanding.
That is why in Mirror Context, documents inevitably increase.
And in reality, they probably will increase.

But maybe preserving context is originally closer to structuring than compressing.
More important than the documents increasing is that those documents do not tangle with each other and have the right location and role.

### 1. Global System Documents (Global Context)

These are documents that define project-wide rules and structure. They are the **project's default baseline** that all AI agents read in common.

#### RULES.md

Defines the **collaboration rules and safety standards** that AI agents must follow when working.   
For example, it includes user approval criteria, retry rules when errors occur, and restrictions on risky operations.  
It is a mechanism that lets AI work autonomously while **not crossing the project's safety boundaries**.

#### CONVENTION.md

Defines the **code and documentation writing rules** used in the project.  
It sets naming rules, commit message formats, Markdown structure, and so on, so that **all AI agents work in the same style**.

#### ARCHITECTURE.md

Explains the project's **technical structure and design intent**.  
It records the tech stack used, the structure of key modules, and why folders are designed the way they are, so that even a newly assigned AI can **quickly understand the overall structure**.

### 2. Navigation and Flow Documents (Navigation Context)

These are **map-like documents** that help AI not get lost inside the project.

#### GLOBAL_PLAN.md

Records the project's **current work status**.  
It organizes what work is in progress on which branch and which agent is doing what, thereby **preventing work conflicts**.

#### INDEX.md

This is a **structure map that connects files and features** in the project.  
When AI needs to modify a specific feature, it helps it **quickly find which files to look for**.

#### MAP.md

Organizes the **dependency relationships** of internal project elements.  
For example, when modifying a specific function or module, it helps you **identify impact scope in advance**.

### 3. Implementation-Stage Documents (The Blueprint)

These are **work instruction documents** used when implementing actual features.

#### EPIC.md

Defines the **final goal and requirements of one epic feature**.  
In other words, it is a document explaining **what this feature should produce**.

#### PLAN.md

This is an **implementation planning document** written based on the SPEC.  
It is created in minimum implementation units and organizes what to implement in what order.

### 4. Quality and History Documents (The Archive)

These documents validate results and record lessons obtained during work.

#### TEST_REPORT.md

This is a **quality inspection report** for the final output.  
It records build results, test pass/fail status, and execution logs.

#### LEARNINGS.md

This is a document where AI organizes **failures and lessons learned** during work.  
Even if it succeeds after multiple failures, it preserves that experience so that **the same mistakes are not repeated**.

#### DEBUG_LOG.md

This is the **raw record** of the agent work process.  
It serves as a **work black box** for tracing causes when problems occur.

## ⚰️ End

**Mirror Context is one idea about where and in what form project memory should be left in the AI era.**   
If code makes a project run, documents make a project understandable.   
And I thought that when documents for understanding exist alongside code in the same structure, both AI and humans may be able to maintain the same context.

This approach is still at the idea stage.   
It has not been sufficiently validated in practice, and its pros and cons have not yet been verified through operation.   
Perhaps if applied to a real project, it may prove heavier than expected, costly to maintain, or lead to the conclusion that another approach is better.

Still, at least one thing felt clear at this point.   
The more deeply and frequently we use AI in development, the more project quality is determined not only by generation capability but by how we preserve context.

Mirror Context is one ongoing challenge to solve exactly that problem.
