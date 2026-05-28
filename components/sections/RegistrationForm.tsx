"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, ArrowRight, Lock } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  teamSize: z.string().min(1, "Please select your team size"),
});

type FormData = z.infer<typeof schema>;

const teamSizeOptions = [
  "Just me (solo founder)",
  "2–5 people",
  "6–20 people",
  "21–50 people",
  "51–100 people",
  "100+ people",
];

const inputClass =
  "w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#B3001B] focus:ring-2 focus:ring-[#B3001B]/20 transition-all duration-200 hover:border-gray-300";

const errorClass = "text-xs text-[#B3001B] font-medium mt-1";

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    console.log("Registration:", data);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="register" className="relative py-10 sm:py-14 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-gradient-radial from-[#B3001B]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-[#B3001B]/8 border border-[#B3001B]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B3001B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B3001B]" />
            </span>
            <span className="text-xs font-bold text-[#B3001B] uppercase tracking-widest">Limited Spots Remaining</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Reserve Your{" "}
            <span className="text-gradient-red">Free Seat</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Join 10 June · 90 Minutes · Learn How to Run Your Business on AI
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-[#B3001B]/20 glow-red"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              /* ── Success State ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center text-center py-8 gap-5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center glow-red"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">You&apos;re Registered! 🎉</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    Check your inbox for a confirmation email. We&apos;ll send you the webinar link and a reminder before the session.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-4 w-full border border-emerald-200/50">
                  <p className="text-sm font-bold text-emerald-600 mb-1">📅 Tuesday, 10 June 2026</p>
                  <p className="text-sm text-gray-600">9:00 AM CET · 90 Minutes · Free</p>
                </div>

                <p className="text-xs text-gray-400 font-medium">
                  Add to calendar and join live for the full session + Q&amp;A.
                </p>
              </motion.div>
            ) : (
              /* ── Form State ── */
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Row 1: Full Name + Business Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#B3001B]">*</span>
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                    {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Business Name <span className="text-[#B3001B]">*</span>
                    </label>
                    <input
                      {...register("businessName")}
                      placeholder="Acme Corp"
                      className={inputClass}
                    />
                    {errors.businessName && <p className={errorClass}>{errors.businessName.message}</p>}
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-[#B3001B]">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                    {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-[#B3001B]">*</span>
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+1 555 000 0000"
                      className={inputClass}
                    />
                    {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Team Size <span className="text-[#B3001B]">*</span>
                  </label>
                  <select {...register("teamSize")} className={inputClass}>
                    <option value="">Select your team size…</option>
                    {teamSizeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.teamSize && <p className={errorClass}>{errors.teamSize.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg glow-red hover:glow-red-strong hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Reserving Your Seat…
                    </>
                  ) : (
                    <>
                      Reserve My Seat
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Security note */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                  <Lock className="w-3 h-3" />
                  Your information is secure and never shared
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
