# Assignment-Week-5
# 📝 MongoDB CRUD App

A simple Node.js + Express.js + MongoDB application that demonstrates how to **Create**, **Read**, **Update**, and **Delete** (CRUD) items using a RESTful API and Mongoose.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Environment Config**: dotenv
- **Dev Tool**: nodemon

---

## 📁 Folder Structure

crud-app/
├── models/ # Mongoose schemas

   │ └── Item.js

├── routes/ # Express routes


---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crud-app.git
cd crud-app


    │ └── items.js

├── .env # Environment variables (MongoDB URI)

├── server.js # Application entry point

├── package.json

---

## 2. Install Dependencies
 - **npm install**

## 3. Create .env File
Create a .env file in the root directory and add:

MONGO_URI=mongodb://localhost:27017/crud_db
PORT=5000

# For production
npm start

# For development (auto-restart with changes)
npm run dev


Server should be running at:

http://localhost:5000

📮 API Endpoints
Base URL: http://localhost:5000/api/items
