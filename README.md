# Deepti S — Portfolio

A React + Vite portfolio site: Home, About, Skills, Experience, Projects,
Certifications, Resume, and Contact.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

To build a production version:

```bash
npm run build
npm run preview   # serves the built version locally
```

## 2. Add your resume PDF

Put your resume file at:

```
public/resume.pdf
```

The filename must be exactly `resume.pdf` (lowercase) — the "Download Resume"
buttons in the Hero and Resume sections both link to `/resume.pdf` and will
work automatically once the file is there. Delete `public/PUT_RESUME_HERE.txt`
once you've added it.

## 3. Fill in the remaining project details

Open `src/components/Projects.jsx`:

- **Search Engine** and **Import-Export System** only have placeholder
  descriptions (marked with an "add details" tag on the card) — I didn't
  have enough information about these two to describe them accurately, so
  replace the `description`, `tech`, and `features` fields with the real
  details.
- Every project's `github` and `demo` fields are set to `null`. Add your
  real repository/deployment URLs as strings, e.g.:
  ```js
  github: "https://github.com/sdeepti2136/job-portal",
  demo: "https://job-portal-demo.vercel.app",
  ```
  Until you do, the GitHub button shows as disabled and the Live Demo
  button stays hidden — so nothing broken ever ships.

## 4. Contact form

The contact form does not have a backend, so it can't silently "send" a
message on its own — that would be a fake confirmation. On submit, it opens
the visitor's email client with the message pre-filled (a `mailto:` link).

If you'd rather have messages submit directly without opening an email
client, the simplest secure option is a form-backend service:

- **Formspree** (formspree.io) — free tier, you POST the form directly to
  them, no server needed, no secret key exposed in the frontend.
- **EmailJS** (emailjs.com) — similar idea, sends via your own email
  provider.

Both let you swap the `handleSubmit` function in `src/components/Contact.jsx`
for a `fetch()` call to their endpoint, with no backend of your own to host.

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/sdeepti2136/deepti-portfolio.git
git push -u origin main
```

(Create the empty `deepti-portfolio` repo on GitHub first, or swap the URL
above for whatever repo name you use.)

## 6. Deploy on Vercel

1. Go to https://vercel.com and sign in with your GitHub account.
2. Click **Add New → Project** and import the `deepti-portfolio` repo.
3. Vercel auto-detects Vite — leave the default build settings:
   - Build command: `vite build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a URL like
   `https://deepti-portfolio.vercel.app` (or a random subdomain you can
   rename in Project Settings → Domains).

## 7. Use the live URL in job applications

Once deployed:

- Add the Vercel URL to your **resume** (header, next to email/phone).
- Add it to your **LinkedIn** profile under Contact Info → Website.
- Include it in the **portfolio/website** field on job application forms
  (Cognizant, Concentrix, IBPS-adjacent MNC portals, etc. often have one).
- Add it to your **email signature** if you use one for follow-ups.

## GitHub repositories widget

The brief mentioned optionally pulling live repos from the GitHub API. This
was intentionally left out: calling the GitHub API from the browser on every
page load is unauthenticated-rate-limited and adds a loading/failure state
for no real benefit on a portfolio with a handful of hand-picked projects.
The Projects section already lists your best work with real links once you
fill them in (see step 3) — that's more curated than an auto-pulled repo
list would be. If you later want a live "recent repos" widget, the secure
approach is a small serverless function (e.g. a Vercel API route) that calls
GitHub's API server-side, so no token is ever in frontend code.
