# Connecting Your Domain

This guide walks you through deploying the portfolio and pointing your custom domain at it.

## 1. Push to GitHub

```bash
git add .
git commit -m "Add portfolio site"
git remote add origin https://github.com/bruhjeshhh/portfolio.git
git push -u origin master
```

## 2. Deploy (pick one)

### Option A: Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and import this repo.
3. Vercel auto-detects Vite — leave defaults and click **Deploy**.
4. You'll get a URL like `portfolio-xyz.vercel.app`.

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

### Option C: Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages**.
2. Connect GitHub, set build command `npm run build`, output directory `dist`.

---

## 3. Connect your custom domain

Where you bought the domain determines where you edit DNS.

### If deploying on Vercel

1. In Vercel: **Project → Settings → Domains → Add**.
2. Enter your domain (e.g. `brajesh.dev` and `www.brajesh.dev`).
3. Vercel shows the DNS records to add. Typically:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

4. Add these in your domain registrar's DNS panel.
5. Wait 5–60 minutes for propagation. Vercel issues HTTPS automatically.

### If deploying on Netlify

1. **Site → Domain management → Add custom domain**.
2. Netlify gives you either an A record for `@` or a CNAME for `www`.
3. For apex (`@`), Netlify may ask you to use their nameservers or ALIAS/ANAME record.

### If your domain is on Cloudflare

1. Deploy to Vercel/Netlify as above.
2. In Cloudflare DNS, add the records your host provides.
3. Set proxy to **DNS only** (grey cloud) until SSL is verified.

---

## 4. Verify

```bash
dig yourdomain.com
dig www.yourdomain.com
```

Visit `https://yourdomain.com` — portfolio with valid SSL.

## Troubleshooting

- **Domain not resolving**: DNS can take up to 48h; usually under 1h.
- **SSL pending**: Wait for DNS propagation.
- **404 on refresh**: Ensure `vercel.json` or `public/_redirects` is deployed.
