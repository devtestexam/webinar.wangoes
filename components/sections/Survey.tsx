"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Check,
  ArrowRight,
  Loader2,
  Calendar,
  Clock,
  Mail,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type QuestionType = "choice" | "textarea";

interface Question {
  id: number;
  question: string;
  subtitle: string;
  type: QuestionType;
  options?: string[];
  placeholder?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: 0,
    question: "Which best describes you?",
    subtitle: "Help us tailor the session to your role.",
    type: "choice",
    options: ["Business Owner", "Agency Owner", "Startup Founder", "Operations Manager", "Consultant", "Other"],
  },
  {
    id: 1,
    question: "What is your primary goal with AI?",
    subtitle: "What outcome matters most to you right now?",
    type: "choice",
    options: ["Save time through automation", "Reduce operational costs", "Generate more leads", "Improve customer support", "Scale the business", "Other"],
  },
  {
    id: 2,
    question: "How would you rate your current AI adoption?",
    subtitle: "Be honest — there is no wrong answer here.",
    type: "choice",
    options: ["Completely new", "Experimenting occasionally", "Using ChatGPT regularly", "Running AI workflows", "AI is already integrated in our business"],
  },
  {
    id: 3,
    question: "What would success from AI look like for you?",
    subtitle: "Picture your ideal outcome six months from now.",
    type: "choice",
    options: ["Save 5+ hours per week", "Reduce manual work", "Increase revenue", "Improve team productivity", "Scale without hiring"],
  },
  {
    id: 4,
    question: "How many employees are in your company?",
    subtitle: "This helps us recommend the right AI approach for your scale.",
    type: "choice",
    options: ["Just me", "2–10", "11–50", "51–100", "100+"],
  },
  {
    id: 5,
    question: "What is your approximate annual revenue?",
    subtitle: "Kept confidential. Helps us benchmark your AI ROI potential.",
    type: "choice",
    options: ["Under €50K", "€50K – €250K", "€250K – €1M", "€1M – €5M", "€5M+"],
  },
  {
    id: 6,
    question: "What is your biggest challenge right now?",
    subtitle: "Share as much or as little as you like.",
    type: "textarea",
    placeholder: "Tell us about your biggest operational or growth challenge...",
  },
  {
    id: 7,
    question: "Any specific question for the webinar?",
    subtitle: "We may address it live during the Q&A session.",
    type: "textarea",
    placeholder: "Type your question here...",
  },
];

const TOTAL = QUESTIONS.length;
const STORAGE_KEY = "webinar_survey_v1";

const OPTION_ICONS: Record<string, string> = {
  "Business Owner": "🏢",
  "Agency Owner": "🏆",
  "Startup Founder": "🚀",
  "Operations Manager": "⚙️",
  "Consultant": "💼",
  "Other": "✏️",
  "Save time through automation": "⏱️",
  "Reduce operational costs": "💰",
  "Generate more leads": "📈",
  "Improve customer support": "🎯",
  "Scale the business": "📊",
  "Completely new": "🌱",
  "Experimenting occasionally": "🔬",
  "Using ChatGPT regularly": "💬",
  "Running AI workflows": "⚡",
  "AI is already integrated in our business": "🤖",
  "Save 5+ hours per week": "⏰",
  "Reduce manual work": "🔧",
  "Increase revenue": "💵",
  "Improve team productivity": "👥",
  "Scale without hiring": "📐",
  "Just me": "👤",
  "2–10": "👥",
  "11–50": "🏢",
  "51–100": "🏙️",
  "100+": "🌐",
  "Under €50K": "💶",
  "€50K – €250K": "💰",
  "€250K – €1M": "📊",
  "€1M – €5M": "🏆",
  "€5M+": "🌟",
};

// ─── Slide variants ────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 56 : -56, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -56 : 56, opacity: 0 }),
};

// ─── Confetti ─────────────────────────────────────────────────────────────────

const CONFETTI_COLORS = ["#B3001B", "#FF2E4D", "#4285F4", "#34A853", "#FBBC05", "#FF7A8A", "#EA4335"];

