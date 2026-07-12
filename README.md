# Codex Convergence Runtime ✨

> A living runtime dashboard for symbolic systems, numerology, and human–AI software development.

🌐 **Live Demo**  
https://bjramds.github.io/Numerology-Cycle-3/

---

# Overview

Codex Convergence is an experimental front-end application that explores how symbolic systems, runtime observability, and modular JavaScript architecture can coexist in a single interactive dashboard.

Rather than serving as a traditional numerology calculator, the project is evolving into a **runtime environment** where symbolic computation, application state, diagnostics, and developer tooling are treated as first-class features.

The current implementation uses **Numerology** as the first runtime module while laying the foundation for additional symbolic engines.

---

# Current Features

## Runtime Dashboard

- Runtime Status Header
- Day / Night Theme Switching
- Phase Controller
- Runtime Event Console
- Diagnostics Panel
- Responsive Dashboard Layout

---

## Numerology Engine

The first active runtime module.

Currently includes:

- Life Path Number calculation
- Birth date validation
- Master Number preservation
- Interactive calculation interface

Future symbolic modules will follow the same architecture.

---

## Runtime Diplomacy

The application models execution using four symbolic runtime phases.

```
onStart
    ↓

onUpdate
    ↓

onEOD
    ↓

onStop
```

Each phase contains runtime metadata describing:

- role
- symbolic meaning
- task
- narrative context
- logging behavior

This allows the dashboard to demonstrate both traditional application execution and symbolic execution.

---

# Architecture

```
index.html
     │
     ▼

src/index.js
     │
     ├──────────────┐
     ▼              ▼

Runtime        Numerology
Logger           Engine
     │
     ▼

Runtime
Diplomacy
```

The application is intentionally modular.

Each runtime component has a single responsibility.

---

# Runtime Components

Current modules include:

```
src/

index.js
runtimeDiplomacy.js
runtimeLogger.js

modules/
    numerologyCore.js
```

Planned runtime modules:

```
runtimeState.js
eventBus.js
diagnostics.js
symbolGraph.js
historyEngine.js
```

---

# Why This Exists

This repository serves as a public experiment in:

- modular JavaScript
- runtime observability
- symbolic programming
- human–AI collaborative development
- rapid front-end architecture
- software design through iterative conversation

Every feature is developed through continuous dialogue, tested in production using GitHub Pages, then refined through observation.

---

# Development Roadmap

## Phase 1

✅ Runtime Dashboard

✅ Numerology Engine

✅ Runtime Diplomacy

✅ Theme System

---

## Phase 2

- Runtime State Store
- Event Bus
- Live Diagnostics
- Runtime Health
- Symbol Graph
- Improved Logging

---

## Phase 3

- Plugin Architecture
- Additional Symbolic Engines
- Historical Runtime Timeline
- Persistent Sessions
- AI-assisted Analysis
- Visualization Tools

---

# Running Locally

Clone the repository.

```
git clone https://github.com/BJRAMDS/Numerology-Cycle-3.git
```

Open the project.

```
cd Numerology-Cycle-3
code .
```

Launch using a local web server (such as VS Code Live Server) to enable ES Module support.

---

# Contributing

Contributions are welcome.

Areas of interest include:

- JavaScript Architecture
- Runtime Systems
- Front-end Engineering
- Symbolic Computing
- Numerology Research
- User Interface Design
- Observability
- Documentation

If you're interested, feel free to open an issue, start a discussion, or submit a pull request.

---

# Philosophy

Codex Convergence is built around a simple idea:

> Software should explain itself while it runs.

Instead of hiding application behavior behind developer tools, the runtime becomes part of the interface.

The dashboard is both the application **and** the window into how the application thinks.

---

# Author

**Brad M. Harris**

Product Owner • Software Developer • Systems Thinker

📧 brforeal.dev@gmail.com

📞 (954) 817-3900

GitHub

https://github.com/BJRAMDS

---

> "Observe the runtime. Understand the system. Improve the architecture."
