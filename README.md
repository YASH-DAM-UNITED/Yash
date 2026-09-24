# Yashwanth.L React Portfolio

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
The production files will be in `dist/`.

## Cloudflare Pages
Connect the GitHub repository or upload the project.
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

## Before launch
In `src/main.jsx`, replace:
- `YOUR_EMAIL_HERE`
- `YOUR_LINKEDIN_URL`
- `YOUR_GITHUB_URL`

## Intro behavior
There is NO Enter/Start button. The site opens immediately.
The intro uses a CSS-built stylized character with spectacles. It starts far away, walks/zooms toward the foreground, raises a hand toward the profile panel, and then reveals Yashwanth's profile information.

## Grade wording
The intro currently says `Academic profile: A+ presentation` because no verified CGPA/percentage was supplied. Replace this with the actual grade before publishing if you want an academic result displayed as a factual credential.
