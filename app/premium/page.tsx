"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ALL_PROMPTS, CATEGORIES, TOTAL_PROMPTS } from "@/lib/prompts";
import type { Category } from "@/lib/prompts";
import PromptCard from "@/components/PromptCard";
import { X402Checkout } from "@/components/x402/X402Checkout";

export default function PremiumPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const filteredPrompts = useMemo(() => {
    return ALL_PROMPTS.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.prompt.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_PROMPTS.length };
    ALL_PROMPTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handlePaymentSuccess = (data: any) => {
    setUnlocked(true);
  };

  const handlePaymentError = (errorMsg: string) => {
    setError(errorMsg);
  };

  if (!unlocked) {
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
              <Link
                href="/"
                className="text-sm text-[#71717A] transition-colors hover:text-white"
              >
                Home
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex min-h-screen items-center justify-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-lg text-center"
          >
            {/* Lock icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#8B5CF6]/10"
            >
              <svg
                className="h-10 w-10 text-[#8B5CF6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </motion.div>

            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Unlock the Full Library
            </h1>
            <p className="mb-2 text-lg text-[#71717A]">
              {TOTAL_PROMPTS}+ production-ready prompts across 9 categories.
            </p>
            <p className="mb-8 text-[#71717A]">
              One payment of{" "}
              <span className="font-bold text-white">$19 USDC</span> on Base
              network for lifetime access.
            </p>

            {/* What you get */}
            <div className="mb-8 rounded-xl border border-[#23232F] bg-[#13131A] p-6 text-left">
              <h3 className="mb-4 font-semibold text-white">
                What you unlock:
              </h3>
              <ul className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <li
                    key={cat.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-[#71717A]">{cat.name}</span>
                    <span className="font-medium text-white">
                      {cat.count} prompts
                    </span>
                  </li>
                ))}
                <li className="flex items-center justify-between border-t border-[#23232F] pt-2 text-sm">
                  <span className="font-semibold text-[#8B5CF6]">Total</span>
                  <span className="font-bold text-white">
                    {TOTAL_PROMPTS} prompts
                  </span>
                </li>
              </ul>
            </div>

            <X402Checkout
              endpoint="/api/premium"
              productName="PromptForge Pro"
              price="$19"
              description={`${TOTAL_PROMPTS}+ AI Prompts — Lifetime Access`}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              accentColor="#8B5CF6"
            >
              <button className="w-full rounded-xl bg-[#8B5CF6] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-[#7C3AED] hover:shadow-lg hover:shadow-[#8B5CF6]/25">
                Pay $19 USDC to Unlock
              </button>
            </X402Checkout>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-sm text-red-400"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <p className="mt-4 text-xs text-[#71717A]">
              Powered by x402 protocol on Base network. Payment in USDC.
            </p>
          </motion.div>
        </div>
      </main>
    );
  }

  // Unlocked view
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
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-[#71717A] transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <svg
                className="h-3 w-3"
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
              Pro Unlocked
            </span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-3">
            <h1 className="text-4xl font-bold text-white">
              Premium Prompt Library
            </h1>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
              Full Access
            </span>
          </div>
          <p className="max-w-2xl text-[#71717A]">
            {TOTAL_PROMPTS} production-ready prompts across 9 categories. Search,
            filter, copy, and ship.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col gap-4 sm:flex-row"
        >
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#71717A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search all prompts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-[#23232F] bg-[#13131A] py-3 pl-12 pr-4 text-white placeholder-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value as Category | "All")
            }
            className="rounded-xl border border-[#23232F] bg-[#13131A] px-4 py-3 text-white outline-none transition-colors focus:border-[#8B5CF6]"
          >
            <option value="All">
              All Categories ({categoryCounts["All"]})
            </option>
            {CATEGORIES.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name} ({categoryCounts[cat.name] || 0})
              </option>
            ))}
          </select>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setSelectedCategory("All")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              selectedCategory === "All"
                ? "bg-[#8B5CF6] text-white"
                : "bg-[#13131A] text-[#71717A] hover:text-white"
            }`}
          >
            All ({categoryCounts["All"]})
          </button>
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.name)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                selectedCategory === cat.name
                  ? "bg-[#8B5CF6] text-white"
                  : "bg-[#13131A] text-[#71717A] hover:text-white"
              }`}
            >
              {cat.name} ({categoryCounts[cat.name] || 0})
            </motion.button>
          ))}
        </motion.div>

        {/* Results count */}
        <p className="mb-6 text-sm text-[#71717A]">
          Showing {filteredPrompts.length} prompt
          {filteredPrompts.length !== 1 ? "s" : ""}
          {search && ` matching "${search}"`}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>

        {/* Prompts Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrompts.map((prompt, i) => (
            <PromptCard key={prompt.id} prompt={prompt} index={i} />
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-[#71717A]">
              No prompts match your search.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-2 text-sm text-[#8B5CF6] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-[#23232F] py-8 px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
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
          </div>
        </div>
      </footer>
    </main>
  );
}
