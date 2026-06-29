"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, ArrowRight, Lock, ChevronDown } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(7, "Please enter a valid phone number").regex(/^\d+$/, "Phone number must contain only digits"),
  teamSize: z.string().min(1, "Please select your team size"),
});

type FormData = z.infer<typeof schema>;

const countryCodes = [
  // Popular
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA / Canada" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  // Europe
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+371", flag: "🇱🇻", name: "Latvia" },
  { code: "+370", flag: "🇱🇹", name: "Lithuania" },
  { code: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "__other__", flag: "✏️", name: "Other (type manually)" },
];

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
  const router = useRouter();
  const [countryCode, setCountryCode] = useState("+91");
  const [manualCode, setManualCode] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isManual = countryCode === "__other__";
  const activeCode = isManual ? manualCode : countryCode;
  const selectedCountry = countryCodes.find((c) => c.code === countryCode) ?? countryCodes[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, phone: `${activeCode.replace(/^\+/, "")} ${data.phone}` }),
      });
      if (!res.ok) throw new Error("Registration failed");
      if (typeof window !== "undefined") {
        if (typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "CompleteRegistration");
        }
        localStorage.setItem("webinar_registrant_email", data.email);
        localStorage.setItem("webinar_registrant_name", data.fullName);
      }
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
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
            Join 2 July · 45 Minutes · Learn How to Run Your Business on AI
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-2.5">
            <span className="text-lg">🎁</span>
            <p className="text-sm font-semibold text-amber-800">
Free E-Book{" "}
<span className="font-black">
  &ldquo;How to Install an AI OS in Your Business&rdquo;
</span>
— for all attendees            </p>
          </div>
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
                  <p className="text-sm font-bold text-emerald-600 mb-1">📅 Thursday, 2 July 2026</p>
                  <p className="text-sm text-gray-600">3:00 PM CET · 45 Minutes · Free</p>
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
                    <div className="flex gap-2 items-start">
                      {/* Custom country code dropdown */}
                      <div ref={dropdownRef} className="relative shrink-0">
                        <button
                          type="button"
                          onClick={() => setDropdownOpen((o) => !o)}
                          className="flex items-center gap-1.5 bg-white/70 border border-gray-200 rounded-xl px-3 py-3 text-sm font-medium text-gray-800 focus:outline-none focus:border-[#B3001B] focus:ring-2 focus:ring-[#B3001B]/20 transition-all duration-200 hover:border-gray-300 whitespace-nowrap"
                        >
                          <span>{selectedCountry.flag}</span>
                          <span>{isManual ? (manualCode || "+??") : countryCode}</span>
                          <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {dropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-gray-200 rounded-xl shadow-xl overflow-y-auto max-h-56 min-w-[220px]">
                            {countryCodes.map((c) => (
                              <button
                                key={`${c.name}-${c.code}`}
                                type="button"
                                onClick={() => { setCountryCode(c.code); setDropdownOpen(false); }}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#B3001B]/8 transition-colors text-left ${countryCode === c.code ? "bg-[#B3001B]/10 font-semibold text-[#B3001B]" : "text-gray-700"}`}
                              >
                                <span className="text-base w-6 shrink-0">{c.flag}</span>
                                <span className="font-medium w-12 shrink-0">{c.code === "__other__" ? "Other" : c.code}</span>
                                <span className="text-gray-500 truncate">{c.name}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Manual code input when "Other" selected */}
                      {isManual && (
                        <input
                          type="text"
                          value={manualCode}
                          onChange={(e) => setManualCode(e.target.value)}
                          placeholder="+00"
                          className="bg-white/70 border border-gray-200 rounded-xl px-3 py-3 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#B3001B] focus:ring-2 focus:ring-[#B3001B]/20 transition-all duration-200 w-16 shrink-0"
                        />
                      )}

                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="98765 43210"
                        className={inputClass}
                        onKeyDown={(e) => {
                          const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"];
                          if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        onInput={(e) => {
                          const target = e.currentTarget;
                          target.value = target.value.replace(/\D/g, "");
                        }}
                      />
                    </div>
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
