# Workflow Pengembangan - Wedding Invite SaaS

## 1. Overview
GitHub Flow dengan fokus SaaS: Iterasi fitur user/payment. Gunakan AI (Claude Opus) untuk tasks seperti generate template code.

## 2. Tools
- Next.js/Appwrite.
- Stripe Dashboard.
- Claude Opus: Prompt untuk "Build Stripe integration in Next.js API route."

## 3. Proses
### 3.1 Planning
- Issue: "Add template library endpoint."

### 3.2 Development
1. Branch: `git checkout -b feature/template-library`
2. Code dengan AI help.
3. Test: Local + e2e (Cypress).

### 3.3 Review & Deploy
- PR review.
- Merge → Auto-deploy via Vercel.
- Monitor: New Relic.

### 3.4 Release & Marketing
- Test payment flow.
- Promosi di X (@bram0511) atau Reddit.

Best practices: Weekly releases untuk new themes.
