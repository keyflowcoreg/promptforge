"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CATEGORIES, TOTAL_PROMPTS } from "@/lib/prompts";
import { PaymentOptions } from "@/components/stripe/PaymentOptions";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const faqItems = [
  {
    q: "What AI models do these prompts work with?",
    a: "Every prompt is designed to work with Claude, GPT-4/4o, Gemini Pro, and other leading models. They use universal prompt engineering principles that produce great results across all major AI platforms.",
  },
  {
    q: "Can I use these prompts commercially?",
    a: "Absolutely. You get a full commercial license. Use them for client work, internal projects, content creation, software development — anything you need. No attribution required.",
  },
  {
    q: "How is the payment processed?",
    a: "Payment is handled via the x402 protocol — a seamless, one-click USDC payment on Base network. No account creation, no subscriptions. Pay once and get instant, permanent access.",
  },
  {
    q: "Are these just generic prompts I can find for free?",
    a: "No. Every prompt is engineered with structured frameworks, specific instructions, output formatting, and edge case handling. These are production-grade templates that took hundreds of hours to develop and test.",
  },
  {
    q: "Will new prompts be added?",
    a: "Yes. The library is continuously updated. Once you unlock Pro access, you get every future prompt added to the library at no additional cost.",
  },
  {
    q: "Can I get a refund?",
    a: "Due to the digital nature of the product and instant delivery, we cannot offer refunds. However, you can try 20 free prompts before purchasing to verify the quality meets your standards.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const handlePaymentSuccess = () => {
    router.push("/premium");
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#23232F]/50 bg-[#0A0A0F]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">PromptForge</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/prompts"
              className="hidden text-sm text-[#71717A] transition-colors hover:text-white sm:block"
            >
              Free Prompts
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/premium"
                className="block rounded-lg bg-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#7C3AED]"
              >
                Unlock Pro — $19
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[120px]" />
          <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/5 blur-[100px]" />
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-1.5 text-sm text-[#A78BFA]"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-[#10B981]"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {TOTAL_PROMPTS}+ battle-tested prompts — new ones added weekly
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl"
          >
            Stop wasting hours on
            <br />
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
              prompts that don&apos;t work.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-[#71717A] md:text-xl"
          >
            You write a prompt. The AI spits out generic garbage. You rewrite it
            three more times. Sound familiar?{" "}
            <span className="text-white font-medium">
              {TOTAL_PROMPTS}+ production-ready prompts
            </span>{" "}
            that extract expert-level results from Claude, GPT, and Gemini — on the first try.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <div className="w-full sm:w-80">
              <PaymentOptions
                productName="PromptForge Pro"
                price={19}
                description={`${TOTAL_PROMPTS}+ AI Prompts — Lifetime Access`}
                x402Endpoint="/api/premium"
                successUrl="/premium"
                onX402Success={handlePaymentSuccess}
                accentColor="#8B5CF6"
              />
            </div>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/prompts"
                className="block w-full rounded-xl border border-[#23232F] bg-[#13131A] px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:border-[#8B5CF6]/40 sm:w-auto"
              >
                Try 20 Free Prompts First
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-col items-center gap-1"
          >
            <p className="text-sm text-[#71717A]">
              Joined by 500+ developers, founders, and creators this month
            </p>
            <p className="text-xs text-[#8B5CF6]/60">
              One-time payment. No subscriptions. Lifetime access.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-[#23232F] bg-[#13131A]/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-[#8B5CF6]"
          >
            Join a fast-growing community of builders who ship faster
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 gap-8 text-center md:grid-cols-4"
          >
            {[
              { number: `${TOTAL_PROMPTS}+`, label: "Expert Prompts", sub: "new ones added weekly" },
              { number: "9", label: "Pro Categories", sub: "every workflow covered" },
              { number: "500+", label: "Active Users", sub: "and growing every day" },
              { number: "4.9/5", label: "Avg. Rating", sub: "from early adopters" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="text-3xl font-black text-white md:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm font-medium text-[#A78BFA]">{stat.label}</p>
                <p className="mt-0.5 text-xs text-[#71717A]">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              The secret top engineers won&apos;t share
            </h2>
            <p className="mx-auto max-w-2xl text-[#71717A]">
              They are not smarter than you. They just use better prompts.
              PromptForge gives you the exact frameworks that turn any AI model
              into a precision tool.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Engineered, Not Guessed",
                description:
                  "Every prompt follows proven frameworks: structured instructions, output formatting, edge case handling, and role assignment. The kind of prompt engineering that takes years to master.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                ),
                title: "Copy. Paste. Ship.",
                description:
                  "No more spending 20 minutes crafting the perfect prompt. Copy a battle-tested template, fill in your specifics, and get production-quality results in seconds.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                ),
                title: "Every Use Case Covered",
                description:
                  "From generating REST APIs to writing pitch decks, from debugging race conditions to creating study guides. 9 categories, 200+ prompts, zero gaps.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="rounded-xl border border-[#23232F] bg-[#13131A] p-8 transition-colors hover:border-[#8B5CF6]/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-[#71717A]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
      <section className="border-y border-[#23232F] bg-[#13131A]/30 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Same AI. Wildly different results.
            </h2>
            <p className="mx-auto max-w-2xl text-[#71717A]">
              The model is not the bottleneck — your prompt is. Here is the same
              task, same AI, two very different prompts.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Without */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-red-500/20 bg-red-950/10 p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-xs text-red-400">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-red-400">
                  Without PromptForge
                </span>
              </div>
              <div className="mb-4 rounded-lg bg-[#0A0A0F] p-4">
                <p className="font-mono text-sm text-[#71717A]">
                  &quot;Write me a landing page for my SaaS product&quot;
                </p>
              </div>
              <div className="rounded-lg bg-[#0A0A0F] p-4">
                <p className="text-sm font-medium text-red-300/70 mb-2">AI Output:</p>
                <p className="text-sm leading-relaxed text-[#71717A]">
                  Generic headline. Bullet points that could describe any product.
                  No clear value proposition. No social proof. You spend 2 more
                  hours rewriting everything anyway.
                </p>
              </div>
            </motion.div>

            {/* With */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  With PromptForge
                </span>
              </div>
              <div className="mb-4 rounded-lg bg-[#0A0A0F] p-4">
                <p className="font-mono text-sm text-[#A78BFA]">
                  &quot;Act as a senior conversion copywriter. Write a SaaS landing
                  page for [product]. Include: hook headline targeting [pain point],
                  3 benefit-driven sections with specifics, social proof block,
                  objection-handling FAQ, and a high-urgency CTA. Tone: confident,
                  concise, zero fluff.&quot;
                </p>
              </div>
              <div className="rounded-lg bg-[#0A0A0F] p-4">
                <p className="text-sm font-medium text-emerald-300/70 mb-2">AI Output:</p>
                <p className="text-sm leading-relaxed text-[#71717A]">
                  Conversion-optimized copy with a scroll-stopping headline, specific
                  benefits that speak to your exact audience, built-in objection
                  handling, and CTAs that drive action.{" "}
                  <span className="text-emerald-400 font-medium">
                    Production-ready in one shot.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Prompts for every workflow
            </h2>
            <p className="mx-auto max-w-2xl text-[#71717A]">
              Nine meticulously organized categories covering the full spectrum
              of AI-assisted work.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                variants={fadeUp}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-between rounded-xl border border-[#23232F] bg-[#13131A] p-5 transition-colors hover:border-[#8B5CF6]/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8B5CF6]/10 text-lg">
                    {cat.icon === "terminal"
                      ? ">"
                      : cat.icon === "pen"
                        ? "P"
                        : cat.icon === "chart"
                          ? "D"
                          : cat.icon === "megaphone"
                            ? "M"
                            : cat.icon === "briefcase"
                              ? "B"
                              : cat.icon === "sparkles"
                                ? "*"
                                : cat.icon === "book"
                                  ? "E"
                                  : cat.icon === "clock"
                                    ? "+"
                                    : "!"}
                  </div>
                  <span className="font-semibold text-white">{cat.name}</span>
                </div>
                <span className="rounded-full bg-[#8B5CF6]/10 px-3 py-1 text-sm font-medium text-[#A78BFA]">
                  {cat.count}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-[#23232F] py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Three steps to better AI output
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Browse & Search",
                description:
                  "Find the perfect prompt for your task. Filter by category, search by keyword, or browse the full library.",
              },
              {
                step: "02",
                title: "Copy & Customize",
                description:
                  "One-click copy to clipboard. Fill in your specific context where indicated. Each prompt is a framework, not a rigid script.",
              },
              {
                step: "03",
                title: "Paste & Ship",
                description:
                  "Drop it into Claude, GPT, or Gemini. Get structured, high-quality output on the first try. Ship faster.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <span className="mb-4 block text-5xl font-black text-[#8B5CF6]/20">
                  {step.step}
                </span>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-[#71717A]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-y border-[#23232F] bg-[#13131A]/30 py-24 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              One price. Lifetime access.
            </h2>
            <p className="text-[#71717A]">
              No subscriptions. No recurring fees. Pay once, use forever.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-[#23232F] bg-[#13131A] p-8"
            >
              <h3 className="mb-2 text-xl font-bold text-white">Free</h3>
              <p className="mb-6 text-sm text-[#71717A]">
                Test the quality before you buy
              </p>
              <p className="mb-8">
                <span className="text-4xl font-black text-white">$0</span>
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "20 handpicked prompts",
                  "All 9 categories sampled",
                  "Copy to clipboard",
                  "Search and filter",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#71717A]"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-[#8B5CF6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/prompts"
                className="block w-full rounded-lg border border-[#23232F] py-3 text-center font-semibold text-white transition-colors hover:border-[#8B5CF6]/40"
              >
                Browse Free Prompts
              </Link>
            </motion.div>

            {/* Pro Tier */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl border-2 border-[#8B5CF6] bg-[#13131A] p-8"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#8B5CF6] px-4 py-1 text-xs font-bold text-white">
                MOST POPULAR
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Pro</h3>
              <p className="mb-6 text-sm text-[#71717A]">
                The complete prompt engineering toolkit
              </p>
              <p className="mb-2">
                <span className="text-4xl font-black text-white">$19</span>
                <span className="ml-2 text-sm text-[#71717A]">one-time</span>
              </p>
              <p className="mb-8 text-xs text-[#71717A]">
                Less than $0.10 per prompt
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  `${TOTAL_PROMPTS}+ premium prompts`,
                  "All 9 categories — full depth",
                  "Copy to clipboard",
                  "Search, filter, and categorize",
                  "Future prompts included free",
                  "Commercial use license",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-white"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-[#8B5CF6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <PaymentOptions
                productName="PromptForge Pro"
                price={19}
                description={`${TOTAL_PROMPTS}+ AI Prompts — Lifetime Access`}
                x402Endpoint="/api/premium"
                successUrl="/premium"
                onX402Success={handlePaymentSuccess}
                accentColor="#8B5CF6"
              />
              <p className="mt-3 text-center text-xs text-[#71717A]">
                Price increases as the library grows. Lock in $19 today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-[#23232F] bg-[#13131A]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="pr-4 font-semibold text-white">
                    {item.q}
                  </span>
                  <motion.svg
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    className="h-5 w-5 flex-shrink-0 text-[#71717A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 leading-relaxed text-[#71717A]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[#23232F] bg-[#13131A]/30 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Every hour you spend guessing at prompts
            <br />
            <span className="text-[#8B5CF6]">
              is an hour your competitors don&apos;t waste.
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-[#71717A]">
            {TOTAL_PROMPTS}+ prompts. 9 categories. One payment. Lifetime
            access including every future update. Less than $0.10 per prompt — and
            the price goes up as the library grows.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="w-full sm:w-80">
              <PaymentOptions
                productName="PromptForge Pro"
                price={19}
                description={`${TOTAL_PROMPTS}+ AI Prompts — Lifetime Access`}
                x402Endpoint="/api/premium"
                successUrl="/premium"
                onX402Success={handlePaymentSuccess}
                accentColor="#8B5CF6"
              />
            </div>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/prompts"
                className="block w-full rounded-xl border border-[#23232F] bg-[#13131A] px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:border-[#8B5CF6]/40 sm:w-auto"
              >
                Or Try 20 Free First
              </Link>
            </motion.div>
          </div>
          <p className="mt-4 text-xs text-[#71717A]">
            One-time payment. Card, Apple Pay, Google Pay, or USDC. Instant access.
          </p>
        </motion.div>
      </section>

      {/* Ecosystem Cross-sell */}
      <section className="border-t border-[#23232F] py-16 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-[#71717A] uppercase tracking-wider mb-4">From the AI Business Factory</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a href="https://tip-walking-flavor-seen.trycloudflare.com" target="_blank" rel="noopener" className="p-3 rounded-lg border border-[#23232F] hover:border-[#8B5CF6]/40 transition-colors text-left">
              <p className="font-medium text-white text-sm">SiteForge</p>
              <p className="text-xs text-[#71717A]">AI Landing Pages in 60s</p>
            </a>
            <a href="https://exercises-planet-gregory-loud.trycloudflare.com" target="_blank" rel="noopener" className="p-3 rounded-lg border border-[#23232F] hover:border-[#8B5CF6]/40 transition-colors text-left">
              <p className="font-medium text-white text-sm">CryptoPayKit</p>
              <p className="text-xs text-[#71717A]">Accept Crypto Payments</p>
            </a>
            <a href="https://ebony-eliminate-incentives-deborah.trycloudflare.com" target="_blank" rel="noopener" className="p-3 rounded-lg border border-[#23232F] hover:border-[#8B5CF6]/40 transition-colors text-left">
              <p className="font-medium text-white text-sm">AIToolsRadar</p>
              <p className="text-xs text-[#71717A]">Compare 40+ AI Tools</p>
            </a>
            <a href="https://simple-star-hrs-developer.trycloudflare.com" target="_blank" rel="noopener" className="p-3 rounded-lg border border-[#23232F] hover:border-[#8B5CF6]/40 transition-colors text-left">
              <p className="font-medium text-white text-sm">PageForge</p>
              <p className="text-xs text-[#71717A]">AI Page Generator</p>
            </a>
            <a href="https://offered-proposition-neighbors-explosion.trycloudflare.com" target="_blank" rel="noopener" className="p-3 rounded-lg border border-[#23232F] hover:border-[#8B5CF6]/40 transition-colors text-left">
              <p className="font-medium text-white text-sm">Agency Site Grader</p>
              <p className="text-xs text-[#71717A]">Grade Your Website</p>
            </a>
            <a href="https://ebooks-script-oral-primarily.trycloudflare.com" target="_blank" rel="noopener" className="p-3 rounded-lg border border-[#23232F] hover:border-[#8B5CF6]/40 transition-colors text-left">
              <p className="font-medium text-white text-sm">Pricing Calculator</p>
              <p className="text-xs text-[#71717A]">Freelance Pricing</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#23232F] py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">PromptForge</span>
            </div>
            <p className="text-sm text-[#71717A]">
              Built by autonomous AI agents
            </p>
            <div className="flex gap-6 text-sm text-[#71717A]">
              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
