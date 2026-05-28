"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Will this webinar be recorded?",
    a: "No replay is planned. This is a live session with a live Q&A component. We encourage you to attend in real time to get the most value — and to ask your own questions directly.",
  },
  {
    q: "What's the time commitment?",
    a: "90 minutes. No upsell. No filler. We will use every minute to give you practical, actionable frameworks you can apply immediately to your business.",
  },
  {
    q: "Do I need a technical background?",
    a: "Absolutely not. This webinar is built entirely for business owners — not developers. If you can use a smartphone and run a business, you have everything you need to get value from this session.",
  },
  {
    q: "What kind of businesses will benefit most?",
    a: "SMEs with 5–100 employees, across any industry, that rely on manual processes for lead management, client communication, internal ops, or team coordination. If your business runs on people doing repetitive tasks, this is for you.",
  },
  {
    q: "Is there a cost?",
    a: "Zero. The webinar is completely free. There is no upsell during the session. You will get 90 minutes of pure, actionable content.",
  },
];

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        "rounded-2xl border transition-all duration-300 overflow-hidden",
        open
          ? "border-[#B3001B]/30 bg-white shadow-lg glow-red"
          : "border-gray-200 bg-white/70 hover:border-[#B3001B]/20"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-gray-900 leading-snug">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
            open ? "bg-[#B3001B] text-white" : "bg-gray-100 text-gray-500"
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <div className="h-px bg-gradient-to-r from-[#B3001B]/20 to-transparent mb-4" />
          <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="relative py-10 sm:py-14 bg-[#FAFAFA] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#B3001B]/8 border border-[#B3001B]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-bold text-[#B3001B] uppercase tracking-widest">Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Frequently Asked{" "}
            <span className="text-gradient-red">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm">
            Still have questions?{" "}
            <a href="mailto:hello@wangoes.com" className="text-[#B3001B] font-semibold hover:underline">
              Email us directly →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
