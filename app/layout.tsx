import type { Metadata } from "next";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptForge — Stop Guessing. Start Engineering.",
  description:
    "200+ battle-tested AI prompts for Claude, GPT, and Gemini. Organized by category, engineered for results. The toolkit serious AI users trust.",
  keywords: [
    "AI prompts",
    "prompt engineering",
    "ChatGPT prompts",
    "Claude prompts",
    "Gemini prompts",
    "AI toolkit",
    "prompt templates",
  ],
  openGraph: {
    title: "PromptForge — 200+ Battle-Tested AI Prompts",
    description:
      "Stop guessing. Start engineering. Premium prompt templates for Claude, GPT, and Gemini.",
    type: "website",
    url: "https://promptforge.ai",
    siteName: "PromptForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptForge — 200+ Battle-Tested AI Prompts",
    description:
      "Stop guessing. Start engineering. Premium prompt templates for Claude, GPT, and Gemini.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PromptForge",
              description:
                "200+ battle-tested AI prompts for Claude, GPT, and Gemini. Organized by category, engineered for results.",
              url: "https://promptforge.ai",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "19",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Analytics product="promptforge" />
        {children}
      </body>
    </html>
  );
}
