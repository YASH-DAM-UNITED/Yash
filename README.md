# GitHub → Cloudflare version

This version intentionally contains NO wrangler config file.
With a GitHub-connected Cloudflare Workers Builds project using the default
`npx wrangler deploy`, current Wrangler can detect Vite and create the required
Cloudflare configuration automatically.

Replace the OLD repository contents with this package, especially deleting any
old wrangler.jsonc / wrangler.toml / Cloudflare-specific vite config, then commit.

If Cloudflare opens an automatic configuration PR, merge that PR.

Before publishing, replace in src/main.jsx:
YOUR_EMAIL_HERE
YOUR_LINKEDIN_URL
YOUR_GITHUB_URL
