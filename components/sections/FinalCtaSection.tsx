"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0A0A0A]">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #1A0005 30%, #2A0010 50%, #1A0005 70%, #0A0A0A 100%)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 8s ease infinite",
        }}
      />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg-dark opacity-50" />

      {/* Red glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#B3001B]/30 via-[#B3001B]/10 to-transparent blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [-30, 30, -30], y: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#FF2E4D]/15 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#B3001B]/20 border border-[#B3001B]/40 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2E4D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2E4D]" />
            </span>
            <span className="text-xs font-bold text-[#FF2E4D] uppercase tracking-widest">Last Call</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          Stop Running Your Business{" "}
          <span className="text-gradient-red glow-text-red">
            the Hard Way
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Learn how to build a practical AI Operating System for your business —
          without becoming technical. Walk away with a real roadmap you can execute in 30 days.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#register"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] text-white font-bold text-xl py-5 px-10 rounded-2xl shadow-2xl glow-red-strong hover:scale-[1.04] transition-all duration-300"
          >
            Reserve Your Free Seat — Limited Spots Available
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <Calendar className="w-4 h-4 text-[#B3001B]" />
            <span>Join 10 June · Learn How to Run Your Business on AI</span>
          </div>

          <p className="text-gray-600 text-xs font-medium mt-1">
            No credit card · No upsell · 90 minutes of real value
          </p>
        </motion.div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B3001B]/40 to-transparent" />
      </div>
    </section>
  );
}
