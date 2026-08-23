# Pixelsate — Landing Page

A single-page Next.js (App Router) landing page for Pixelsate. Built with TypeScript + Tailwind CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Structure

- `app/page.tsx` — composes the page from section components, top to bottom.
- `app/layout.tsx` — metadata, fonts (Inter), global styles.
- `components/` — one file per section:
  - `Hero` · `Diagnostic` · `Numbers` · `WhyFive` · `AiHonestly` · `Brands` · `LeadForm` · `Faq` · `Footer`

## Page flow

Hero → The Diagnostic → Numbers → Why 5 Clients → AI, Honestly → Brands → Lead Form → FAQ → Footer.

The Hero and slot-tracker CTAs jump to the `#lead-form` anchor.

## Lead-form email (get submissions in your inbox)

When someone submits the contact form, `components/LeadForm.tsx` POSTs to the API route
`app/api/lead/route.ts`, which validates the data and emails it to you via
[Resend](https://resend.com).

### Setup (5 minutes)

1. Create a free account at **https://resend.com**.
2. Dashboard → **API Keys** → create one (starts with `re_...`).
3. Copy `.env.local.example` to `.env.local` and fill in:
   ```bash
   RESEND_API_KEY=re_your_key
   LEAD_TO_EMAIL=you@yourbusiness.com          # where leads should land
   LEAD_FROM_EMAIL=Pixelsate Leads <onboarding@resend.dev>
   ```
4. Restart the dev server. Submit the form → the lead lands in your inbox.

**Testing vs. production sender:**
- With the shared `onboarding@resend.dev` sender, Resend only delivers to *your own*
  Resend account email — perfect for testing.
- For production, add your domain under Resend → **Domains**, verify the DNS records,
  then set `LEAD_FROM_EMAIL=Pixelsate <leads@yourbusiness.com>`. This also improves
  deliverability (won't land in spam).

**On Vercel:** add the same three variables under Project → **Settings → Environment
Variables**, then redeploy. Never commit `.env.local` (it's already gitignored).

Prefer no backend? Swap the `fetch("/api/lead")` call for a
[Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io) endpoint — but the
Resend route above keeps your data flowing through your own server.

## Customization

- Colors, fonts, and container width live in `tailwind.config.ts` (`accent`, `ink`, `paper`, `muted`).
- Slot tracker counts are the `filled` / `total` constants in `components/WhyFive.tsx`.
- Brand names are the `brands` array in `components/Brands.tsx` — swap for `<img>` logos when available.
