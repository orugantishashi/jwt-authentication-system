# JWT Role-Based Authentication System

## Project Overview

This project is a **full authentication system** built using **HTML (frontend)** and **Node.js + Express (backend)** with **MongoDB** as the database.

It supports **user registration, login, JWT authentication, and role-based access control** (Admin/User).

After login:

* **Admin users** are redirected to the **admin dashboard**
* **Normal users** are redirected to the **home page**

---

## Features

* User Registration
* User Login
* Password Hashing using **bcrypt**
* JWT Token Authentication
* Role-Based Access (Admin / User)
* Protected Routes
* MongoDB Atlas Database
* Frontend Integration using HTML & JavaScript

---

## Tech Stack

Frontend:

* HTML
* CSS
* JavaScript

Backend:

* Node.js
* Express.js

Database:

* MongoDB Atlas

Authentication:

* JSON Web Token (JWT)
* bcrypt

---

## Project Structure

```
project-folder
│
├── controllers
│    └── authController.js
│
├── routes
│    └── authRoutes.js
│
├── middleware
│    ├── authMiddleware.js
│    └── isAdmin.js
│
├── models
│    └── Data.js
│
├── config
│    └── db.js
│
├── public
│    ├── index.html
│    ├── login.html
│    ├── home.html
│    ├── admin.html
│    └── script.js
│
├── server.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```
git clone https://github.com/orugantishashi/jwt-authentication-system.git
```

Move into the project folder:

```
cd project-folder
```

Install dependencies:

```
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

---

## Run the Server

Start the server:

```
node server.js
```

Server will run at:

```
http://localhost:3000
```

---

## API Endpoints

### Register User

```
POST /api/auth/register
```

Body:

```
{
 "name": "John",
 "email": "john@email.com",
 "password": "123456",
 "role": "user"
}
```

---

### Login User

```
POST /api/auth/login
```

Body:

```
{
 "email": "john@email.com",
 "password": "123456"
}
```

Returns JWT token.

---

### Get Profile (Protected Route)

```
GET /api/auth/profile
```

Header:

```
Authorization: Bearer TOKEN
```

---

### Admin Route

```
GET /api/auth/admin
```

Only users with **admin role** can access.

---

## How Role-Based Access Works

1. User registers with role **user** or **admin**.
2. On login, the backend generates a **JWT token**.
3. The token stores user ID and role.
4. Middleware verifies the token.
5. Admin-only routes check the user role.

---

## Future Improvements

* Add Logout Feature
* Add Refresh Tokens
* Improve UI
* Add Password Reset

---

## Author

Shashi Kumar
Backend Developer (Node.js / Express)
