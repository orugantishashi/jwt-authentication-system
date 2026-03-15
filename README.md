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
project-folder
│
├── controllers
│ ├── authController.js
│ └── image-controller.js
│
├── routes
│ ├── authRoutes.js
│ └── uploadimgRoutes.js
│
├── middleware
│ ├── authMiddleware.js
│ ├── isAdmin.js
│ └── upload-middleware.js
│
├── models
│ ├── Data.js
│ └── Image.js
│
├── helpers
│ ├── cloudinaryHelper.js
│ └── imgdeletehelper.js
│
├── config
│ ├── db.js
│ └── cloudinary.js
│
├── public
│ ├── index.html
│ ├── login.html
│ ├── home.html
│ ├── admin.html
│ └── script.js
│
├── server.js
├── package.json
└── README.md


---

## Installation

Clone the repository:


git clone https://github.com/orugantishashi/jwt-authentication-system.git


Move into the project folder:


cd jwt-authentication-system


Install dependencies:


npm install


---

## Environment Variables

Create a `.env` file in the root directory.


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

PORT=3000


---

## Run the Server

Start the server:


node server.js


Server will run at:


http://localhost:3000


---

## API Endpoints

### Register User


POST /api/auth/register


Body:


{
"name": "John",
"email": "john@email.com
",
"password": "123456",
"role": "user"
}


---

### Login User


POST /api/auth/login


Body:


{
"email": "john@email.com
",
"password": "123456"
}


Returns JWT token.

---

### Get Profile (Protected Route)


GET /api/auth/profile


Header:


Authorization: Bearer TOKEN


---

### Admin Route


GET /api/auth/admin


Only users with admin role can access.

---

## Image APIs

### Upload Image


POST /api/image/upload


Header:


Authorization: Bearer TOKEN


Body (form-data):


file: image file


This uploads the image to Cloudinary and stores its URL and publicId in MongoDB.

---

### Get All Images


GET /api/image/getimg


Header:


Authorization: Bearer TOKEN


Returns all uploaded images.

---

### Delete Image


DELETE /api/image/delete/:id


Header:


Authorization: Bearer TOKEN


Rules:

- Only the user who uploaded the image can delete it.
- Image is deleted from Cloudinary and MongoDB.

---

## How Role-Based Access Works

1. User registers with role user or admin.
2. On login, the backend generates a JWT token.
3. The token stores user ID and role.
4. Middleware verifies the token.
5. Admin-only routes check the user role.

---

## Image Ownership Security

Each image stores:


uploadedBy → userId


When deleting an image:

1. The backend checks the logged-in user ID.
2. Compares it with the image uploader ID.
3. If they match → image can be deleted.
4. If not → access denied.

---

## Future Improvements

- Add Logout Feature
- Add Refresh Tokens
- Add Image Pagination
- Add Image Search
- Improve UI

---

## Author

Shashi Kumar  
Backend Developer (Node.js / Express / MongoDB)

GitHub:  
https://github.com/orugantishashi
