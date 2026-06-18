"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, CheckCircle2, BookOpen, Share2 } from "lucide-react";

export default function ThankYouPage() {
  const webinarDetails = [
    { icon: <Calendar className="w-5 h-5" />, label: "Date", value: "Thursday, 2 July 2026" },
    { icon: <Clock className="w-5 h-5" />, label: "Time", value: "9:00 AM CET · 90 Minutes" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#FF2E4D]/6 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#B3001B]/4 to-transparent blur-3xl pointer-events-none" />

      {/* Navbar */}
      <header className="relative z-10 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Image src="/images/logo.png" alt="Wangoes" width={140} height={44} className="h-10 w-auto object-contain" priority />
          <Link
            href="/"
            className="text-sm font-semibold text-gray-500 hover:text-[#B3001B] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                Registration Confirmed
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
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

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <button
                onClick={() => {
                  const text = "Just registered for a FREE AI webinar by Wangoes Technologies — 'How to Install an AI OS in Your Business' on 2 July 2026. Join me!";
                  if (navigator.share) {
                    navigator.share({ title: "AI OS Webinar", text });
                  } else {
                    navigator.clipboard.writeText(text);
                    alert("Copied to clipboard!");
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm py-3 px-6 rounded-xl shadow-sm transition-all duration-200"
              >
                <Share2 className="w-4 h-4" />
                Share with a Friend
              </button>
            </motion.div>
          </motion.div>

          {/* Right column — host card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-start pt-4"
          >
            {/* Glow ring */}
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
      </main>
    </div>
  );
}
