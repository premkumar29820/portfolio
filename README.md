# Thanushiya T — Portfolio (MERN)

A full-stack rebuild of the portfolio: React frontend, Express + MongoDB backend.

```
backend/     Express API — projects + contact messages, stored in MongoDB
frontend/    React (Vite) site — Home, About, Projects, Contact
```

## Quick start (local)

```bash
# 1. Backend
cd backend
npm install
cp .env.example .env      # then fill in MONGO_URI (see backend/README.md)
npm run seed               # loads the project list into MongoDB once
npm run dev                # http://localhost:5000

# 2. Frontend (in a new terminal)
cd frontend
npm install
cp .env.example .env       # VITE_API_URL=http://localhost:5000
npm run dev                 # http://localhost:5173
```

## What changed from the plain HTML/CSS version

- **New UI**: an editorial, minimal design — Cormorant Garamond serif headings on
  Work Sans body text, a warm ivory background, deep forest-green accent, thin hairline
  dividers instead of cards, four real routed pages instead of one scrolling file.
- **Real backend**: projects now live in MongoDB and are fetched via `GET /api/projects`
  instead of being hardcoded in the page. Contact form submissions are saved via
  `POST /api/contact` instead of opening an email client.

## Deploying both pieces live

Full step-by-step instructions (with free-tier hosts) are in:
- `backend/README.md` — MongoDB Atlas + Render
- `frontend/README.md` — Vercel (or Netlify)

Order to do it in: MongoDB Atlas → backend on Render → note its URL → frontend on
Vercel with `VITE_API_URL` set to that backend URL → go back and set the backend's
`CLIENT_ORIGIN` to the Vercel URL so CORS allows it.

## Known gaps to be aware of

- The `/api/contact` GET route and the write routes on `/api/projects` aren't
  password-protected — fine solo, but add an API key or JWT check before sharing the
  API publicly. Ask if you'd like this added.
- Free-tier Render backends spin down when idle, so the first request after a while
  takes ~30 seconds.
