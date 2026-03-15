# JWT Role-Based Authentication & Image Management System

## Project Overview

This project is a full authentication and image management system built using HTML (frontend) and Node.js + Express (backend) with MongoDB as the database.

The system supports:

- User registration and login
- JWT authentication
- Role-based access control (Admin/User)
- Image upload
- Image listing
- Secure image deletion (only uploader can delete)

Images are stored using Cloudinary, and their metadata is stored in MongoDB.

After login:

- Admin users are redirected to the admin dashboard
- Normal users are redirected to the home page

---

## Features

### Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Authentication
- Protected Routes
- Role-Based Access (Admin / User)

### Image Management
- Upload images
- Store images in Cloudinary
- Save image URL and publicId in MongoDB
- Fetch all uploaded images
- Delete images
- Only the user who uploaded the image can delete it

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- JSON Web Token (JWT)
- bcrypt

### Image Storage
- Cloudinary
- Multer

---

## Project Structure
