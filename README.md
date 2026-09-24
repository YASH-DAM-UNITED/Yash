# Yashwanth.L V8 — Safari Safe

Same V7 portfolio and content, with the front-page Data Monolith animation rebuilt for Safari/WebKit stability.

Fixes:
- Fixed outer anchor controls layout.
- Mouse parallax moved to its own wrapper.
- Floating animation moved to a separate wrapper.
- The monolith no longer has two systems writing to the same transform.
- Added WebKit 3D/backface handling.
- Fixed absolute ring/base/scan coordinates.
- Touch devices disable cursor parallax.
- Responsive scaling is isolated from animation transforms.
- V7 About section and expanded 16-technology stack remain intact.

Cloudflare Pages:
Build command: npm run build
Output directory: dist
