🧑‍💼 User Management App (Laravel + React)
A full-stack assignment project built with Laravel 10 (API) and React 18 (Frontend) to manage users with multiple roles. The UI features user creation, grouping, and search via a responsive data table.

🚀 Features
🔧 Backend (Laravel 10)
API to create and list users
Users can have multiple roles (Many-to-Many)
Roles: Author, Editor, Subscriber, Administrator
JSON API endpoints
🌐 Frontend (React 18)
User creation form with:
Full name, Email, Multiple role selection
Stylish Bootstrap UI
Users displayed in a searchable, paginated data table
Grouped by roles (flattened into table view)
Live search across name, email, and role
📦 Requirements
PHP 8.1+
Composer
Node.js 18+
Laravel Sail (optional)
MySQL/PostgreSQL
NPM/Yarn
🛠️ Backend Setup (Laravel) & Frontend Setup (React)
unzip

cd laravel-api

# Install dependencies
composer install

# Setup environment
cp .env.example .env
php artisan key:generate

# Setup database
php artisan migrate --seed

# Serve app 
php artisan serve


💻 Frontend Setup (React)
bash
Copy
Edit
cd react-client

# Install dependencies
npm install

# Start development server
npm run dev
<img width="1254" height="827" alt="image" src="https://github.com/user-attachments/assets/55ce2d02-51a0-435f-957f-b4f04b8fade0" />
<img width="1724" height="809" alt="image" src="https://github.com/user-attachments/assets/dfcab343-37ae-40fc-a53c-9294d50b9bb6" />
