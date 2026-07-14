# Mama Naa Kuku Shop — Website

## 1. Run it locally (optional, to preview before deploying)
```
npm install
npm run dev
```
Opens at http://localhost:5173

## 2. Deploy for free (Vercel)
1. Create a free account at vercel.com
2. Push this folder to a new GitHub repository
3. In Vercel, click "New Project" → import that repo
4. Framework preset: **Vite** (auto-detected) → click Deploy
5. You'll get a live URL like `mama-naa-kuku.vercel.app` in about a minute

(Netlify works the same way if you prefer it — drag-and-drop the `dist` folder
after running `npm run build`, or connect the GitHub repo.)

## 3. Connect your own domain
- Buy a domain (Namecheap, GoDaddy, or directly in Vercel) e.g. mamanaakukushop.com
- In Vercel: Project Settings → Domains → add it → follow the DNS instructions

## 4. Before you go live, edit these
- `src/MamaNaaKukuShop.jsx` — WhatsApp number (`waLink`), prices, delivery zones,
  footer address/phone
- `index.html` — replace `mamanaakukushop.com` with your real domain, and the
  phone number in the structured data script at the bottom of `<head>`

## 5. Get found on Google
- Go to Google Search Console (search.google.com/search-console), add your
  domain, and submit it for indexing
- Create a free Google Business Profile (business.google.com) with your shop
  address, hours, and phone — this is what shows up for "chicken delivery
  near me" searches
- Share the link on WhatsApp Status, Instagram, Facebook — early visits and
  links help Google index the site faster
