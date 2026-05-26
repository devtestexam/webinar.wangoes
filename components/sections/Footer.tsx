import { BrainCircuit, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B3001B] to-[#FF2E4D] flex items-center justify-center">
                <BrainCircuit className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-white text-sm">
                Wangoes <span className="text-[#B3001B]">AI</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Building real AI systems for SME business owners — not demos, but live solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "What You'll Learn", href: "#learn" },
                { label: "Who It's For", href: "#who" },
                { label: "About Shreeram", href: "#host" },
                { label: "Register Free", href: "#register" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-[#B3001B] transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event details */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Event Details</h3>
            <div className="space-y-2 text-sm text-gray-500">
              <p>📅 Tuesday, 10 June 2026</p>
              <p>🕘 9:00 AM CET</p>
              <p>⏳ 90 Minutes</p>
              <p>🎟 Free Registration</p>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#B3001B]" />
              <span className="text-xs text-gray-600 font-medium">USA · UK · Europe</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600 font-medium">
            © {new Date().getFullYear()} Wangoes Technologies. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built for SME owners ready to run their business on AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
