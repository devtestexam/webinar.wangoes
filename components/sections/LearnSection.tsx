"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Search, Wrench, Rocket } from "lucide-react";
import { TiltCard } from "@/components/shared/TiltCard";
import { staggerContainer } from "@/components/shared/SectionWrapper";

const lessons = [
  {
    step: "01",
    icon: <BrainCircuit className="w-7 h-7" />,
    title: "What an 'AI OS' Actually Means",
    desc: "Plain-English explanation of how AI agents work together inside a real business — no jargon, no theory, just practical understanding that changes how you see your operations.",
    tag: "Foundation",
    color: "from-[#B3001B]/10 to-[#FF2E4D]/5",
    border: "border-[#B3001B]/20",
    tagColor: "text-[#B3001B] bg-[#B3001B]/10",
  },
  {
    step: "02",
    icon: <Search className="w-7 h-7" />,
    title: "The Workflow Audit Method",
    desc: "Step-by-step framework to identify the repetitive, manual tasks in your business that are ideal for AI — and prioritize what to automate first for maximum ROI.",
    tag: "Framework",
    color: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-500/20",
    tagColor: "text-blue-600 bg-blue-50",
  },
  {
    step: "03",
    icon: <Wrench className="w-7 h-7" />,
    title: "The Right Tools for Your Size & Budget",
    desc: "What SME-friendly tools are worth paying for, what to avoid, and the exact stack that works for 5–100 person teams without enterprise budgets or technical teams.",
    tag: "Tooling",
    color: "from-emerald-500/10 to-green-500/5",
    border: "border-emerald-500/20",
    tagColor: "text-emerald-600 bg-emerald-50",
  },
  {
    step: "04",
    icon: <Rocket className="w-7 h-7" />,
    title: "How to Start in 30 Days",
    desc: "A practical, week-by-week implementation roadmap so you leave with a concrete action plan — not inspiration that fades by Monday morning.",
    tag: "Action Plan",
    color: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-500/20",
    tagColor: "text-orange-600 bg-orange-50",
  },
];

export function LearnSection() {
  return (
    <section id="learn" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B3001B]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B3001B]/20 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#B3001B]/8 border border-[#B3001B]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-bold text-[#B3001B] uppercase tracking-widest">Inside This Webinar</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            What You&apos;ll{" "}
            <span className="text-gradient-red">Learn</span>
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            Four high-leverage frameworks you can start applying to your business immediately after the session.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {lessons.map((lesson, i) => (
            <motion.div
              key={lesson.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className={`h-full rounded-2xl border ${lesson.border} bg-gradient-to-br ${lesson.color} p-7 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300`}>
                  {/* Step number + tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-6xl font-black text-gray-100 leading-none select-none">
                      {lesson.step}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${lesson.tagColor}`}>
                      {lesson.tag}
                    </span>
                  </div>

                  {/* Icon + title */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center text-[#B3001B] shadow-sm">
                      {lesson.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">{lesson.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{lesson.desc}</p>

                  {/* Bottom accent line */}
                  <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-[#B3001B] to-[#FF2E4D]" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline connector */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-0"
        >
          {["Foundation", "Audit", "Tools", "Action"].map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B3001B] to-[#FF2E4D] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  {i + 1}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 font-medium">{label}</span>
              </div>
              {i < 3 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] origin-left"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
