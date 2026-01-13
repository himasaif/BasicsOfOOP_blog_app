<h1 align="left">🧠 Basics of OOP Blog App</h1>
<h3 align="left">TypeScript • Express • OOP Architecture • Clean Backend Structure</h3>

<p align="left">
  <a href="https://github.com/himasaif/BasicsOfOOP_blog_app">
    <img src="https://img.shields.io/badge/Repo-BasicsOfOOP__blog__app-111?style=flat&logo=github&logoColor=white" />
  </a>
  <a href="https://github.com/himasaif?tab=repositories">
    <img src="https://img.shields.io/badge/All%20Repos-View-2ea44f?style=flat&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/ibraheem-saif-981458274">
    <img src="https://img.shields.io/badge/LinkedIn-Ibrahim%20Seif-0A66C2?style=flat&logo=linkedin&logoColor=white" />
  </a>
</p>

---

## 🎯 Why this project?
This project is built to demonstrate **Object-Oriented Programming (OOP)** in a real backend application using:

- ✅ **TypeScript** (typing, interfaces, safer code)
- ✅ **Express.js** (REST APIs)
- ✅ **OOP Design** (Services, Controllers, Models, Repositories)
- ✅ **Clean Structure** (Separation of concerns & maintainable code)

> هدف البروجكت: أوضح إني اشتغلت **OOP مع Express باستخدام TypeScript** بشكل عملي ومنظم.

---

## 🧱 OOP Architecture
**Core idea:** each layer has a clear responsibility:

- **Controllers** → handle HTTP requests & responses  
- **Services** → business logic (OOP classes)  
- **Models/Entities** → data representation  
- **Repositories/DB Layer** → database operations  
- **Middlewares** → validation, auth, error handling  

Example:
- `AuthController` calls `AuthService`
- `AuthService` uses `UserRepository`
- Clean flow, easy to test & extend ✅

---

## ⚙️ Tech Stack
<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-111?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-111?style=flat&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-111?style=flat&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/OOP-111?style=flat&logo=codefactor&logoColor=white" />
</p>

---

## ✨ Features
- ✅ Clean REST API structure
- ✅ OOP-based services & controllers
- ✅ Validation & error handling
- ✅ Scalable folder structure
- ✅ Easy to extend with new modules (Posts, Users, Comments...)

---

## 📁 Project Structure
```bash
src/
  modules/
    auth/
      auth.controller.ts
      auth.service.ts
      auth.routes.ts
  middlewares/
  utils/
  config/
  index.ts
