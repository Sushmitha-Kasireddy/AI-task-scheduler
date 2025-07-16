# 🤖 AI Task Scheduler

A modern full-stack **AI-assisted task scheduler** that helps users prioritize tasks based on deadlines and upcoming work using:

- 💻 React + TypeScript frontend
- ☕ Spring Boot backend (Java 17)
- 🐘 PostgreSQL (optional)
- 🐳 Dockerized Dev Environment
- 🔁 GitHub Actions CI/CD

---

## 🚀 Features

- ➕ Add and view scheduled tasks with title, description, and deadline
- 📅 Prioritized list of tasks sorted by deadline
- 🌐 RESTful API with CORS enabled
- 🧠 Ready for integration with AI prioritization logic
- 🔧 Fully containerized using Docker and GitHub CI workflow

---

## 🧑‍💻 Tech Stack

| Layer      | Technology                             |
|------------|----------------------------------------|
| Frontend   | React, TypeScript, Axios               |
| Backend    | Spring Boot, Java 17, Spring Web       |
| DevOps     | Docker, Docker Compose, GitHub Actions|
| Testing    | JUnit, React Testing Library (extend) |

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

- [Node.js](https://nodejs.org/)
- [Java 17+](https://adoptium.net/)
- [Maven](https://maven.apache.org/)
- [Docker](https://www.docker.com/) (optional for containerization)

---

### 🚀 Run using Docker Compose

```bash
docker-compose up --build
