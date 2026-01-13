<h1 align="left">🧩 BasicsOfOOP Blog App</h1>
<p align="left">
  <b>OOP + TypeScript + Express</b> — A clean, modular blog backend built to demonstrate Object-Oriented Programming in a real Express project.
</p>

<p align="left">
  <a href="https://github.com/himasaif/BasicsOfOOP_blog_app">
    <img src="https://img.shields.io/badge/Repo-GitHub-111?style=flat&logo=github&logoColor=white" />
  </a>
  <img src="https://img.shields.io/badge/TypeScript-111?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-111?style=flat&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/OOP-111?style=flat&logo=codefactor&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-111?style=flat&logo=mongodb&logoColor=white" />
</p>

---

## ✨ Why this project?
This repository is built specifically to showcase:
- ✅ **Object-Oriented Programming** in a real backend codebase  
- ✅ **TypeScript** for strong typing and better maintainability  
- ✅ **Express** with clean architecture and reusable layers  
- ✅ **Middleware-based flow** (auth, validation, error handling)  
- ✅ **Modular structure** (modules, utils, DB layer)

---

## 🔥 Key Highlights
- **OOP approach** (services/utilities organized as reusable components)
- **Typed models & requests** (interfaces like `IUser`, `IBlog`, `IRequestWithUser`)
- **Central error handling** (`error.handler.ts`)
- **Auth middleware** (`auth.middlewares.ts`)
- **Validation middleware** (`validation.middleware.ts`)
- **Token utilities** (`token.utils.ts`)
- **Controller handler wrapper** (`controller.handler.ts`)
- **Database layer** (`DB/connectionDb.ts`, `DB/database.services.ts`)

---

## 🧱 Project Structure (High-level)
```bash
src/
  DB/
    models/
    connectionDb.ts
    database.services.ts
  middlewares/
    auth.middlewares.ts
    validation.middleware.ts
    error.handler.ts
  modules/
    auth/
    blog/
  types/
    types.ts
  utils/
    token.utils.ts
    controller.handler.ts
  index.ts
