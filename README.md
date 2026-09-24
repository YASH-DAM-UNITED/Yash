# Yashwanth.L React Cinematic Portfolio — Fixed Cloudflare Build

This version fixes the Cloudflare/Vite ESM build error.

## Important
If replacing an existing GitHub repository, DELETE any old:
- vite.config.js / vite.config.ts / vite.config.mjs
- wrangler.toml / wrangler.json / wrangler.jsonc
- package-lock.json / bun.lock / bun.lockb

Then copy ALL files from this folder into the repository root.

## Cloudflare
Build command: npm run build
Build output directory: dist

For Workers Builds using a deploy command:
npx wrangler deploy

The project is explicitly ESM (`"type": "module"`) and does NOT require `@cloudflare/vite-plugin`.

## Before publishing
Replace the placeholders in `src/main.jsx`:
- YOUR_EMAIL_HERE
- YOUR_LINKEDIN_URL
- YOUR_GITHUB_URL
