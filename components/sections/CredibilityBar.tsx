"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const marqueeItems = [
  "🤖 100+ AI Agents Deployed",
  "🌍 SMEs Across USA, UK & Europe",
  "⚡ Real Implementations — Not Demos",
  "📅 10+ Years Experience",
  "🏆 Trusted by Business Owners Globally",
  "🔧 Live Systems, Not Proof of Concepts",
  "📈 Measurable ROI for Every Client",
  "🚀 End-to-End AI Operating Systems",
];

const stats = [
  { end: 100, suffix: "+", label: "AI Agents Deployed" },
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 50, suffix: "+", label: "SME Clients Globally" },
  { end: 340, suffix: "h", label: "Avg Hours Saved / Month" },
];

export function CredibilityBar() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative py-16 bg-white border-y border-gray-100 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#B3001B]/3 via-transparent to-[#B3001B]/3" />

      {/* Stats Row */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-black text-gradient-red mb-1">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
              </div>
              <p className="text-sm font-medium text-gray-500 group-hover:text-[#B3001B] transition-colors">
                {stat.label}
              </p>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] mx-auto mt-2 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex" style={{ animation: "marquee 35s linear infinite" }}>
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 mx-4"
            >
              <div className="flex items-center gap-2 bg-[#FAFAFA] border border-gray-100 rounded-full px-5 py-2.5 whitespace-nowrap hover:border-[#B3001B]/30 hover:bg-[#B3001B]/5 transition-all duration-300">
                <span className="text-sm font-semibold text-gray-700">{item}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#B3001B]/30 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
