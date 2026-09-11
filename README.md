# Kuveras Fine Jewellery — MERN Web Application

A premium luxury Indian e-commerce web application for **Kuveras Fine Jewellery**, featuring exquisite bridal, temple, antique, and gemstone collections with an interactive mega-menu navigation experience.

---

## 🌟 Tech Stack

### Frontend
- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS v4, Custom Luxury CSS Theme System
- **Icons:** Lucide React
- **Routing:** React Router DOM v7
- **Language:** TypeScript / JavaScript

### Backend
- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js
- **Database:** MongoDB Atlas via Mongoose
- **Security & Utilities:** CORS, Dotenv

---

## 📁 Project Structure

```
kuverasshop-mern/
├── public/                 # Static public assets (images, icons, logo)
├── server/                 # Express backend server
│   ├── config/             # Database connection setup (db.js)
│   ├── models/             # Mongoose schemas (Product, Order, User)
│   ├── routes/             # API routes (productRoutes, orderRoutes)
│   ├── index.js            # Main backend entry point
│   └── package.json        # Backend package definition
├── src/                    # React frontend source code
│   ├── components/         # UI components (Header, Footer, Mega Menu, Cards)
│   ├── data/               # Static product & category datasets
│   ├── types/              # TypeScript interface definitions
│   ├── App.tsx             # Main React application component
│   └── index.css           # Global luxury styling & typography system
├── .env.example            # Environment variable template (sanitized)
├── .gitignore              # Files excluded from Git tracking
├── index.html              # Frontend HTML entry
├── package.json            # Root configuration & scripts
├── tailwind.config.js      # Tailwind styling setup
└── vite.config.ts          # Vite build configuration
```

---

## 🚀 Local Installation & Setup

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher
- **MongoDB Atlas Account**: Database connection URI

### Step 1: Clone Repository
```bash
git clone https://github.com/Sjoshi10262/kuverasshop-mern.git
cd kuverasshop-mern
```

### Step 2: Install Dependencies
Install root (frontend) dependencies:
```bash
npm install
```

Install backend dependencies:
```bash
cd server
npm install
cd ..
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory (or inside `server/`) based on `.env.example`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/kuverasshop?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
FRONTEND_URL=http://localhost:5173
```

> **Note:** Never commit `.env` files to Git repositories.

---

## 🛠️ Build & Start Instructions

### Frontend Build
To build the production-ready Vite frontend:
```bash
npm run build
```
This generates the optimized production build artifacts in the `/dist` directory.

### Backend Server Start
To start the Node/Express backend server:
```bash
npm run start
# or
npm run server
```

### Local Development Mode
To run the frontend dev server:
```bash
npm run dev
```

---

## 🌐 Hostinger Deployment Notes

### 1. Node.js Application Setup
- In Hostinger hPanel, go to **Node.js Web App** manager.
- **Node.js Version:** 18.x or 20.x
- **Application Root:** `/public_html` (or project root directory)
- **Application Startup File / Entry File:** `server/index.js`
- **Application Mode:** `production`

### 2. Environment Variables in Hostinger
Add the required environment variables in Hostinger Node.js configuration panel:
- `PORT` = `5000` (or assigned host port)
- `NODE_ENV` = `production`
- `MONGODB_URI` = `<Your Production MongoDB Connection String>`
- `JWT_SECRET` = `<Your Production Secret Key>`

### 3. Deployment Commands on Hostinger
- **Build Command:** `npm run build`
- **Start Command:** `npm start`
- **Entry File:** `server/index.js`

---

## 🔒 Security Audit Verification
- `.env` files are ignored via `.gitignore`
- No database credentials or private keys committed
- `node_modules/` excluded from repository
- `.env.example` contains sanitized placeholder keys only
