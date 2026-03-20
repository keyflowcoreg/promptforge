"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Prompt } from "@/lib/prompts";

const categoryColors: Record<string, string> = {
  "Code Generation": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Content Writing": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Data Analysis": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Marketing: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  Business: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  Creative: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Education: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Productivity: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Debug: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function PromptCard({
  prompt,
  index,
  locked = false,
}: {
  prompt: Prompt;
  index: number;
  locked?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    if (locked) return;
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative rounded-xl border border-[#23232F] bg-[#13131A] p-5 transition-all duration-200 ${
        locked
          ? "cursor-not-allowed"
          : "hover:border-[#8B5CF6]/40 hover:bg-[#1A1A24]"
      }`}
    >
      {locked && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-[#0A0A0F]/80 backdrop-blur-sm">
          <svg
            className="mb-2 h-8 w-8 text-[#8B5CF6]"
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
          <a
            href="/premium"
            className="rounded-lg bg-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#7C3AED]"
          >
            Unlock with $19
          </a>
        </div>
      )}

      <div className={locked ? "blur-sm select-none" : ""}>
        <div className="mb-3 flex items-start justify-between">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${
              categoryColors[prompt.category] || "bg-gray-500/20 text-gray-400"
            }`}
          >
            {prompt.category}
          </motion.span>
          {!locked && (
            <button
              onClick={handleCopy}
              className="rounded-lg p-2 text-[#71717A] transition-colors hover:bg-[#23232F] hover:text-white"
              title="Copy prompt"
            >
              {copied ? (
                <svg
                  className="h-4 w-4 text-emerald-400"
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
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          )}
        </div>

        <h3 className="mb-2 text-lg font-semibold text-white">
          {prompt.title}
        </h3>

        <p className="mb-3 text-sm leading-relaxed text-[#71717A]">
          {expanded
            ? prompt.prompt
            : prompt.prompt.slice(0, 150) +
              (prompt.prompt.length > 150 ? "..." : "")}
        </p>

        {!locked && prompt.prompt.length > 150 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-[#8B5CF6] transition-colors hover:text-[#A78BFA]"
          >
            {expanded ? "Show less" : "Show full prompt"}
          </button>
        )}
      </div>
    </motion.div>
  );
}
