# 🕵️‍♂️ Whispers - Anonymous Confession Platform

Whispers is a full-stack MERN app that allows users to **share secrets anonymously**, built using **React**, **Express**, and **MongoDB**. Clean UI, secure auth, toast notifications, and a sleek experience — all in one.

---

## 🚀 Features

- 🔐 User Sign Up & Login (JWT-based)
- 🙈 Post anonymous confessions
- 📜 View all posted confessions
- ✨ Smooth UI with responsive design
- 📢 React Toastify for notifications
- 🌘 TailwindCSS for modern styling
- ⚠️ Protected Routes for authenticated actions
- 🔍 Custom 404 Page
- 🧠 Clean frontend/backend separation

---

## 🛠 Tech Stack

**Frontend:** React, Vite, React Router, TailwindCSS, React Toastify  
**Backend:** Express.js, Node.js, MongoDB, Mongoose  
**Deployment Ready:** Easily deployable to Render, Vercel, Railway, etc.

---


## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/whispers.git
cd whispers
```

### 2. Install dependencies

```bash
cd client
npm install
cd ../server
npm install
```

### 3. Run the app

```bash
# In one terminal
cd server
npm run dev

# In another terminal
cd client
npm run dev
```

---

## 🗂 Folder Structure

```
whispers/
├── client/       # React frontend
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── server/       # Express backend
│   ├── routes/
│   ├── controllers/
│   └── server.js
```

---

## 🔒 Environment Variables

In both `client` and `server`, create a `.env` file with:

```env
# For server
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---
