"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { staggerContainer } from "@/components/shared/SectionWrapper";

const forYou = [
  "You run a business with 5–100 people",
  "You're still doing too much manually",
  "You've heard about AI but don't know where to start",
  "You're losing hours weekly to repetitive tasks",
  "You want practical implementation, not hype",
  "You're ready to build systems that work without you",
];

const notFor = [
  "Developers & software engineers",
  "CTOs and technical leadership",
  "Enterprise IT teams",
  "People looking for theoretical AI content",
];

export function WhoIsItForSection() {
  return (
    <section id="who" className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#B3001B]/8 border border-[#B3001B]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-bold text-[#B3001B] uppercase tracking-widest">Right Fit Check</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Is This Webinar{" "}
            <span className="text-gradient-red">For You?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* FOR YOU card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 border border-emerald-200/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">This IS For You</h3>
            </div>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {forYou.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 text-sm font-medium leading-snug">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-6 pt-5 border-t border-emerald-100">
              <a
                href="#register"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] text-white font-bold text-sm py-3 px-6 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 glow-red"
              >
                Reserve My Seat Now →
              </a>
            </div>
          </motion.div>

          {/* NOT FOR card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl p-8 bg-gradient-to-br from-[#B3001B]/5 to-[#FF2E4D]/3 border border-[#B3001B]/20 glow-red overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B3001B]/10 to-transparent rounded-3xl" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#B3001B]/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-[#B3001B]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">This Is NOT For</h3>
            </div>

            <ul className="space-y-3">
              {notFor.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <XCircle className="w-5 h-5 text-[#B3001B] flex-shrink-0" />
                  <span className="text-gray-600 text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-2xl bg-white/60 border border-[#B3001B]/10">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-bold text-[#B3001B]">Built for business owners.</span>{" "}
                If you own or lead a small to mid-size business and rely on people or manual work to keep things running — this is your session.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
