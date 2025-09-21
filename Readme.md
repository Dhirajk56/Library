
---

# 📚 Library Management System

A full-stack **Library Management System** built with **React** and **Node.js + Express**, designed to help libraries manage books, members, and transactions like book issuing, returning, and inventory.

---

## 🌐 Tech Stack

| Layer    | Technology                 |
| -------- | -------------------------- |
| Frontend | React, Axios, React Router |
| Backend  | Node.js, Express.js        |
| Database | MongoDB (Mongoose ORM)     |
| Auth     | JWT (JSON Web Tokens)      |
| Styling  | Bootstrap / Tailwind CSS   |
| API Tool | Postman                    |

---

## ⚙️ Features

### 👤 Admin

* Login & Logout
* Add/Remove/Edit Books
* View all members and issued books
* Issue/Return books

### 📚 Book Management

* Add new books
* Update book information
* Delete books
* Search books by name, author, or genre

### 👥 Member Management

* Register new members
* View member activity

### 🔒 Authentication

* JWT-based secure login
* Protected routes for admin

---

## 🛠️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system
```

---

## 📦 Backend Setup (Node.js)

```bash
cd backend
npm install
```

### 🔧 Create `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 🚀 Start Backend Server

```bash
npm run dev
```

---

## 🌐 Frontend Setup (React)

```bash
cd ../frontend
npm install
```

### 🔧 Optional: Configure API Endpoint

If your backend is on a different domain/port, update the base URL in `axios` calls or use `.env`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 🚀 Start Frontend

```bash
npm start
```

---

## 🔍 Folder Structure

```
library-management-system/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│
└── README.md
```

---

## 🧪 API Endpoints (Sample)

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | `/api/admin/login` | Admin Login            |
| GET    | `/api/books/`      | Get all books          |
| POST   | `/api/books/`      | Add new book           |
| PUT    | `/api/books/:id`   | Update book info       |
| DELETE | `/api/books/:id`   | Delete book            |
| POST   | `/api/issue`       | Issue a book to member |
| POST   | `/api/return`      | Return a book          |

---

## ✅ Future Improvements

* Search filters with pagination
* Barcode scanning for books
* Student dashboard
* Notifications on due dates
* Role-based access (Admin, Librarian, User)

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
