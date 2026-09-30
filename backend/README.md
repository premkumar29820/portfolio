# Portfolio API (Express + MongoDB)

Provides two things the frontend needs:
- `GET /api/projects` — the project list, stored in MongoDB instead of hardcoded
- `POST /api/contact` — saves contact-form submissions to MongoDB

## 1. Run it locally

```bash
cd backend
npm install
cp .env.example .env
```

Fill in `.env`:
- `MONGO_URI` — see step 2 below to get this from MongoDB Atlas
- `CLIENT_ORIGIN` — leave as `http://localhost:5173` for local dev with the Vite frontend

Then:

```bash
npm run seed    # populates the projects collection once
npm run dev     # starts the API on http://localhost:5000
```

Check it worked: open `http://localhost:5000/api/projects` in your browser — you should see JSON.

## 2. Create a free MongoDB database (MongoDB Atlas)

1. Go to https://www.mongodb.com/cloud/atlas/register and create a free account.
2. Create a free **M0** cluster (no credit card needed).
3. Under **Database Access**, add a database user with a username and password (save these).
4. Under **Network Access**, add IP address `0.0.0.0/0` (allow access from anywhere) — simplest for a small portfolio project.
5. Click **Connect** → **Drivers**, copy the connection string. It looks like:
   `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
6. Paste it into `.env` as `MONGO_URI`, replacing `<username>` and `<password>` with the real values, and add `/portfolio` before the `?` so it targets a database named `portfolio`:
   `mongodb+srv://you:yourpassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`

## 3. Deploy the backend (Render, free tier)

1. Push this `backend` folder to a GitHub repo (it can be its own repo, or a folder in a bigger one).
2. Go to https://render.com, sign up, click **New +** → **Web Service**, connect your GitHub repo.
3. Settings:
   - **Root directory**: `backend` (if it's a folder inside a bigger repo)
   - **Build command**: `npm install`
   - **Start command**: `npm start`
4. Under **Environment**, add the same variables as your `.env`:
   - `MONGO_URI` = your Atlas connection string
   - `CLIENT_ORIGIN` = your deployed frontend URL (you'll get this in step 4 below — you can update it after deploying the frontend)
5. Deploy. Render gives you a URL like `https://your-api.onrender.com`. Test it: visit `https://your-api.onrender.com/api/projects`.
6. Once deployed, run the seed script once against production data. Easiest way: temporarily set `MONGO_URI` in your local `.env` to the same Atlas string and run `npm run seed` from your machine — it seeds whichever database the URI points to, local or Atlas.

Render's free tier spins down after inactivity, so the first request after a while can take ~30 seconds to wake up — normal for a free-tier demo.

## API reference

| Method | Route              | Body                              | Description                     |
|--------|---------------------|------------------------------------|----------------------------------|
| GET    | `/api/projects`     | —                                   | List all projects                |
| GET    | `/api/projects/:id` | —                                   | Get one project                  |
| POST   | `/api/projects`     | `{ title, description, tech[], repoUrl, liveUrl, order }` | Add a project |
| PUT    | `/api/projects/:id` | any of the above fields            | Edit a project                   |
| DELETE | `/api/projects/:id` | —                                   | Delete a project                 |
| POST   | `/api/contact`      | `{ name, email, message }`         | Save a contact form submission   |
| GET    | `/api/contact`      | —                                   | List saved messages (basic, unauthenticated — see note below) |

**Security note:** `GET /api/contact` and the write routes on `/api/projects` have no login check, so right now anyone who finds the URL could read messages or edit your projects. That's fine while you're the only one using it, but before sharing the API publicly, add a simple API-key or JWT check on those routes (ask me and I can add one).
