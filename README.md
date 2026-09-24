# Yashwanth.L Portfolio — GitHub → Cloudflare no-settings fix

This package is designed for the exact CI flow shown in the Cloudflare logs:

1. Cloudflare installs packages.
2. package.json `postinstall` automatically runs `vite build`.
3. Vite creates `dist/`.
4. Cloudflare's existing/default `npx wrangler deploy` runs.
5. Wrangler uploads `dist/`.

You do NOT need to run a command manually in Cloudflare.

IMPORTANT WHEN REPLACING THE GITHUB REPOSITORY:
- Delete the old repository files first, especially old wrangler/vite/package files.
- Upload every file from this ZIP to the repository root.
- Commit the change.
- Let the existing GitHub-connected Cloudflare build run.

Do not upload a prebuilt dist folder; CI creates it automatically.
