# Sabin Karmacharya — Hospitality Portfolio

Premium, responsive personal portfolio built with **Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion and next-themes**.

> The included images are clearly marked visual placeholders because the supplied project brief did not include Sabin's actual photographs. Replace them in `public/images/` and `public/images/gallery/` without changing the page structure.

## 1. Requirements

- Node.js 18.17+ (Node.js 20 LTS recommended)
- npm

## 2. Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production test:

```bash
npm run build
npm run start
```

## 3. Project structure

```text
app/
  api/contact/route.ts
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  About.tsx
  BackToTop.tsx
  Button.tsx
  Contact.tsx
  Education.tsx
  Experience.tsx
  Footer.tsx
  Gallery.tsx
  Hero.tsx
  Navbar.tsx
  Providers.tsx
  RevealText.tsx
  ScrollProgress.tsx
  SectionHeading.tsx
  Skills.tsx
  SocialLinks.tsx
  ThemeToggle.tsx
lib/
  data.ts
  utils.ts
public/images/
  profile.svg
  gallery/*.svg
```

## 4. Replace the placeholder photos

Put Sabin's real profile image at `public/images/profile.jpg` and update the two `src="/images/profile.svg"` references in `Hero.tsx` and `About.tsx` to `/images/profile.jpg`.

Replace the gallery SVGs with real JPG/WEBP images, then update the `gallery` array in `lib/data.ts`. The array is intentionally centralized so future photo swaps are easy.

## 5. Contact form

The route is `app/api/contact/route.ts`.

Create `.env.local` from `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=karmacharyasabin340@gmail.com
```

Without `RESEND_API_KEY`, the page shows a clear fallback telling visitors to email Sabin directly. With Resend configured, the form sends the enquiry to `CONTACT_TO_EMAIL`.

For production, verify a sending domain in Resend and use a verified sender address instead of the example onboarding sender.

## 6. Deploy to Vercel — GitHub method

1. Create a new GitHub repository.
2. Extract this project locally.
3. In the project folder:

```bash
git init
git add .
git commit -m "Initial Sabin portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

4. Sign in to Vercel.
5. Choose **Add New → Project**.
6. Import the GitHub repository.
7. Keep the detected Next.js settings.
8. Add the environment variables from `.env.local` in **Project Settings → Environment Variables**.
9. Deploy.

## 7. Deploy with Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

Add production environment variables in Vercel before using the contact form.

## 8. Connect a custom .com.np domain

1. Register/obtain your `.com.np` domain through the applicable Nepal domain registrar process.
2. In Vercel, open the project → **Settings → Domains** → add your domain.
3. Vercel will show the DNS records required for your account/domain.
4. At the `.com.np` registrar/DNS manager, configure the root domain as directed by Vercel. For a standard Vercel setup, the root A record is commonly `76.76.21.21`.
5. Configure `www` as a CNAME to `cname.vercel-dns.com` when Vercel instructs you to do so.
6. Return to Vercel and wait for verification.
7. Vercel provisions SSL after the domain is verified.
8. DNS propagation can take time; some changes appear quickly while others can take up to 24–48 hours depending on DNS caching/registrar behavior.

Always follow the exact DNS values shown in the current Vercel domain panel if they differ from these standard values.

## 9. SEO

The project includes:
- Metadata API title/description
- Open Graph and Twitter metadata
- canonical URL from `NEXT_PUBLIC_SITE_URL`
- Person JSON-LD
- `/robots.txt`
- `/sitemap.xml`
- favicon

After deployment, set `NEXT_PUBLIC_SITE_URL` to the final canonical domain.

## 10. Print CV

The Hero's **Download CV** button invokes the browser print dialog. The included print stylesheet hides navigation, gallery and decorative elements and produces a clean printable layout. For a dedicated PDF, add `public/Sabin-Karmacharya-CV.pdf` and change the Hero button to a normal file link.

## 11. Accessibility and performance

The implementation includes semantic sections, skip navigation, keyboard-accessible gallery controls, focus states, reduced-motion handling, responsive touch targets, `next/image`, lazy-loaded below-fold images and minimal client-side state.

## 12. Editing Sabin's information

All core profile, skills, experience, education and gallery data is in `lib/data.ts`. This keeps content separate from reusable UI components.
