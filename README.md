# OLW Landing Page

Marketing landing page for an Airbnb Assistant service, built with Next.js App Router, TypeScript, and Tailwind CSS.

## About Project

This project is a multi-section SaaS-style landing page with reusable UI components and route-based pages.
It includes:

- Responsive navbar and hero/banner
- Partner logos strip
- Service cards
- Pricing section with monthly/yearly toggle
- Tools showcase
- Getting Started flow
- Social proof/reviews
- FAQ accordion and CTA
- Site footer

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Project Structure

```text
src/
	app/
		layout.tsx
		page.tsx
		globals.css
		styles/
			colors.css
		components/
			banner/banner.tsx
			navbar/Navbar.tsx
			partners/partners.tsx
			services/Services.tsx
			pricing/Pricing.tsx
			tools/Tools.tsx
			getStarted/getStarted.tsx
			fewReason/fewReason.tsx
			reviews/Reviews.tsx
			faq/FAQ.tsx
			footer/Footer.tsx
			common/button.tsx
			common/toggle.tsx
	types/
		index.ts
public/
	images, logos, icons, avatars, and SVG assets
```

## What Files Include

- `src/app/layout.tsx`: Global layout, font setup, shared navbar/footer wrapper.
- `src/app/page.tsx`: Home page section composition order.
- `src/app/globals.css`: Global Tailwind import and base app styles.
- `src/app/styles/colors.css`: Design tokens (colors, shadows, reusable utility classes).
- `src/app/components/common/button.tsx`: Shared button component used across sections.
- `src/app/components/common/toggle.tsx`: Reusable toggle control.
- `src/app/components/banner/banner.tsx`: Hero section (headline, CTA, decorative logos/dots).
- `src/app/components/navbar/Navbar.tsx`: Responsive navigation + mobile menu.
- `src/app/components/partners/partners.tsx`: Partner logos row (mobile scroll + desktop row).
- `src/app/components/services/Services.tsx`: Service feature cards.
- `src/app/components/pricing/Pricing.tsx`: Pricing plans, billing toggle, save badge.
- `src/app/components/tools/Tools.tsx`: Tools showcase grid.
- `src/app/components/getStarted/getStarted.tsx`: Step-by-step onboarding cards.
- `src/app/components/fewReason/fewReason.tsx`: Feature/highlight section with media.
- `src/app/components/reviews/Reviews.tsx`: Client review cards.
- `src/app/components/faq/FAQ.tsx`: FAQ accordion and "Get in touch" CTA.
- `src/app/components/footer/Footer.tsx`: Footer links, social icons, copyright bar.
- `src/types/index.ts`: Shared TypeScript types.

## Routes

- `/`
- `/about`
- `/services`
- `/pricing`
- `/blog`
- `/resources`

## Run Locally

1. Install dependencies:
	 `npm install`
2. Start development server:
	 `npm run dev`
3. Open in browser:
	 `http://localhost:3000`

## Scripts

- `npm run dev`: Start local development server.
- `npm run build`: Production build.
- `npm run start`: Run production build locally.
- `npm run lint`: Run lint checks.
