"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, CheckCircle2, BookOpen, Sparkles } from "lucide-react";
import { Survey } from "@/components/sections/Survey";

export default function ThankYouPage() {
  const webinarDetails = [
    { icon: <Calendar className="w-5 h-5" />, label: "Date", value: "Thursday, 2 July 2026" },
    { icon: <Clock className="w-5 h-5" />, label: "Time", value: "3:00 PM CET · 45 Minutes" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 overflow-hidden relative">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#FF2E4D]/6 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#B3001B]/4 to-transparent blur-3xl pointer-events-none" />

      {/* Navbar */}
      <header className="relative z-10 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Image src="/images/logo.png" alt="Wangoes" width={140} height={44} className="h-10 w-auto object-contain" priority />
          <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-[#B3001B] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* ── THANK-YOU SECTION ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                Registration Confirmed
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <p className="text-[#B3001B] font-bold text-lg mb-2">Great News!</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
                You&apos;re signed up<br />
                for our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B3001B] to-[#FF2E4D]">
                  Webinar!
                </span>
              </h1>
            </motion.div>

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-lg leading-relaxed max-w-lg"
            >
              An email containing the webinar link and details is on its way to your inbox. If you don&apos;t receive it, please check your spam folder.
            </motion.p>

            {/* Webinar details */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {webinarDetails.map((d) => (
                <div key={d.label} className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm">
                  <span className="text-[#B3001B]">{d.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{d.label}</p>
                    <p className="text-sm font-bold text-gray-900">{d.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Free ebook callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4"
            >
              <BookOpen className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-600 font-bold text-sm">Your Free E-Book is Coming!</p>
                <p className="text-gray-500 text-sm mt-0.5">
                  <span className="font-semibold text-gray-800">&ldquo;How to Install an AI OS in Your Business&rdquo;</span> — we&apos;ll send it to your inbox before the webinar.
                </p>
              </div>
            </motion.div>

            {/* Google Calendar button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <motion.a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=AI%20OS%20Webinar&dates=20260702T140000Z/20260702T150000Z&details=Learn%20how%20to%20install%20an%20AI%20Operating%20System%20in%20your%20business.&location=Online"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group relative inline-flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-md hover:shadow-xl hover:border-[#4285F4]/40 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/6 via-[#EA4335]/4 to-[#34A853]/6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <span className="relative z-10 flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md group-hover:scale-110 transition-all duration-300 shrink-0">
                  <svg width="22" height="22" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                    <path fill="none" d="M0 0h48v48H0z" />
                  </svg>
                </span>
                <span className="relative z-10 flex flex-col items-start">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest leading-none mb-0.5">Don&apos;t miss it</span>
                  <span className="text-base font-black text-gray-800 group-hover:text-[#4285F4] transition-colors duration-200">Add to Google Calendar</span>
                </span>
                <span className="relative z-10 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#4285F4] text-lg">→</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column — host card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-start pt-4"
          >
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#B3001B]/10 to-[#FF2E4D]/5 blur-3xl top-0" />
            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center gap-6 shadow-xl w-full max-w-sm">
              {/* Tick badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>

              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#B3001B]/30 shadow-xl">
                <Image src="/images/host.png" alt="Shreeram Yadav" fill className="object-cover object-top" />
              </div>

              <div className="text-center">
                <p className="text-gray-900 font-black text-xl">Shreeram Yadav</p>
                <p className="text-[#B3001B] text-sm font-semibold mt-1">Founder & AI Specialist</p>
                <p className="text-gray-400 text-sm mt-2">Wangoes Technologies</p>
              </div>

              <div className="w-full border-t border-gray-100 pt-5 flex flex-col gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  See you live on 2 July 2026
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  Free E-Book included for all attendees
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3001B] flex-shrink-0" />
                  Live Q&amp;A session included
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── SURVEY SECTION ── */}
      <section className="relative z-10 border-t border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-[#B3001B]/8 border border-[#B3001B]/20 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B3001B]" />
              <span className="text-xs font-bold text-[#B3001B] uppercase tracking-widest">Quick Survey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
              Help us personalize your webinar experience
            </h2>
            <p className="text-gray-500 mt-2.5 text-base">
              Under 2 minutes. Your answers help Shreeram tailor the session to attendees like you.
            </p>
          </motion.div>

          {/* Survey card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Survey />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-xs text-gray-400 mt-5"
          >
            Your responses are kept private and used only to improve the webinar experience.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
