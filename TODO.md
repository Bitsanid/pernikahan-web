# Comprehensive TODO.md - NikahDigital Wedding Invitation SaaS Platform

**Project:** Wedding Invitation SaaS Platform (NikahDigital)  
**Status:** MVP Migration Phase (v2.0) - Q1 2026  
**Target:** Multi-user SaaS with authentication, payment, and advanced features

---

## 📋 PROJECT OVERVIEW

### Vision
Build a SaaS platform to create, customize, and sell digital wedding invitations with:
- Multiple wedding themes (modern, traditional, floral, etc.)
- Full RSVP & guest management
- Payment processing via Stripe
- Admin dashboard for template/user management
- Monetization via subscription tiers and per-invitation sales

### Tech Stack
- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Backend:** Appwrite (auth, database, storage) or Supabase
- **Database:** MongoDB Atlas (templates, user data, RSVPs)
- **Payment:** Stripe
- **PDF Generation:** Bannerbear/CraftMyPDF API
- **Deployment:** Vercel (primary) or DigitalOcean
- **CI/CD:** GitHub Actions (auto-deploy on merge)

---

## 📁 PROJECT STRUCTURE

### Current Source Files
```
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── not-found.tsx           # 404 page
│   ├── favicon.ico
│   └── undangan/[id]/
│       └── page.tsx            # Dynamic template
├── components/
│   ├── Navbar.tsx              # Navigation
│   ├── Footer.tsx              # Footer
│   ├── TemplateCard.tsx        # Template card
│   ├── CountdownTimer.tsx      # Client countdown
│   ├── RSVPForm.tsx            # RSVP form
│   └── templates/
│       ├── ModernElegant.tsx
│       ├── AdatJawa.tsx
│       └── FloralGarden.tsx
└── lib/
    └── data.ts                 # Interfaces & demo data
```

---

## 🎯 CURRENT FEATURES (MVP)

✅ **Completed:**
- Landing page with hero, features, templates, pricing
- 3 wedding templates (Modern Elegant, Adat Jawa, Floral Garden)
- Template gallery with preview cards
- Dynamic template pages
- Countdown timer (client-side)
- RSVP form (client-side storage)
- Guest management display
- Mobile-responsive design
- SEO metadata

❌ **Missing (Required for v2.0):**
- User authentication
- User dashboard
- Database integration
- Template editor
- Stripe payment integration
- Admin dashboard
- Email notifications
- Production deployment

---

## 🔑 DATA MODELS

### WeddingTemplate (3 templates)
```typescript
{
  id: string              // "modern-elegant", "adat-jawa", "floral-garden"
  name: string
  description: string
  category: string        // "Modern", "Tradisional", "Romantis"
  previewColor: string    // Hex color
  accentColor: string
  bgPattern: string       // "geometric", "batik", "floral"
}
```

### WeddingEvent (Demo Data)
- **Couple:** Anisa Rahma & Budi Santoso
- **Date:** June 15, 2026
- **Akad:** 08:00-10:00, Masjid Al-Ikhlas, Jakarta Selatan
- **Resepsi:** 11:00-14:00, Ballroom Hotel Grand Sahid, Jakarta

### RSVPEntry (Client-side only)
```typescript
{
  id: string
  name: string
  attendance: "hadir" | "tidak_hadir"
  jumlahTamu: number
  ucapan: string          // Wishes
  createdAt: string
}
```

---

## 📊 TEMPLATE DETAILS

