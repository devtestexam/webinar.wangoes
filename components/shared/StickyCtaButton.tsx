"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyCtaButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 md:hidden"
        >
          <a
            href="#register"
            className="flex items-center justify-center gap-2 w-full max-w-sm bg-gradient-to-r from-[#B3001B] to-[#FF2E4D] text-white font-bold text-base py-4 px-6 rounded-2xl shadow-2xl glow-red-strong"
          >
            <span className="animate-ping-slow inline-block w-2 h-2 rounded-full bg-white opacity-75 mr-1" />
            Reserve Your Free Seat
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
