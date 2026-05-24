# Vishnu Tour & Travel — React + Tailwind CSS Website

A full multi-page travel agency website built with **React 18**, **Vite**, **Tailwind CSS**, and **React Router v6**.

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Landing page with hero, package preview, why us, testimonials |
| `/about` | `About.jsx` | Company story, team, stats |
| `/packages` | `Packages.jsx` | All tour packages listing |
| `/packages/:id` | `PackageDetail.jsx` | Individual package detail with itinerary |
| `/why-us` | `WhyUs.jsx` | Why choose us, process steps |
| `/testimonials` | `Testimonials.jsx` | All customer reviews |
| `/contact` | `Contact.jsx` | Contact info, map, office hours |
| `/booking` | `Booking.jsx` | Booking inquiry form |

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### 3. Build for production
```bash
npm run build
```
Built files will be in the `dist/` folder.

### 4. Preview production build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Fixed navigation with mobile menu
│   ├── Footer.jsx         # Footer with links & social icons
│   ├── PageHero.jsx       # Reusable page hero banner
│   └── WhatsAppFloat.jsx  # Floating WhatsApp button
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Packages.jsx
│   ├── PackageDetail.jsx
│   ├── WhyUs.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Booking.jsx
├── data/
│   └── packages.js        # All package data (easy to edit)
├── App.jsx                # Router setup
├── main.jsx               # Entry point
└── index.css              # Tailwind + global styles
```

## Customization

- **Change company info**: Update phone, email, and address in `Footer.jsx`, `Contact.jsx`, and `Booking.jsx`
- **Add/edit packages**: Edit `src/data/packages.js`
- **Change colors**: Edit `tailwind.config.js` and CSS variables in `index.css`
- **Change images**: Replace Unsplash URLs with your own image paths

## Theme Colors

| Variable | Value | Use |
|---|---|---|
| `--green` | `#1E3D2F` | Primary dark green |
| `--gold` | `#D4AF37` | Accent gold |
| `--blue` | `#2E86C1` | CTA buttons |
| `--sand` | `#F4E8D8` | Background sections |
