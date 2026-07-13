# Anapuram Wooden Furniture Work — Website

A premium, multipage React.js (Create React App) website for Anapuram Wooden
Furniture Work, a custom wooden furniture manufacturer & dealer in Kinassery,
Palakkad, Kerala — established 1995.

## Stack

- React.js (Create React App)
- React Router DOM
- Handwritten CSS (Flexbox + Grid, no CSS frameworks)
- Google Fonts: Playfair Display (headings) & Poppins (body/buttons)

## Getting started

```bash
npm install
npm start       # runs the dev server at http://localhost:3000
npm run build   # creates an optimized production build in /build
```

## Pages

- `/` — Home (hero, why-choose-us, about preview, services, featured
  projects, process, testimonials, stats, CTA)
- `/about` — Company story, mission & vision, journey timeline, workshop
  gallery, values
- `/services` — Detailed service breakdown with features for every
  furniture category, plus repair/polishing/carving
- `/contact` — Contact form, business info, map, call/WhatsApp buttons

## Before going live

- **Replace placeholder images.** Every photo currently comes from Unsplash
  as a stand-in for real product photography. Swap the `image` URLs in
  `src/data/content.js` and the `src/pages/*.jsx` files with the client's
  own photos of their furniture and workshop.
- **Update contact details.** Phone number, email, and the Google Maps
  embed query currently use placeholder values — update them in
  `Footer.jsx`, `Contact.jsx`, and `Navbar.jsx` (Call Now button).
- **Add a real favicon** to `public/` (currently referenced but not
  included).

## Project structure

```
src/
  components/   Reusable UI building blocks (Navbar, Footer, Hero, cards, etc.)
  pages/        Home, About, Services, Contact
  css/          Handwritten CSS, one file per page + shared App.css/Navbar.css/Footer.css
  data/         Centralized content: services, gallery, testimonials, process steps
  hooks/        useReveal — IntersectionObserver-based scroll-reveal hook
  assets/       Reserved for local images/icons
```