function Confetti() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ overflow: "visible" }}>
      {Array.from({ length: 32 }).map((_, i) => {
        const angle = (i / 32) * 360;
        const dist = 120 + (i % 5) * 30;
        const x = Math.cos((angle * Math.PI) / 180) * dist;
        const y = Math.sin((angle * Math.PI) / 180) * dist - 90;
        const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        const isCircle = i % 3 === 0;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: [1, 1, 0], x, y, scale: [0, 1.3, 0.7], rotate: angle * 4 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: (i % 6) * 0.04 }}
            className={`absolute w-2.5 h-2.5 ${isCircle ? "rounded-full" : "rounded-sm"}`}
            style={{ backgroundColor: color, left: "50%", top: "20%", marginLeft: -5, marginTop: -5 }}
          />
        );
      })}
    </div>
  );
}

// ─── Success Screen ────────────────────────────────────────────────────────────

function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative bg-white border border-gray-200 rounded-3xl shadow-xl overflow-visible"
    >
      <Confetti />

      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] rounded-t-3xl" />

      <div className="p-8 sm:p-12 text-center">
        {/* Check icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
          className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30"
        >
          <Check className="w-10 h-10 text-white stroke-[3]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Thank you for your message.
          </h2>
          <p className="text-gray-500 text-lg mt-3 mb-8">
            We will get back to you shortly.
          </p>
        </motion.div>

        {/* Webinar cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          {[
            { icon: <Calendar className="w-5 h-5 text-[#B3001B]" />, label: "Date", value: "Thursday, 2 July 2026" },
            { icon: <Clock className="w-5 h-5 text-[#B3001B]" />, label: "Time", value: "3:00 PM CET · 45 Minutes" },
          ].map((d) => (
            <div key={d.label} className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm">
              {d.icon}
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{d.label}</p>
                <p className="text-sm font-bold text-gray-900">{d.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Google Calendar button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-6 flex justify-center"
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
            <span className="relative z-10 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#4285F4] text-lg">→</span>
          </motion.a>
        </motion.div>

        {/* Email reminder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-400"
        >
          <Mail className="w-4 h-4" />
          Check your email for webinar details
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main Survey ───────────────────────────────────────────────────────────────

export function Survey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mounted, setMounted] = useState(false);

  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout>>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const answersRef = useRef(answers);

  useEffect(() => { answersRef.current = answers; }, [answers]);

  const progress = (step / TOTAL) * 100;
  const q = QUESTIONS[step];
  const currentAnswer = answers[step] ?? "";
  const isLastStep = step === TOTAL - 1;
  const canContinue = q.type === "textarea" || !!currentAnswer;

  // Restore from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { step: s, answers: a } = JSON.parse(raw);
        if (typeof s === "number" && s >= 0 && s < TOTAL && a) {
          setStep(s);
          setAnswers(a);
        }
      }
    } catch { /* ignore */ }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (!mounted || submitted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, answers }));
    } catch { /* ignore */ }
  }, [step, answers, mounted, submitted]);

  // Auto-focus textarea
  useEffect(() => {
    if (q.type === "textarea") {
      const t = setTimeout(() => textareaRef.current?.focus(), 320);
      return () => clearTimeout(t);
    }
  }, [step, q.type]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (submitted || submitting) return;
      const current = QUESTIONS[step];

      if (current.type === "choice" && current.options) {
        const idx = current.options.indexOf(answersRef.current[step] ?? "");
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          selectOption(current.options[(idx + 1) % current.options.length]);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          const prev = idx <= 0 ? current.options.length - 1 : idx - 1;
          selectOption(current.options[prev]);
        } else if (e.key === "Enter" && answersRef.current[step]) {
          e.preventDefault();
          advance();
        }
      }

      if (current.type === "textarea" && e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        advance();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [step, submitted, submitting]);

  const selectOption = (option: string) => {
    clearTimeout(autoAdvanceRef.current);
    setAnswers(prev => ({ ...prev, [step]: option }));
    autoAdvanceRef.current = setTimeout(() => advance(), 300);
  };

  const advance = () => {
    clearTimeout(autoAdvanceRef.current);
    if (step < TOTAL - 1) {
      setDirection(1);
      setStep(s => s + 1);
    } else {
      handleSubmit();
    }
  };

  const goBack = () => {
    clearTimeout(autoAdvanceRef.current);
    if (step > 0) {
      setDirection(-1);
      setStep(s => s - 1);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const email = typeof window !== "undefined" ? (localStorage.getItem("webinar_registrant_email") ?? "") : "";
    const name = typeof window !== "undefined" ? (localStorage.getItem("webinar_registrant_name") ?? "") : "";
    const a = answersRef.current;

    try {
      await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "survey",
          email,
          name,
          role: a[0] ?? "",
          aiGoal: a[1] ?? "",
          aiAdoption: a[2] ?? "",
          aiSuccess: a[3] ?? "",
          companySize: a[4] ?? "",
          revenue: a[5] ?? "",
          challenge: a[6] ?? "",
          webinarQuestion: a[7] ?? "",
        }),
      });
    } catch (err) {
      console.error("[survey]", err);
    } finally {
      setSubmitting(false);
      try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
      setSubmitted(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  if (!mounted) return null;
  if (submitted) return <SuccessScreen />;

  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>

      <div className="p-7 sm:p-10">
        {/* Header row */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#B3001B] to-[#FF2E4D] text-white flex items-center justify-center text-xs font-black shadow-sm">
              {step + 1}
            </span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              of {TOTAL}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden hidden sm:block">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </div>
            <span className="text-xs font-semibold text-gray-400">
              {Math.round(progress)}% done
            </span>
          </div>
        </div>

        {/* Animated question */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.26, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Question text */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                {q.question}
              </h2>
              <p className="text-sm text-gray-500 mt-1.5">{q.subtitle}</p>
              {q.type === "choice" && (
                <p className="text-xs text-gray-400 mt-1">
                  Use <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px] font-mono border border-gray-200">↑↓</kbd> arrow keys or click to select
                </p>
              )}
              {q.type === "textarea" && (
                <p className="text-xs text-gray-400 mt-1">
                  Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px] font-mono border border-gray-200">Ctrl+Enter</kbd> to continue
                </p>
              )}
            </div>

            {/* Choice options */}
            {q.type === "choice" && q.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((option, i) => {
                  const isSelected = currentAnswer === option;
                  return (
                    <motion.button
                      key={option}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                      whileHover={{ y: -1, transition: { duration: 0.15 } }}
                      whileTap={{ scale: 0.985 }}
                      onClick={() => selectOption(option)}
                      className={`relative flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-colors duration-150 cursor-pointer ${
                        isSelected
                          ? "border-[#B3001B] bg-[#B3001B]/[0.04]"
                          : "border-gray-200 bg-white hover:border-[#B3001B]/30 hover:bg-[#B3001B]/[0.02]"
                      }`}
                    >
                      <span className="text-xl w-7 shrink-0 text-center leading-none">
                        {OPTION_ICONS[option] ?? "•"}
                      </span>
                      <span className={`text-sm font-semibold flex-1 leading-snug ${isSelected ? "text-[#B3001B]" : "text-gray-700"}`}>
                        {option}
                      </span>
                      <AnimatePresence>
                        {isSelected && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="w-5 h-5 rounded-full bg-[#B3001B] flex items-center justify-center shrink-0 shadow-sm"
                          >
                            <Check className="w-3 h-3 text-white stroke-[3]" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Textarea */}
            {q.type === "textarea" && (
              <textarea
                ref={textareaRef}
                value={currentAnswer}
                onChange={e => setAnswers(prev => ({ ...prev, [step]: e.target.value }))}
                placeholder={q.placeholder}
                rows={5}
                className="w-full bg-gray-50/80 border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#B3001B] focus:ring-2 focus:ring-[#B3001B]/15 focus:bg-white transition-all duration-200 resize-none leading-relaxed"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          {/* Back */}
          <motion.button
            whileHover={step > 0 ? { x: -2 } : {}}
            whileTap={step > 0 ? { scale: 0.96 } : {}}
            onClick={goBack}
            disabled={step === 0}
            className={`flex items-center gap-1.5 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 ${
              step === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </motion.button>

          {/* Continue / Next / Submit */}
          <AnimatePresence mode="wait">
            {(q.type === "textarea" || canContinue) && (
              <motion.button
                key="continue"
                initial={{ opacity: 0, scale: 0.9, x: 8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.18 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={advance}
                disabled={submitting}
                className="flex items-center gap-2 bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] text-white font-bold text-sm py-3 px-6 rounded-xl shadow-md hover:shadow-lg disabled:opacity-60 transition-all duration-200"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting…
                  </>
                ) : isLastStep ? (
                  <>
                    Submit
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
