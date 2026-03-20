'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const PROMPT_CATEGORIES = [
  { name: 'Content & Copywriting', count: 32, icon: 'pencil' },
  { name: 'Code Generation', count: 28, icon: 'code' },
  { name: 'Business Strategy', count: 24, icon: 'chart' },
  { name: 'Data Analysis', count: 22, icon: 'data' },
  { name: 'Creative Writing', count: 20, icon: 'star' },
  { name: 'Marketing & SEO', count: 18, icon: 'megaphone' },
  { name: 'Product Design', count: 16, icon: 'layers' },
  { name: 'Education & Learning', count: 14, icon: 'book' },
  { name: 'Research & Synthesis', count: 12, icon: 'search' },
  { name: 'Automation & Workflows', count: 14, icon: 'bolt' },
]

const CROSS_SELL = [
  { name: 'RulesForge', href: 'https://rulesforge.com', desc: 'AI coding rules for your team', price: '$14' },
  { name: 'SiteForge', href: 'https://siteforge.com', desc: 'AI landing pages in seconds', price: '$9' },
  { name: 'CryptoPayKit', href: 'https://cryptopaykit.com', desc: 'x402 developer templates', price: '$29' },
  { name: 'OGForge', href: 'https://ogforge.com', desc: 'Social cards in one click', price: '$9' },
]

const iconMap: Record<string, React.ReactNode> = {
  pencil: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />,
  code: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />,
  chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
  data: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />,
  star: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
  megaphone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />,
  layers: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />,
  book: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />,
  search: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />,
  bolt: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
}

export default function SuccessPage() {
  const [showCheck, setShowCheck] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowCheck(true), 300)
    const t2 = setTimeout(() => setShowContent(true), 800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const handleDownload = async () => {
    try {
      const res = await fetch('/api/prompts/download')
      if (!res.ok) throw new Error('Download failed')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'promptforge-pro-prompts.json'
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      alert('Download failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E4E4E7] relative overflow-hidden">
      {/* Confetti CSS animation */}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes confetti-fall-2 {
          0% { transform: translateY(-100vh) rotate(0deg) scale(0.8); opacity: 1; }
          100% { transform: translateY(100vh) rotate(-540deg) scale(0.3); opacity: 0; }
        }
        .confetti-piece {
          position: fixed;
          top: -20px;
          z-index: 50;
          pointer-events: none;
        }
        @keyframes check-draw {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes circle-fill {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-check-draw {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: check-draw 0.5s ease-out 0.5s forwards;
        }
        .animate-circle-fill {
          animation: circle-fill 0.5s ease-out forwards;
        }
        .animate-fade-up {
          opacity: 0;
          animation: fade-up 0.5s ease-out forwards;
        }
      `}</style>

      {/* Confetti particles */}
      {showCheck && Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 8}px`,
            height: `${6 + Math.random() * 8}px`,
            backgroundColor: ['#8B5CF6', '#A78BFA', '#10B981', '#34D399', '#F59E0B', '#FBBF24', '#EC4899', '#F472B6'][i % 8],
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '2px' : '0',
            animation: `${i % 2 === 0 ? 'confetti-fall' : 'confetti-fall-2'} ${2 + Math.random() * 3}s ease-out ${Math.random() * 1.5}s forwards`,
          }}
        />
      ))}

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Checkmark */}
        <div className="flex justify-center mb-8">
          <div className={`w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center ${showCheck ? 'animate-circle-fill' : 'opacity-0'}`}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="#10B981" strokeWidth="3" opacity="0.3" />
              <path
                d="M14 24L21 31L34 18"
                stroke="#10B981"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className={showCheck ? 'animate-check-draw' : ''}
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        {showContent && (
          <div className="text-center mb-10 animate-fade-up">
            <h1 className="text-3xl font-bold mb-3">Payment Confirmed!</h1>
            <p className="text-[#71717A] text-lg">Here are your 200+ prompts</p>
          </div>
        )}

        {/* Download button */}
        {showContent && (
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <button
              onClick={handleDownload}
              className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-3 mb-8"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Prompts JSON
            </button>
          </div>
        )}

        {/* Categories */}
        {showContent && (
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-lg font-semibold mb-4 text-[#A78BFA]">Categories Unlocked</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {PROMPT_CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="flex items-center gap-3 bg-[#13131A] border border-[#23232F] rounded-lg px-4 py-3 hover:border-[#8B5CF6]/30 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" className="shrink-0">
                    {iconMap[cat.icon]}
                  </svg>
                  <span className="flex-1 text-sm">{cat.name}</span>
                  <span className="text-xs text-[#71717A] bg-[#1A1A24] px-2 py-0.5 rounded-full">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {showContent && (
          <div className="animate-fade-up mb-16" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/prompts"
              className="block text-center bg-[#13131A] border border-[#23232F] hover:border-[#8B5CF6]/40 text-[#A78BFA] py-4 rounded-xl font-semibold transition-colors"
            >
              Start using your prompts &rarr;
            </Link>
          </div>
        )}

        {/* Cross-sell */}
        {showContent && (
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="border-t border-[#23232F] pt-10">
              <p className="text-sm text-[#71717A] text-center mb-6">More tools from the Forge ecosystem</p>
              <div className="grid grid-cols-2 gap-3">
                {CROSS_SELL.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#13131A] border border-[#23232F] rounded-lg p-4 hover:border-[#8B5CF6]/30 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm group-hover:text-[#A78BFA] transition-colors">{item.name}</span>
                      <span className="text-xs text-[#8B5CF6]">{item.price}</span>
                    </div>
                    <p className="text-xs text-[#71717A]">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
