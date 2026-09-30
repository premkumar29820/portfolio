# Portfolio Frontend (React + Vite)

Four pages — Home, About, Projects, Contact — built with React Router. Projects are
fetched from the backend API; the contact form posts to it too.

## 1. Run it locally

```bash
cd frontend
npm install
cp .env.example .env
```

Make sure the backend is running first (see `../backend/README.md`), then in `.env`
keep `VITE_API_URL=http://localhost:5000` (or whatever port your backend uses).

```bash
npm run dev
```

Visit `http://localhost:5173`.

## 2. Deploy it (Vercel, free tier)

1. Push this `frontend` folder to a GitHub repo (same repo as the backend is fine, as
   long as you set the right root directory).
2. Go to https://vercel.com, sign up, click **Add New** → **Project**, import your repo.
3. Settings:
   - **Root directory**: `frontend`
   - **Framework preset**: Vite (auto-detected)
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
4. Under **Environment Variables**, add:
   - `VITE_API_URL` = your deployed backend URL, e.g. `https://your-api.onrender.com`
5. Deploy. Vercel gives you a URL like `https://your-portfolio.vercel.app`.
6. Go back to the backend's environment variables on Render and set `CLIENT_ORIGIN` to
   this Vercel URL, then redeploy the backend so CORS allows requests from it.

Netlify works the same way if you'd rather use that: same build command and output
folder, environment variable set under **Site settings → Environment variables**.

## Customizing

- **Colors/fonts**: CSS variables at the top of `src/index.css` (`--ink`, `--accent`,
  `--serif`, `--sans`, etc.) control the whole look.
- **Content that's hardcoded** (About text, skills, education, contact details): edit
  directly in `src/pages/*.jsx`.
- **Projects**: no longer hardcoded — edit them via the backend API (`POST`/`PUT`/`DELETE`
  on `/api/projects`), or re-run `npm run seed` in the backend after editing `seed.js`.
- **Photo / resume**: replace `public/photo.jpg` and `public/resume.pdf` with your own
  files of the same name.
- **Instagram link**: in `src/components/SocialLinks.jsx`, swap in your real profile URL.
