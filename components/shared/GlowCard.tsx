"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  dark?: boolean;
}

export function GlowCard({ children, className, hover = true, delay = 0, dark = false }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        dark ? "glass-card-dark" : "glass-card",
        hover && "cursor-pointer transition-shadow duration-300",
        hover && !dark && "hover:glow-red hover:border-[#B3001B]/30",
        className
      )}
    >
      {/* Subtle red corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#B3001B]/10 to-transparent rounded-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
}
