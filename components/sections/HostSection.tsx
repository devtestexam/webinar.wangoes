"use client";

import { motion } from "framer-motion";
import { Globe, Award, Users, Briefcase } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import Image from "next/image";

const credentials = [
  { icon: <Award className="w-5 h-5" />, value: 10, suffix: "+", label: "Years Experience" },
  { icon: <Users className="w-5 h-5" />, value: 100, suffix: "+", label: "AI Agents Built" },
  { icon: <Globe className="w-5 h-5" />, value: 50, suffix: "+", label: "Global SME Clients" },
  { icon: <Briefcase className="w-5 h-5" />, value: 3, suffix: "+", label: "Years AI-Focused" },
];

export function HostSection() {
  return (
    <section id="host" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B3001B]/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#B3001B]/8 border border-[#B3001B]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-bold text-[#B3001B] uppercase tracking-widest">Your Host</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Meet Your <span className="text-gradient-red">Host</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-radial from-[#B3001B]/20 to-transparent blur-3xl scale-110" />
              {/* Image frame */}
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden border-2 border-[#B3001B]/20 glow-red shadow-2xl">
                <Image
                  src="/images/host.jpg"
                  alt="Shreeram Yadav — Founder & AI Specialist at Wangoes Technologies"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
                {/* Name badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl px-4 py-2.5">
                  <p className="text-sm font-bold text-gray-900">Shreeram Yadav</p>
                  <p className="text-xs text-[#B3001B] font-semibold">Founder & AI Specialist</p>
                </div>
              </div>

              {/* Floating company badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{ animation: "float 5s ease-in-out infinite" }}
                className="absolute -top-4 -right-6 glass-card rounded-2xl px-4 py-2 border border-[#B3001B]/20 shadow-xl"
              >
                <p className="text-[10px] text-gray-400 font-medium">Company</p>
                <p className="text-sm font-bold text-gray-900">Wangoes Technologies</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-1">Shreeram Yadav</h3>
              <p className="text-[#B3001B] font-bold text-lg">Founder & AI Specialist, Wangoes Technologies</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Shreeram has spent <strong className="text-gray-900">10+ years</strong> building software systems for businesses across the USA, UK, and Europe. Over the last three years, his company has implemented{" "}
                <strong className="text-gray-900">100+ real AI agents for SMEs</strong> — not demos, but live systems solving real business problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                He specializes in helping <strong className="text-gray-900">non-technical founders</strong> implement AI practically — translating complex technology into clear, actionable business systems that save time and generate results.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 border border-[#B3001B]/10 group hover:border-[#B3001B]/30 hover:glow-red transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-[#B3001B] mb-2">
                    {cred.icon}
                  </div>
                  <div className="text-2xl font-black text-gradient-red">
                    <AnimatedCounter end={cred.value} suffix={cred.suffix} duration={1500} />
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{cred.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Regions */}
            <div className="flex items-center gap-2 pt-2">
              <Globe className="w-4 h-4 text-[#B3001B]" />
              <span className="text-sm text-gray-500 font-medium">Clients in</span>
              {["🇺🇸 USA", "🇬🇧 UK", "🇪🇺 Europe"].map((region) => (
                <span key={region} className="text-xs font-bold bg-gray-100 text-gray-700 rounded-full px-3 py-1">
                  {region}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
