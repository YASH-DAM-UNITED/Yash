# Yashwanth.L — 3D Portfolio

A React/Vite cinematic portfolio using React Three Fiber, Three.js, Framer Motion and GSAP-ready architecture.

## Important character note
The included opening avatar is a procedural 3D placeholder with spectacles. It is NOT claimed to be Yashwanth's likeness.
To create a character that actually resembles Yashwanth, replace it with a rigged GLB/GLTF model based on reference photos.

## GitHub → Cloudflare
This package includes a `postinstall` build because the connected Cloudflare deployment flow previously jumped directly to `npx wrangler deploy`.
During package installation, `vite build` creates `dist/`; Wrangler then deploys that directory.

Repository root:
- package.json
- vite.config.js
- wrangler.jsonc
- index.html
- src/
- public/

## Local
npm install
npm run dev

## Contact placeholders
Replace in `src/main.jsx`:
- YOUR_EMAIL_HERE
- YOUR_LINKEDIN_URL
- YOUR_GITHUB_URL
