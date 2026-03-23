# AIforGood.us — Next.js on Vercel

Production site for [aiforgood.us](https://aiforgood.us) — migrated from GHL funnel to Next.js 14.

## What's fixed vs GHL version
- ✅ Logo background box gone (GHL was wrapping in `<figure>` with its own padding/bg)
- ✅ Mobile layout fully responsive — no GHL CSS interference
- ✅ Stat card "3–5×" renders correctly (GHL font renderer was collapsing the em dash)
- ✅ Full control over fonts, spacing, borders — no overrides needed

## Project structure
```
aiforgood/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Full page (single-page app)
│   └── globals.css     # Complete design system
├── package.json
├── next.config.js
├── tsconfig.json
├── vercel.json
└── .gitignore
```

## Local development
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel (5 minutes)

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel        # follow prompts — auto-detects Next.js
vercel --prod # promote to production
```

### Option B — GitHub + Vercel dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel auto-detects Next.js, no config needed
4. Click Deploy

## DNS cutover (Cloudflare)
After Vercel gives you a deployment URL (e.g. `aiforgood-us.vercel.app`):

1. In Vercel dashboard → Project → Settings → Domains → Add `aiforgood.us`
2. Vercel will show you the DNS records needed
3. In Cloudflare DNS:
   - Add `A` record: `aiforgood.us` → `76.76.21.21` (Vercel's IP)
   - Add `CNAME` record: `www` → `cname.vercel-dns.com`
   - Set both to **DNS only** (grey cloud, not proxied) initially
4. SSL is automatic via Vercel — no cert setup needed
5. Once live, you can re-enable Cloudflare proxy (orange cloud) for CDN benefits

## GHL forms — still connected
All Apply Now, Sponsor, and Intern forms still open as GHL popups via `openForm()`.
The GHL CRM, automations, and pipelines are completely unaffected.

## Updating content
All copy, links, and form URLs are in `app/page.tsx`.
- Form URLs: search for `leadconnectorhq.com`
- Donation links: search for `fastpaydirect.com`
- Logo images: `LOGO_NAV` and `LOGO_FOOTER` constants at top of `page.tsx`
