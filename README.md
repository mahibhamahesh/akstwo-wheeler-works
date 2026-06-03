# AKS Two Wheeler Works — Next.js Website

Premium two-wheeler workshop website built with **Next.js 14** (App Router) + **Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind base + custom styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page (assembles all sections)
│
└── components/
    ├── Navbar.tsx          # Sticky nav with mobile menu
    ├── Hero.tsx            # Full-screen hero section
    ├── Services.tsx        # 9 service cards grid
    ├── About.tsx           # Story + info cards
    ├── WhyUs.tsx           # 4 reason cards
    ├── Gallery.tsx         # Photo gallery grid
    ├── Testimonials.tsx    # Customer reviews
    ├── Contact.tsx         # Booking form + contact info
    ├── Footer.tsx          # Footer with links
    └── FloatingCall.tsx    # Fixed call button
```

## 🎨 Design System

Custom Tailwind colors defined in `tailwind.config.ts`:

| Token | Value | Usage |
|---|---|---|
| `gold` | `#D4A843` | Primary accent |
| `gold-light` | `#F5C842` | Gradient end |
| `ink-900` | `#0A0C10` | Page background |
| `ink-500` | `#1A2035` | Card background |
| `smoke` | `#E8EAED` | Primary text |
| `smoke-muted` | `#8A9BB0` | Secondary text |
| `ruby` | `#E53935` | Logo accent |

## 📸 Adding Real Photos (Gallery)

In `src/components/Gallery.tsx`, replace the placeholder `<div>` inside each gallery item with a Next.js `<Image />`:

```tsx
import Image from "next/image";

// Replace the placeholder div with:
<Image
  src="/images/workshop.jpg"
  alt="Workshop floor"
  fill
  className="object-cover"
/>
```

Add your images to `/public/images/`.

## 📞 Contact Details

- **Phone:** 9384133530
- **Email:** msmahesh8492@gmail.com
- **Location:** Mukkadu
- **Hours:** Mon–Sat 8AM–8PM, Sun 9AM–2PM

## 🛠️ Customisation

- **Colors** → `tailwind.config.ts`
- **Fonts** → `src/app/globals.css`
- **Services list** → `src/components/Services.tsx`
- **Reviews** → `src/components/Testimonials.tsx`
- **Contact info** → `src/components/Contact.tsx` and `src/components/Footer.tsx`

# may-aks-twowheeler-new
