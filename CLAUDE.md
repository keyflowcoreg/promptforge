# PromptForge

200+ production-grade AI prompts for Claude, GPT, Gemini — searchable library with x402 paywall.

## Stack
- Next.js 16 + React 19 + TypeScript + Tailwind v4
- Payment: x402-next (USDC on Base)
- Animations: Framer Motion
- Wallet: 0xCc97e4579eeE0281947F15B027f8Cad022933d7e

## Commands
```bash
pnpm install    # Install deps
pnpm dev        # Development (localhost:4001)
pnpm build      # Production build
pnpm start      # Start production server
```

## Key Files
- `app/page.tsx` — Landing page (client component, hero + FAQ + CTA)
- `app/prompts/page.tsx` — Prompt library (browse/search/filter)
- `app/premium/page.tsx` — Premium prompts page
- `app/api/premium/route.ts` — x402 payment endpoint ($19 USDC)
- `app/success/page.tsx` — Post-purchase page
- `lib/prompts.ts` — Prompt data + categories (9 categories, 200+ prompts)
- `components/PromptCard.tsx` — Individual prompt card
- `components/x402/` — Shared checkout UI (X402Checkout, PaymentSuccess)
- `app/globals.css` — Tailwind v4 theme

## Port Assignment
Production port: 4001 (fleet-manager.sh)

## Payment Flow
1. User browses free prompts → clicks "Unlock All 200+" CTA
2. X402Checkout modal opens → shows wallet + $19 USDC on Base
3. User sends USDC → enters tx hash → verify
4. API returns full prompt library → redirect to /success

## Conventions
- Dark theme (bg-zinc-950)
- No icon libraries — use SVG/emoji
- Framer Motion for all animations
- x402 for payments (never Stripe)
- Cross-sell footer links to ecosystem products
