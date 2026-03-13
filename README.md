# Wedding Invite SaaS - Platform Undangan Pernikahan Digital

[![GitHub stars](https://img.shields.io/github/stars/abraham-yusuf/pernikahan-web.svg)](https://github.com/abraham-yusuf/pernikahan-web/stargazers)

## Deskripsi
Platform SaaS untuk buat dan jual undangan pernikahan digital custom. User bisa pilih dari library template wedding theme (modern, vintage, floral, etc.), customize teks/foto, tambah RSVP/guest management, lalu generate/share. Monetisasi via subscription ($5-20/bulan) atau per-undangan ($1-5). Dibangun dari MVP React/Next.js, sekarang dengan backend untuk multi-user.

Manfaatkan GitHub Student Developer Pack: Stripe untuk payment, Appwrite untuk auth/backend, DigitalOcean untuk hosting, MongoDB untuk database templates.

Coding tasks dibantu Claude Opus sebagai AI agent untuk generate components/templates.

## Tech Stack
- **Frontend**: Next.js (SSR untuk SEO), Vite (build), Tailwind CSS, React Hook Form (customization editor).
- **Backend**: Appwrite (auth, database, storage) atau Supabase.
- **Database**: MongoDB Atlas (store templates, user data, RSVPs).
- **Payment**: Stripe (integrasi checkout).
- **Generation**: Bannerbear/CraftMyPDF API untuk auto-generate PDF/image personalized.
- **Deployment**: Vercel/DigitalOcean (credits gratis).
- **AI Agent**: Claude Opus untuk coding; GitHub Copilot untuk suggestions.

## Instalasi
1. Clone repo: `git clone https://github.com/abraham-yusuf/pernikahan-web.git`
2. Install deps: `npm install` (frontend) & setup backend via Appwrite dashboard.
3. Env vars: Tambah STRIPE_KEY, APPWRITE_ENDPOINT, etc. di `.env`.
4. Run dev: `npm run dev` (frontend); start backend locally jika perlu.
5. Deploy: Push ke Vercel atau DigitalOcean.

## Cara Pakai (untuk Customer)
- Sign up/login.
- Pilih template dari library (upload new theme via admin).
- Customize: Edit teks, upload foto, atur theme colors.
- Tambah fitur: RSVP form, guest list, map.
- Bayar via Stripe untuk download/share link.
- Admin: Dashboard untuk manage templates/payments.

## Monetisasi
- Tier: Free (basic template), Premium ($10/bulan: unlimited templates, remove watermark).
- Jual ke customer via website atau marketplace seperti Etsy/Product Hunt.

## Kontribusi
- Buat issue untuk new template/theme.
- Gunakan Claude Opus prompt: "Generate Next.js component for wedding template editor with theme selector."
- Ikuti workflow di [Workflow.md](./Workflow.md).

## Lisensi
MIT License.

## Kontak
- GitHub: @abraham-yusuf
- X: @bram0511
- Email: [abrahamyusuf.eth@gmail.com]

Wedding Today! 💍🚀
