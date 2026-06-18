"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEBINAR_DATE = new Date("2026-07-02T09:00:00+01:00");

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculate = () => {
      const now = new Date();
      const diff = WEBINAR_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center gap-2">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="glass-card rounded-xl px-3 py-2 min-w-[52px] text-center glow-red">
              <span className="text-2xl font-bold text-gradient-red tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] text-gray-400 mt-1 font-medium tracking-widest uppercase">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-xl font-bold text-[#B3001B] mb-4 opacity-60">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
