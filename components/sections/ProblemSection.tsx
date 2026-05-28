"use client";

import { motion } from "framer-motion";
import {
  RefreshCcw, Users, MessageSquare, Map, Clock, Brain
} from "lucide-react";
import { GlowCard } from "@/components/shared/GlowCard";
import { staggerContainer, fadeInUp } from "@/components/shared/SectionWrapper";

const pains = [
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Too Many Repetitive Tasks",
    desc: "Your team spends hours on manual work that should be automated — costing you time and money every single day.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Bottlenecks",
    desc: "Everything flows through you. Your business can't scale because too many decisions require your direct involvement.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Manual Follow-Ups",
    desc: "Leads go cold, clients feel ignored, and opportunities vanish because follow-ups rely on people remembering.",
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "No Clear AI Roadmap",
    desc: "Everyone's talking about AI but nobody's showing you exactly how to implement it in a business like yours.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Wasting Time on Low-Value Work",
    desc: "Your energy — the most expensive resource in your business — is consumed by tasks worth $10/hour.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Feels Overwhelming",
    desc: "ChatGPT, agents, automation, LLMs — where do you even start? The noise is deafening and the clarity is nowhere.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-10 sm:py-14 bg-[#FAFAFA] overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#B3001B]/8 border border-[#B3001B]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-bold text-[#B3001B] uppercase tracking-widest">Sound Familiar?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            Still Running Your Business{" "}
            <span className="text-gradient-red">Manually?</span>
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            If any of these hit close to home, this webinar was built exactly for you.
          </p>
        </motion.div>

        {/* Pain cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pains.map((pain, i) => (
            <GlowCard key={pain.title} delay={i * 0.08} className="p-6 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#B3001B]/10 flex items-center justify-center text-[#B3001B] group-hover:bg-[#B3001B] group-hover:text-white transition-all duration-300">
                  {pain.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#B3001B] transition-colors">
                    {pain.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pain.desc}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </motion.div>

        {/* Emotional closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-block glass-card rounded-2xl px-8 py-6 border border-[#B3001B]/20 glow-red max-w-2xl">
            <p className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug">
              Your business shouldn&apos;t depend on your{" "}
              <span className="text-gradient-red">constant involvement</span>{" "}
              to function.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
