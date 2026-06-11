"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Timer, Ticket, ArrowRight, Shield } from "lucide-react";
import { CountdownTimer } from "@/components/shared/CountdownTimer";
import { GridBackground } from "@/components/shared/GridBackground";
import { AIDashboardMockup } from "@/components/shared/AIDashboardMockup";
import { fadeInUp, staggerContainer } from "@/components/shared/SectionWrapper";

const eventDetails = [
  { icon: <Calendar className="w-4 h-4" />, label: "Date", value: "Saturday, 14 June 2026" },
  { icon: <Clock className="w-4 h-4" />, label: "Time", value: "9:00 AM CET" },
  { icon: <Timer className="w-4 h-4" />, label: "Duration", value: "90 Minutes" },
  { icon: <Ticket className="w-4 h-4" />, label: "Cost", value: "Free Registration" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FAFAFA] overflow-hidden pt-6 pb-10">
      <GridBackground />

      {/* Top-right gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#FF2E4D]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4"
          >
            {/* Limited badge */}
            <motion.div variants={fadeInUp} custom={0}>
              <div className="inline-flex items-center gap-2 bg-[#B3001B]/8 border border-[#B3001B]/20 rounded-full px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B3001B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B3001B]" />
                </span>
                <span className="text-sm font-semibold text-[#B3001B] tracking-wide">Limited Seats Available · Free Webinar</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInUp} custom={0.1}>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black leading-[1.1] tracking-tight text-gray-900">
                How to Install an{" "}
                <span className="text-gradient-red glow-text-red">AI OS</span>{" "}
                in Your Business{" "}
                <span className="relative">
                  and Never Work the Same Way Again
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={fadeInUp} custom={0.2}>
              <p className="text-xl sm:text-2xl font-semibold text-gray-700 leading-snug">
                Stop Running Your Business on{" "}
                <span className="line-through text-gray-400">Willpower</span>.{" "}
                Start Running It on{" "}
                <span className="text-[#B3001B] font-bold">AI.</span>
              </p>
            </motion.div>

            {/* Countdown */}
            <motion.div variants={fadeInUp} custom={0.4}>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Webinar starts in</p>
                <CountdownTimer />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} custom={0.5} className="flex flex-col sm:flex-row gap-3">
              <a
                href="#register"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg glow-red transition-all duration-300 hover:shadow-2xl hover:glow-red-strong hover:scale-[1.02]"
              >
                Reserve Your Free Seat
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF2E4D] to-[#B3001B] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 rounded-2xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-lg">
                  Reserve Your Free Seat <ArrowRight className="w-5 h-5 translate-x-1" />
                </span>
              </a>

              <div className="inline-flex items-center gap-2 text-sm text-gray-500 font-medium px-2">
                <Shield className="w-4 h-4 text-[#B3001B]" />
                No credit card required · 100% free
              </div>
            </motion.div>

            {/* Trust signal */}
            <motion.div variants={fadeInUp} custom={0.6}>
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {["SY", "AM", "JK", "PB", "LR"].map((initials) => (
                    <div
                      key={initials}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B3001B] to-[#FF2E4D] border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Trusted by <strong className="text-gray-700">SME founders</strong> across USA, UK &amp; Europe</p>
                </div>
              </div>
            </motion.div>

            {/* Event details card */}
            <motion.div variants={fadeInUp} custom={0.7}>
              <div className="glass-card rounded-2xl p-4 border border-[#B3001B]/15">
                <p className="text-[10px] font-bold text-[#B3001B] uppercase tracking-widest mb-3">Event Details</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {eventDetails.map((d) => (
                    <div key={d.label} className="flex items-center gap-2">
                      <span className="text-[#B3001B]">{d.icon}</span>
                      <div>
                        <p className="text-[9px] text-gray-400 uppercase tracking-widest">{d.label}</p>
                        <p className="text-sm font-semibold text-gray-800">{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <div className="hidden lg:flex justify-center items-center">
            <AIDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
