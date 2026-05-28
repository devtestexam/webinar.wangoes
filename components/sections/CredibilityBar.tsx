"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  { end: 100, suffix: "+", label: "AI Agents Deployed" },
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 50, suffix: "+", label: "SME Clients Globally" },
  { end: 340, suffix: "h", label: "Avg Hours Saved / Month" },
];

export function CredibilityBar() {
  return (
    <section className="relative py-8 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-gradient-red mb-0.5">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
