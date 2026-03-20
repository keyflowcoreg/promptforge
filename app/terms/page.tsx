import { TermsOfService } from "@/components/TermsOfService";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — PromptForge",
  description: "Terms of Service for PromptForge. Read our terms governing the use of our AI prompt library and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <nav className="border-b border-[#23232F]/50 bg-[#0A0A0F]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">PromptForge</span>
          </Link>
          <Link href="/" className="text-sm text-[#71717A] transition-colors hover:text-white">
            Back to Home
          </Link>
        </div>
      </nav>
      <TermsOfService
        companyName="AI Business Factory"
        productName="PromptForge"
        contactEmail="hello@promptforge.ai"
        websiteUrl="https://promptforge-indol.vercel.app"
        lastUpdated="2026-03-20"
      />
    </main>
  );
}
