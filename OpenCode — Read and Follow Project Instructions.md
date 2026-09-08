# AGENT INSTRUCTION — READ THE PROJECT DOCUMENTATION FIRST

Before doing any coding, modification, installation, or deletion, you MUST first understand the project documentation.

## 1. FIND THE DOCUMENTATION

Search the entire repository recursively for all relevant Markdown files:

- `*.md`
- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `CONTRIBUTING.md`
- `PENDOOROOTS_Cinematic_Rebuild.md`
- `PENDOOROOTS_Professional_Design_Guidelines.md`
- architecture documentation
- design documentation
- task/specification documents
- developer/AI-agent instructions

Do not assume the important files are in the root directory.

## 2. READ THEM IN THE CORRECT ORDER

Read the files in this priority order:

### Priority 1 — Project/Agent Instructions
Read:
- `AGENTS.md`
- `CLAUDE.md`
- `README.md`
- other project-specific instruction files

These define how you are allowed to work on the repository.

### Priority 2 — PENDOOROOTS Specifications
Read completely:

- `PENDOOROOTS_Cinematic_Rebuild.md`
- `PENDOOROOTS_Professional_Design_Guidelines.md`

These define the intended design direction, quality standards, workflow, and constraints.

### Priority 3 — Supporting Documentation
Read:
- architecture docs
- design docs
- task docs
- API documentation
- existing implementation notes

## 3. DO NOT JUST SUMMARIZE THE FILES

You must **understand and apply** them.

For each important document, determine:

- What is mandatory?
- What is a recommendation?
- What is a constraint?
- What must be preserved?
- What must be avoided?
- What decisions does this document control?
- Does another instruction file have higher priority?

Resolve conflicts according to the project's instruction hierarchy.

## 4. BUILD AN INTERNAL PROJECT MODEL

Before coding, combine the documentation with the actual repository.

You should understand:

**Documentation → Existing Code → Existing Assets → Existing Website → Design Requirements → Implementation Plan**

Do not make implementation decisions from the `.md` files alone.

The documentation describes **what and why**.

The existing codebase tells you **how the project currently works**.

The assets tell you **what visual resources already exist**.

The live website tells you **what is currently being presented**.

## 5. VERIFY EVERYTHING AGAINST THE CODEBASE

If a document says something exists, verify it.

If the documentation conflicts with the actual implementation:

1. Do not blindly overwrite the implementation.
2. Identify the conflict.
3. Determine whether the documentation or existing functionality should take priority.
4. Record the decision in `SITE_AUDIT.md`.

Never invent technical facts.

## 6. BEFORE CODING, REPORT YOUR UNDERSTANDING

After reading the documentation and inspecting the repository, give me a concise report containing:

### Documentation Read
List the important `.md` files you read.

### Instruction Hierarchy
Explain which files control your decisions and why.

### Current Project
- framework
- language
- architecture
- routes
- major components
- dependencies

### Current Design
- typography
- colors
- layout
- imagery
- spacing
- motion
- responsive behavior

### Existing Problems
Identify the most important technical and design problems.

### Design Direction
Explain how the PENDOOROOTS / LEMOO design should evolve.

### Implementation Plan
Give the phases you intend to execute.

### Files Likely to Change
List the important files/directories.

## 7. WAIT FOR THE AUDIT STAGE TO BE COMPLETE

Do NOT immediately start a massive rewrite.

First complete the audit.

Create/update:

`SITE_AUDIT.md`

Only after the audit and implementation plan are established should you begin implementation.

## 8. APPLY THE DOCUMENTATION THROUGHOUT THE SESSION

The `.md` files are not a one-time reference.

Keep them as active project instructions throughout the entire task.

Before making a major design or architecture decision, check whether the documentation already defines the answer.

Do not gradually forget the constraints as implementation progresses.

## 9. FINAL RULE

**READ → UNDERSTAND → VERIFY → AUDIT → PLAN → IMPLEMENT → TEST → REFINE**

Never:

**READ → ASSUME → CODE EVERYTHING → HOPE IT WORKS**

The goal is to make decisions deliberately and consistently with the project documentation.