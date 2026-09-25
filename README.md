# Yashwanth.L V10 — Energy Handoff

This version starts from the stable V8 Safari-safe portfolio and keeps the V8.1 long-name alignment fix.

V9's full-page animated wire has been completely removed.

New lightweight section connection:
- IntersectionObserver activates each section only once.
- Tiny white/burgundy energy handoff between sections.
- Section heading receives a short light sweep.
- Tech cards wake in a quick stagger.
- Existing experience timeline receives a glow rather than adding another wire.
- Terminal gets one power-on pulse.
- Contact receives a final completion pulse.
- No continuous scroll listener.
- No full-page SVG.
- No requestAnimationFrame scroll animation.
- Safari/mobile/reduced-motion handling included.

Cloudflare Pages:
Build command: npm run build
Output directory: dist
