# 🧑‍💼 User Management App (Laravel + React)

A full-stack assignment project built with **Laravel 10 (REST API)** and **React 18 (Frontend)** to manage users with multiple roles. It includes user creation, role assignment, search, and display in a responsive Bootstrap-powered table.

---

## 🚀 Features

### 🔧 Backend – Laravel 10

- JSON API endpoints to **create** and **list users**
- Users can have **multiple roles** (Many-to-Many)
- Roles: `Author`, `Editor`, `Subscriber`, `Administrator`
- Built with modern Laravel standards and service/repository pattern

### 🌐 Frontend – React 18

- **User creation form** with:
  - Full Name
  - Email
  - Multi-select for roles
- Responsive Bootstrap UI
- **Searchable**, **paginated** user table
- Users are **grouped by roles** and flattened for easy viewing
- **Live search** across name, email, and role

---

## 📦 Requirements

- PHP >= 8.1
- Composer
- Node.js >= 18.x
- MySQL / PostgreSQL
- NPM or Yarn

---

## 🛠️ Backend Setup (Laravel)

```bash
# Navigate into backend folder
cd laravel-api

# Install dependencies
composer install

# Copy .env and generate key
cp .env.example .env
php artisan key:generate

# Set up database and seed roles
php artisan migrate --seed

# Run the development server
php artisan serve
```

---

## 💻 Frontend Setup (React)

```bash
# Navigate into frontend folder
cd react-client

# Install dependencies
npm install

# Run the React app
npm run dev
```

---

## 📸 Screenshots

### 🎯 User Creation Form
<img width="600" alt="User Form" src="https://github.com/user-attachments/assets/55ce2d02-51a0-435f-957f-b4f04b8fade0" />

### 📊 User Table with Search
<img width="800" alt="User Table" src="https://github.com/user-attachments/assets/dfcab343-37ae-40fc-a53c-9294d50b9bb6" />

---

## 📁 Folder Structure

```
EastvangesAssignment/
├── laravel-api/       # Laravel 10 Backend (API)
├── react-client/      # React 18 Frontend
├── README.md
└── .gitignore
```

---

## ✅ Notes

- Make sure your `.env` files are set up correctly for DB access.
- Roles are auto-seeded via Laravel's database seeder.
- API and frontend communicate via `http://localhost:8000/api`.

---

## 📫 Contact

If you have any questions or feedback, feel free to open an issue or reach out.
