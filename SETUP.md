# Deltin Dental Clinic — Setup Guide

## Tech Stack
- **Frontend**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS (Navy #0D1B3E + Gold #F5C518)
- **Database**: PostgreSQL via Prisma ORM
- **Deployment**: Vercel (recommended)

---

## Step 1: Install Node.js
Download from https://nodejs.org (v18 or higher)

---

## Step 2: Install dependencies
Open a terminal in the `deltin-dental-clinic` folder and run:
```bash
npm install
```

---

## Step 3: Set up PostgreSQL database

### Option A — Local (for development)
1. Install PostgreSQL from https://www.postgresql.org/download/
2. Create a database:
   ```sql
   CREATE DATABASE deltin_dental;
   ```
3. Your connection string will be: `postgresql://postgres:yourpassword@localhost:5432/deltin_dental`

### Option B — Free Cloud (recommended for beginners)
Use **Neon** (free tier): https://neon.tech
- Sign up → Create project → Copy the connection string

---

## Step 4: Configure environment variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local` and replace `DATABASE_URL` with your actual connection string

---

## Step 5: Set up the database schema
```bash
npm run db:generate   # Generate Prisma client
npm run db:push       # Push schema to database
```

---

## Step 6: Run the development server
```bash
npm run dev
```
Open http://localhost:3000 in your browser 🎉

---

## Step 7: Deploy to Vercel (Free)
1. Push your project to GitHub
2. Go to https://vercel.com → Import your GitHub repo
3. Add your `DATABASE_URL` in Vercel environment variables
4. Deploy!

---

## Project Structure
```
deltin-dental-clinic/
├── app/
│   ├── page.tsx              ← Home page
│   ├── about/page.tsx        ← About Us
│   ├── services/page.tsx     ← Our Services
│   ├── contact/page.tsx      ← Contact
│   ├── book-appointment/     ← Booking form
│   └── api/
│       ├── appointments/     ← POST/GET bookings
│       └── reviews/          ← POST/GET reviews
├── components/
│   ├── Navbar.tsx            ← Navigation bar
│   ├── Footer.tsx            ← Footer
│   ├── Hero.tsx              ← Home hero section
│   ├── ServicesPreview.tsx   ← Services cards
│   ├── DoctorsSection.tsx    ← Dr. Shubham & Dr. Sakshi
│   ├── TestimonialsSection.tsx
│   ├── StatsSection.tsx
│   ├── CTASection.tsx
│   ├── AppointmentForm.tsx   ← Booking form component
│   └── WhatsAppButton.tsx    ← Floating WhatsApp button
├── lib/
│   └── db.ts                 ← Prisma client
├── prisma/
│   └── schema.prisma         ← Database schema
└── .env.local                ← Your environment variables (create this)
```

---

## Adding Your Logo
Place your logo file at: `public/logo.png`
Then update the Navbar.tsx and Footer.tsx to use `<Image src="/logo.png" .../>` instead of the SVG placeholder.

---

## Clinic Details Already Configured
- **Phone / WhatsApp**: 7090801004
- **Hours**: 9:00 AM – 9:00 PM (Mon–Sun)
- **Doctors**: Dr. Shubham & Dr. Sakshi (Dental Surgeons)
- **Location**: Saipuram Colony, Sonipat

---

## Colors (Brand)
| Color  | Hex       | Usage              |
|--------|-----------|------------------  |
| Navy   | #0D1B3E   | Primary, headers   |
| Gold   | #F5C518   | Accent, buttons    |
| White  | #FFFFFF   | Backgrounds        |
| Light  | #F4F6FB   | Section backgrounds|

---

Need help? Contact the developer or check Next.js docs at https://nextjs.org/docs
