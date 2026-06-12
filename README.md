# Hardev Chudasama — MERN Portfolio

A full-stack MERN portfolio with a retro terminal aesthetic.

## Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | React 18 + Vite               |
| Backend   | Node.js + Express             |
| Database  | MongoDB + Mongoose            |
| Styling   | Pure CSS (retro terminal)     |

## Project Structure

```
hardev-portfolio/
├── client/               # React frontend (Vite)
│   └── src/
│       ├── components/   # Navbar, Hero, About, Projects, Skills, Contact
│       ├── hooks/        # useScroll, useFadeIn, useActiveSection
│       ├── App.jsx
│       └── index.css
├── server/               # Express backend
│   ├── models/           # Contact.js (Mongoose schema)
│   ├── routes/           # contact.js (POST & GET)
│   ├── index.js          # Entry point
│   └── .env.example
└── package.json          # Root scripts
```

## Setup & Run

### 1. Install dependencies
```bash
npm install          # installs concurrently at root
npm run install:all  # installs client + server deps
```

### 2. Configure environment
```bash
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI
```

### 3. Run in development
```bash
npm run dev
# Frontend: http://localhost:5173
# Backend:  http://localhost:5000
```

## API Endpoints

| Method | Route           | Description              |
|--------|-----------------|--------------------------|
| POST   | /api/contact    | Save contact form message |
| GET    | /api/contact    | Get all messages          |
| GET    | /api/health     | Server health check       |

## MongoDB Setup

You can use either:
- **Local**: `mongodb://localhost:27017/hardev-portfolio`
- **Atlas (cloud)**: Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas) and paste the connection string in `.env`

## Deployment

1. Build frontend: `npm run build` (outputs to `client/dist/`)
2. Serve static files from Express in production
3. Deploy to Railway, Render, or Vercel + MongoDB Atlas