### 1. Modern Elegant
- **Color Scheme:** Dark navy (#1a1a2e) + Gold (#c9a84c)
- **Pattern:** Geometric SVG background
- **Font:** Serif for headings
- **Style:** Minimalist, corporate, elegant

### 2. Adat Jawa
- **Color Scheme:** Cream (#f8f0e0) + Tan (#d4a574)
- **Pattern:** Batik SVG background
- **Font:** Serif for headings
- **Features:** Quranic verse (QS. Ar-Rum: 21), ornamental dividers
- **Style:** Cultural, traditional, formal

### 3. Floral Garden
- **Color Scheme:** Light cream (#fdf6f0) + Pink (#e8a0bf)
- **Pattern:** Floral emoji decorations
- **Font:** Serif for headings
- **Style:** Romantic, whimsical, garden-themed

---

## 🚀 HIGH PRIORITY TASKS (v2.0)

### 1. Authentication System
- [ ] Setup Appwrite project
  - [ ] Configure email/password auth
  - [ ] Add Google OAuth
  - [ ] Create user schema
- [ ] Build login/signup pages
- [ ] Implement session management
- [ ] Add middleware for protected routes
- [ ] Add logout functionality

### 2. Database Setup
- [ ] Design Appwrite/MongoDB collections
  - [ ] Users
  - [ ] Invitations
  - [ ] RSVP Responses
  - [ ] Templates
  - [ ] Payments
- [ ] Create indexes
- [ ] Implement validation rules

### 3. User Dashboard
- [ ] Dashboard layout (`/dashboard`)
- [ ] My Invitations list page
- [ ] Create new invitation flow
- [ ] Edit invitation page
- [ ] View RSVP responses
- [ ] User profile/settings

### 4. Template Editor
- [ ] Editor page (`/editor/[templateId]`)
- [ ] Form fields:
  - [ ] Couple names, parents
  - [ ] Event dates, times, locations
  - [ ] Love story text
  - [ ] Color scheme selector
  - [ ] Photo uploads
- [ ] Real-time preview
- [ ] Save draft to database
- [ ] Publish invitation

### 5. Payment Integration
- [ ] Setup Stripe account
- [ ] Implement Stripe API routes
  - [ ] Checkout session creation
  - [ ] Webhook handling
  - [ ] Subscription management
- [ ] Payment flow pages
- [ ] Database payment tracking

### 6. RSVP Backend
- [ ] Move RSVP from client to database
- [ ] API routes:
  - [ ] POST /api/rsvp
  - [ ] GET /api/rsvp/[invitationId]
  - [ ] DELETE /api/rsvp/[responseId]
- [ ] Guest analytics
- [ ] CSV export

### 7. Admin Dashboard
- [ ] Admin auth & role checks
- [ ] User management page
- [ ] Template management page
- [ ] Analytics/revenue dashboard
- [ ] Template upload interface

### 8. Deployment
- [ ] Configure Vercel deployment
- [ ] Set environment variables
- [ ] GitHub Actions CI/CD
- [ ] Custom domain setup
- [ ] SSL/HTTPS
- [ ] Error monitoring (Sentry)

---

## 🗂️ NEW ROUTES & PAGES TO CREATE

```
src/app/
├── auth/
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   └── verify/page.tsx
├── dashboard/
│   ├── page.tsx
│   ├── invitations/
│   │   ├── page.tsx
│   │   ├── [id]/edit.tsx
│   │   └── new/page.tsx
│   ├── rsvp/[id]/page.tsx
│   └── settings/page.tsx
├── editor/
│   └── [templateId]/page.tsx
├── payment/
│   ├── checkout/page.tsx
│   ├── success/page.tsx
│   └── cancel/page.tsx
├── admin/
│   ├── page.tsx
│   ├── users/page.tsx
│   ├── templates/page.tsx
│   └── analytics/page.tsx
└── api/
    ├── auth/[...auth].ts
    ├── invitations/route.ts
    ├── rsvp/route.ts
    ├── templates/route.ts
    ├── payment/checkout.ts
    ├── payment/webhook.ts
    └── admin/analytics.ts
```

---

## 💾 DATABASE SCHEMA

### Users Collection
```
- id: string (primary)
- email: string (unique, indexed)
- name: string
- passwordHash: string
- googleId: string (optional)
- tier: "free" | "premium"
- subscriptionId: string (optional)
- createdAt: datetime
- updatedAt: datetime
```

### Invitations Collection
```
- id: string (primary)
- userId: string (FK → Users)
- templateId: string (FK → Templates)
- coupleNames: { bride, groom }
- coupleParents: { bride, groom }
- events: { akad: {date, time, location}, resepsi: {...} }
- customColors: { primary, accent }
- loveStory: string
- mapUrl: string
- customUrl: string (unique, short link)
- status: "draft" | "published" | "archived"
- viewCount: number
- createdAt: datetime
- updatedAt: datetime
```

### RSVPResponses Collection
```
- id: string (primary)
- invitationId: string (FK → Invitations)
- name: string (indexed)
- email: string (optional)
- phone: string (optional)
- attendance: "hadir" | "tidak_hadir"
- guestCount: number
- wishes: string
- createdAt: datetime
- updatedAt: datetime
```

### Templates Collection
```
- id: string (primary)
- name: string
- description: string
- category: string (indexed)
- previewColor: string
- accentColor: string
- bgPattern: string
- componentPath: string (e.g., "ModernElegant")
- uploadedBy: string (optional FK → Users)
- isPublic: boolean
- status: "active" | "inactive" | "pending_review"
- createdAt: datetime
```

### Payments Collection
```
- id: string (primary)
- userId: string (FK → Users)
- stripePaymentId: string
- amount: number
- currency: string (e.g., "usd", "idr")
- tier: "premium"
- status: "completed" | "pending" | "failed"
- invitationId: string (optional)
- createdAt: datetime
```

---

## 🎨 COMPONENT CHECKLIST

### Auth Components
- [ ] LoginForm.tsx
- [ ] SignupForm.tsx
- [ ] ProtectedRoute.tsx

### Dashboard Components
- [ ] InvitationList.tsx
- [ ] CreateInvitationCard.tsx
- [ ] RSVPSummary.tsx
- [ ] InvitationCard.tsx

### Editor Components
- [ ] TemplateEditor.tsx
- [ ] ColorSelector.tsx
- [ ] PhotoUpload.tsx
- [ ] EventDetailsForm.tsx
- [ ] EditorPreview.tsx

### Payment Components
- [ ] PricingCards.tsx
- [ ] CheckoutForm.tsx
- [ ] PaymentStatus.tsx

### Admin Components
- [ ] UserTable.tsx
- [ ] TemplateUploadForm.tsx
- [ ] AnalyticsDashboard.tsx
- [ ] RevenueChart.tsx

### Shared Components
- [ ] Layout.tsx (dashboard layout)
- [ ] ProtectedLayout.tsx
- [ ] LoadingSpinner.tsx

---

## 📝 API ENDPOINTS TO BUILD

### Authentication
- POST `/api/auth/signup` - Register user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout user
- GET `/api/auth/me` - Get current user
- POST `/api/auth/refresh` - Refresh token

### Invitations
- GET `/api/invitations` - List user's invitations
- POST `/api/invitations` - Create new invitation
- GET `/api/invitations/[id]` - Get invitation details
- PUT `/api/invitations/[id]` - Update invitation
- DELETE `/api/invitations/[id]` - Delete invitation
- GET `/api/invitations/[id]/preview` - Get public preview

### RSVP
- POST `/api/rsvp/[invitationId]` - Submit RSVP
- GET `/api/rsvp/[invitationId]` - Get all responses
- DELETE `/api/rsvp/[responseId]` - Remove response
- GET `/api/rsvp/[invitationId]/stats` - Get RSVP statistics

### Templates
- GET `/api/templates` - List all templates
- POST `/api/templates` - Upload new template (admin only)
- PUT `/api/templates/[id]` - Update template (admin only)
- DELETE `/api/templates/[id]` - Delete template (admin only)

### Payments
- POST `/api/payment/checkout` - Create checkout session
- POST `/api/payment/webhook` - Stripe webhook
- GET `/api/payment/history` - Get user payment history

### Admin
- GET `/api/admin/users` - List all users
- GET `/api/admin/analytics` - Get analytics data
- POST `/api/admin/templates` - Upload template
- PUT `/api/admin/templates/[id]` - Edit template

---

## 📋 MEDIUM PRIORITY (v2.1)

### Bulk RSVP & Messaging
- [ ] Bannerbear API integration
- [ ] Zapier WhatsApp integration
- [ ] CSV RSVP import
- [ ] Bulk invitation sending

### Mobile PWA
- [ ] manifest.json
- [ ] Service worker
- [ ] Install to home screen
- [ ] Offline support

### Guest Analytics
- [ ] RSVP statistics dashboard
- [ ] Real-time tracking
- [ ] Export analytics
- [ ] Charts/visualizations

### Email Notifications
- [ ] RSVP confirmation emails
- [ ] Reminder emails
- [ ] Payment receipts
- [ ] Email service integration

---

## 🌍 MONETIZATION

### Free Tier
- 1 basic template
- RSVP online
- Countdown timer
- **Watermark:** NikahDigital
- **Limit:** 1 invitation/month

### Premium Tier
- All templates
- RSVP & guest management
- No watermark
- Custom domain (optional)
- Photo gallery
- Bulk WhatsApp RSVP
- Analytics

### Pricing Options
1. **Subscription:** $10/month (unlimited)
2. **Per-Invitation:** $99,000 IDR (~$6 USD)
3. **Add-ons:** Custom domain, gallery, video

---

## ✅ CHECKLIST FOR LAUNCH

### Code Quality
- [ ] All pages tested on mobile/desktop
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse score 90+
- [ ] No console errors/warnings
- [ ] TypeScript strict mode passing
- [ ] ESLint passes all files
- [ ] Code review completed

### Security
- [ ] OWASP vulnerabilities checked
- [ ] Input validation on all forms
- [ ] CSRF tokens implemented
- [ ] Environment variables secured
- [ ] Database queries sanitized
- [ ] Rate limiting on API routes
- [ ] HTTPS enforced

### Testing
- [ ] Unit tests for utilities
- [ ] Integration tests for API routes
- [ ] E2E tests for user flows
- [ ] Load testing (1000+ concurrent users)
- [ ] Payment flow tested
- [ ] RSVP flow tested

### Performance
- [ ] Database queries optimized
- [ ] Images optimized/lazy-loaded
- [ ] Bundle size < 200KB gzipped
- [ ] First Contentful Paint < 2s
- [ ] API response time < 500ms
- [ ] CSS-in-JS eliminated

### Deployment
- [ ] Environment variables set
- [ ] Database migrations run
- [ ] Backups configured
- [ ] Monitoring/alerting setup
- [ ] Error tracking (Sentry) enabled
- [ ] Analytics configured
- [ ] Custom domain working

---

## 📞 RESOURCES

- **GitHub:** https://github.com/abraham-yusuf/pernikahan-web
- **Creator:** Abraham Yusuf (@bram0511)
- **Email:** abrahamyusuf.eth@gmail.com

### Documentation Links
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Appwrite](https://appwrite.io/docs)
- [Stripe API](https://stripe.com/docs/api)
- [React 19](https://react.dev)

---

## 📈 SUCCESS METRICS

### Month 1 Goals
- [ ] 100 user sign-ups
- [ ] $500 revenue
- [ ] First paying customer
- [ ] 40+ RSVP submissions
- [ ] 95%+ uptime
- [ ] Sub-3s page load

### KPIs
- User acquisition rate
- Free → Premium conversion rate
- RSVP completion rate
- Template popularity
- Revenue per user
- Customer satisfaction (NPS)
- Churn rate

---

**License:** MIT  
**Last Updated:** 2026-03-14
