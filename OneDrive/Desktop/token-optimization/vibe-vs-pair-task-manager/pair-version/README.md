# Vibe Coding vs AI Pair Programming

## Project Overview
This project compares two different AI-assisted development approaches by building the same Task Manager application in two ways:

- Vibe Coding using v0
- AI Pair Programming using Vite with manual coding support

The goal of this assignment is to compare both approaches based on speed, control, code quality, explainability, and editability.

---

## Features
Both versions of the app include the same core features:

- Add a task
- Mark a task as complete
- Filter tasks by status: All / Active / Completed
- Simple and clean user interface

---

## Project Structure

```text
vibe-vs-pair-task-manager
│
├── vibe-version
├── pair-version
└── README.md
Live Deployments
Vibe version: add-link-here
Pair version: add-link-here
Vibe Version

The vibe version was created using v0.

Observations

Vibe version was generated in around 1 minute using v0. The tool created a complete Next.js project automatically with folders like app, components, hooks, and lib. The UI was clean and functional without writing any code. However, the structure was complex and not fully understandable at first, and multiple files were generated without clear manual control.

Pair Version

The pair version was created manually using Vite + React with AI-assisted workflow.

## Live Deployments
- Vibe version: add-link-here
- Pair version: https://sparkly-tulumba-5c1db2.netlify.app

Observations

The pair version took more time to build, but the structure was much simpler and easier to understand. The code was written in a more controlled way, and every part of the logic was clear. It was easier to explain, debug, and modify compared to the vibe version.

Comparison Table
Dimension	Vibe Version (v0)	Pair Version (Cursor/Vite)	Verdict
Speed	Generated full app in around 1 minute	Took around 25 minutes to build manually	Vibe faster
Control	AI decided full structure and logic	I controlled every line of code	Pair better
Code Quality	Complex structure with many folders and generated files	Simple and clean structure with understandable code	Pair better
Explainability	Hard to understand all generated hooks and files at first	Easy to explain each function and logic	Pair better
Editability	Harder to modify because logic was spread across multiple files	Easy to modify because the code is short and clear	Pair better
When I Would Use Each Tool

Vibe coding tool for: quick prototypes and demos — because it generates a working UI very fast.

AI pair programming for: production-level applications — because it gives better control, understanding, debugging, and editability.

Conclusion

This assignment helped me understand that both tools are useful, but they serve different purposes. Vibe coding is best when speed matters and a quick result is needed. AI pair programming is better when code quality, control, and future editing are important. Based on my experience, vibe tools are useful for fast prototyping, while pair programming is better for real development work.

Tools Used
Vibe Tool: v0
Pair Programming Setup: Vite + React
Code Editor: VS Code
Submission Items
Public GitHub repository
Pull Request link
Google Drive video link showing both live apps and observations