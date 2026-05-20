# 🚀 Deploy Deltin Dental Clinic to Vercel (Free)

Follow these steps carefully. It takes about **15–20 minutes** total.

---

## STEP 1 — Install Node.js (if not installed)

1. Go to **https://nodejs.org**
2. Download the **LTS version** (green button)
3. Install it — click Next → Next → Finish
4. To verify, open Command Prompt and type:
   ```
   node --version
   ```
   You should see something like `v20.x.x`

---

## STEP 2 — Set up FREE Database (Neon)

Your website needs a database to store appointments and reviews.

1. Go to **https://neon.tech**
2. Click **"Sign Up"** → Sign up with Google (easiest)
3. Click **"Create Project"**
   - Project name: `deltin-dental`
   - Region: **Asia Pacific (Singapore)** — closest to India
4. Click **Create**
5. On the next screen, you'll see a **Connection String** like:
   ```
   postgresql://neondb_owner:xxxx@ep-xxx.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
   ```
6. **Copy this string — you'll need it in Step 4**

---

## STEP 3 — Push Code to GitHub

1. Open **GitHub Desktop** (download from https://desktop.github.com if needed)
   OR open **Command Prompt** in the `deltin-dental-clinic` folder

2. If using Command Prompt, run these commands one by one:
   ```bash
   git init
   git add .
   git commit -m "Deltin Dental Clinic - Initial commit"
   ```

3. Go to **https://github.com** → click **"New repository"**
   - Name: `deltin-dental-clinic`
   - Keep it **Private**
   - Click **Create repository**

4. Copy the commands GitHub shows you under **"push an existing repository"** and run them:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/deltin-dental-clinic.git
   git branch -M main
   git push -u origin main
   ```

---

## STEP 4 — Deploy on Vercel

1. Go to **https://vercel.com**
2. Click **"Sign Up"** → **Continue with GitHub**
3. Click **"Add New Project"**
4. Find `deltin-dental-clinic` in the list → click **Import**
5. In **Environment Variables** section, add:
   - Key: `DATABASE_URL`
   - Value: *(paste your Neon connection string from Step 2)*
6. Click **"Deploy"**
7. Wait 2–3 minutes ✅

---

## STEP 5 — Set Up Database Schema

After deployment, open **Vercel Dashboard** → your project → **Terminal** tab
OR run locally in the project folder:

```bash
npm install
npx prisma generate
npx prisma db push
```

This creates the appointments and reviews tables in your Neon database.

---

## STEP 6 — Your Website is LIVE! 🎉

Vercel gives you a free URL like:
```
https://deltin-dental-clinic.vercel.app
```

You can find it in your **Vercel Dashboard**.

---

## OPTIONAL — Add a Custom Domain (e.g., deltindental.com)

1. Buy a domain from **GoDaddy** or **Namecheap** (~₹800–1200/year)
2. In Vercel Dashboard → your project → **Domains**
3. Add your domain and follow the DNS instructions
4. Your site will be live at `www.deltindental.com` in 30–60 minutes

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Neon Docs: https://neon.tech/docs

**Contact the developer if stuck!**
