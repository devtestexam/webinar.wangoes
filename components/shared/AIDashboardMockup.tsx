"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit, Workflow, BarChart3, Bot, Zap,
  CheckCircle2, ArrowRight, Users, Globe
} from "lucide-react";

// Animated AI dashboard mockup that appears on the right side of the hero
export function AIDashboardMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#B3001B]/20 to-transparent rounded-3xl blur-2xl scale-110" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative glass-card rounded-3xl p-5 border border-[#B3001B]/20 glow-red"
      >
        {/* Dashboard header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF2E4D]" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-1.5 bg-[#B3001B]/10 rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#B3001B] animate-pulse" />
            <span className="text-[10px] font-semibold text-[#B3001B] tracking-widest uppercase">AI OS Live</span>
          </div>
        </div>

        {/* Top stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Tasks Automated", value: "2,847", icon: <Zap className="w-3 h-3" />, color: "text-[#B3001B]" },
            { label: "AI Agents Active", value: "12", icon: <Bot className="w-3 h-3" />, color: "text-emerald-500" },
            { label: "Hours Saved", value: "340h", icon: <CheckCircle2 className="w-3 h-3" />, color: "text-blue-500" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-white/60 rounded-xl p-2.5 border border-gray-100"
            >
              <div className={`flex items-center gap-1 ${stat.color} mb-1`}>
                {stat.icon}
                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">{stat.label}</span>
              </div>
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Workflow visualization */}
        <div className="bg-white/50 rounded-2xl p-3 mb-3 border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Workflow className="w-4 h-4 text-[#B3001B]" />
            <span className="text-xs font-semibold text-gray-700">Live Workflow Engine</span>
            <div className="ml-auto flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#B3001B]"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {["Lead In", "AI Qualify", "CRM Update", "Follow-Up", "Close"].map((step, i) => (
              <div key={step} className="flex items-center gap-1.5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                  className="flex flex-col items-center"
                >
                  <div className={`rounded-lg px-2 py-1 text-[9px] font-semibold whitespace-nowrap ${
                    i === 0 ? "bg-[#B3001B]/10 text-[#B3001B] border border-[#B3001B]/30" :
                    i === 1 ? "bg-blue-50 text-blue-600 border border-blue-200" :
                    i === 2 ? "bg-emerald-50 text-emerald-600 border border-emerald-200" :
                    i === 3 ? "bg-purple-50 text-purple-600 border border-purple-200" :
                    "bg-orange-50 text-orange-600 border border-orange-200"
                  }`}>
                    {step}
                  </div>
                  <motion.div
                    animate={{ height: ["60%", "100%", "60%"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    className="w-0.5 h-4 bg-gradient-to-b from-[#B3001B]/40 to-transparent mt-1 rounded"
                  />
                </motion.div>
                {i < 4 && (
                  <ArrowRight className="w-2.5 h-2.5 text-gray-300 flex-shrink-0 -mt-3" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: agents + analytics */}
        <div className="grid grid-cols-2 gap-2">
          {/* AI Agents panel */}
          <div className="bg-white/50 rounded-xl p-3 border border-gray-100">
            <div className="flex items-center gap-1.5 mb-2">
              <BrainCircuit className="w-3.5 h-3.5 text-[#B3001B]" />
              <span className="text-[10px] font-semibold text-gray-600">AI Agents</span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: "Sales Agent", status: "active", load: 78 },
                { name: "Support Bot", status: "active", load: 45 },
                { name: "Email AI", status: "running", load: 92 },
              ].map((agent, i) => (
                <motion.div
                  key={agent.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-center gap-1.5"
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${agent.status === 'active' ? 'bg-emerald-400' : 'bg-[#B3001B]'} animate-pulse`} />
                  <span className="text-[9px] text-gray-600 flex-1">{agent.name}</span>
                  <div className="w-12 h-1 rounded-full bg-gray-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${agent.load}%` }}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#B3001B] to-[#FF2E4D]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Analytics panel */}
          <div className="bg-white/50 rounded-xl p-3 border border-gray-100">
            <div className="flex items-center gap-1.5 mb-2">
              <BarChart3 className="w-3.5 h-3.5 text-[#B3001B]" />
              <span className="text-[10px] font-semibold text-gray-600">Performance</span>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-[#B3001B] to-[#FF2E4D] opacity-70"
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[8px] text-gray-400">Mon</span>
              <span className="text-[8px] text-gray-400">Sun</span>
            </div>
          </div>
        </div>

        {/* Bottom trust row */}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100/80">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#B3001B]" />
            <span className="text-[9px] text-gray-500">USA · UK · Europe</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3 h-3 text-emerald-500" />
            <span className="text-[9px] text-gray-500">100+ SME clients</span>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-medium text-emerald-600">All Systems Go</span>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: -10 }}
        transition={{ delay: 1.4 }}
        style={{ animation: "float 4s ease-in-out infinite 1.4s" }}
        className="absolute -top-4 -right-4 glass-card rounded-2xl px-3 py-2 shadow-xl border border-[#B3001B]/20"
      >
        <div className="flex items-center gap-1.5">
          <Bot className="w-4 h-4 text-[#B3001B]" />
          <div>
            <div className="text-[10px] font-bold text-gray-800">AI Autopilot</div>
            <div className="text-[9px] text-emerald-500 font-medium">● Running 24/7</div>
          </div>
        </div>
      </motion.div>

      {/* Floating ROI badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: -20 }}
        transition={{ delay: 1.6 }}
        style={{ animation: "float 5s ease-in-out infinite 2s" }}
        className="absolute bottom-4 -left-4 glass-card rounded-2xl px-3 py-2 shadow-xl border border-[#B3001B]/20"
      >
        <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Time Saved</div>
        <div className="text-lg font-bold text-gradient-red">340 hrs/mo</div>
      </motion.div>
    </div>
  );
}
