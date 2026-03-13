# Product Requirements Document (PRD) - Wedding Invite SaaS

## 1. Overview
### 1.1 Tujuan
Bangun SaaS untuk jual undangan pernikahan digital dengan library template beragam. Customer bayar untuk akses premium, generate custom invites, manage guests. Target revenue dari subscription/per-use.

### 1.2 Scope
- In: Multi-templates, user auth, customization editor, payment, RSVP/guest mgmt, admin dashboard.
- Out: Live streaming (tambah later).

### 1.3 Target Audience
- Pasangan menikah/customer di Indonesia (fokus theme lokal seperti adat Jawa).
- Freelancer/desainer yang jual service via platform.

## 2. Fitur SaaS
### 2.1 User Dashboard
- Sign up/login (email/Google via Appwrite).
- Library templates: 20+ wedding themes (upload/edit via admin).

### 2.2 Template Editor
- Pilih theme, customize teks/foto/colors.
- Preview real-time.
- Integrate Bannerbear untuk generate personalized invites dari CSV (bulk send).

### 2.3 RSVP & Guest Management
- Form RSVP, track responses.
- Guest list import/export.

### 2.4 Payment & Monetisasi
- Stripe checkout untuk tier premium.
- Free trial: 1 template basic.

### 2.5 Admin Dashboard
- Manage templates, users, analytics (revenue, usage).

## 3. Persyaratan Teknis
- **Architecture**: Next.js frontend, Appwrite backend.
- **Scalability**: Cloud hosting via DigitalOcean.
- **Security**: Auth, HTTPS, data encryption.
- **Integration**: Zapier untuk automate email/send via WhatsApp.

## 4. Assumptions
- Gunakan GitHub Pack untuk nol biaya awal.
- AI (Claude) untuk generate new templates.

## 5. Risks
- Risk: Payment fraud → Mitigation: Stripe fraud tools.
- Risk: Scalability → Mitigation: Cloud credits.

## 6. Success Metrics
- 100 user sign-up bulan pertama.
- $500 revenue dari sales.

Versi: 2.0 (Maret 2026).
