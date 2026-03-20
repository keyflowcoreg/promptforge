"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FREE_PROMPTS,
  ALL_PROMPTS,
  CATEGORIES,
  TOTAL_PROMPTS,
} from "@/lib/prompts";
import type { Category } from "@/lib/prompts";
import PromptCard from "@/components/PromptCard";

export default function PromptsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );

  const filteredFree = useMemo(() => {
    return FREE_PROMPTS.filter((p) => {
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

  // Show some locked premium prompts to tease
  const lockedPrompts = useMemo(() => {
    return ALL_PROMPTS.filter((p) => !p.isFree).slice(0, 6);
  }, []);

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
              href="/"
              className="hidden text-sm text-[#71717A] transition-colors hover:text-white sm:block"
            >
              Home
            </Link>
            <Link
              href="/premium"
              className="rounded-lg bg-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#7C3AED]"
            >
              Unlock All {TOTAL_PROMPTS}+
            </Link>
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
          <h1 className="mb-3 text-4xl font-bold text-white">
            Free Prompt Library
          </h1>
          <p className="max-w-2xl text-[#71717A]">
            20 handpicked prompts to preview the quality. Each one is a
            production-ready template used by professional developers and
            creators.
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
              placeholder="Search prompts..."
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
            <option value="All">All Categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-6 text-sm text-[#71717A]"
        >
          Showing {filteredFree.length} free prompt
          {filteredFree.length !== 1 ? "s" : ""}
          {search && ` matching "${search}"`}
        </motion.p>

        {/* Free Prompts Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredFree.map((prompt, i) => (
            <PromptCard key={prompt.id} prompt={prompt} index={i} />
          ))}
        </div>

        {filteredFree.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-[#71717A]">
              No free prompts match your search.
            </p>
            <p className="mt-2 text-sm text-[#71717A]">
              Try different keywords or{" "}
              <Link href="/premium" className="text-[#8B5CF6] hover:underline">
                unlock all {TOTAL_PROMPTS}+ prompts
              </Link>
              .
            </p>
          </div>
        )}

        {/* Locked Prompts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-white">
              Want more? Unlock {TOTAL_PROMPTS - 20}+ premium prompts
            </h2>
            <p className="text-[#71717A]">
              Here&apos;s a preview of what you&apos;re missing:
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lockedPrompts.map((prompt, i) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                index={i}
                locked={true}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/premium"
              className="inline-block rounded-xl bg-[#8B5CF6] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-[#7C3AED] hover:shadow-lg hover:shadow-[#8B5CF6]/25"
            >
              Unlock All {TOTAL_PROMPTS}+ Prompts — $19
            </Link>
            <p className="mt-3 text-sm text-[#71717A]">
              One-time payment. Lifetime access. No subscription.
            </p>
          </div>
        </motion.div>
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
