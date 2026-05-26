"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Timer, Ticket, AlertCircle, ArrowRight } from "lucide-react";

const details = [
  { icon: <Calendar className="w-5 h-5" />, label: "Date", value: "Tuesday, 10 June 2026" },
  { icon: <Clock className="w-5 h-5" />, label: "Time", value: "9:00 AM CET" },
  { icon: <Timer className="w-5 h-5" />, label: "Duration", value: "90 Minutes" },
  { icon: <Ticket className="w-5 h-5" />, label: "Cost", value: "Free — No Credit Card" },
];

export function WebinarDetailsSection() {
  return (
    <section id="details" className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Large background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#B3001B]/8 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#B3001B]/8 border border-[#B3001B]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-bold text-[#B3001B] uppercase tracking-widest">Event Info</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Webinar <span className="text-gradient-red">Details</span>
          </h2>
        </motion.div>

        {/* Main glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-[#B3001B]/20 glow-red"
        >
          {/* Details list */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {details.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-gray-100 group hover:border-[#B3001B]/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#B3001B]/10 flex items-center justify-center text-[#B3001B] flex-shrink-0 group-hover:bg-[#B3001B] group-hover:text-white transition-all duration-300">
                  {d.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{d.label}</p>
                  <p className="text-base font-bold text-gray-900">{d.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Limited seats urgency */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#B3001B]/6 border border-[#B3001B]/20 mb-8">
            <div className="relative">
              <AlertCircle className="w-5 h-5 text-[#B3001B]" />
              <div className="absolute inset-0 animate-ping rounded-full bg-[#B3001B]/20" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-[#B3001B] font-bold">Limited seats available.</span>{" "}
              Once the room is full, registrations close. Reserve your spot now.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#register"
            className="group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg glow-red hover:glow-red-strong hover:scale-[1.01] transition-all duration-300"
          >
            Reserve Your Free Seat
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Sub text */}
          <p className="text-center text-xs text-gray-400 mt-4 font-medium">
            No upsell. No replay planned. Attend live for the full session.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
