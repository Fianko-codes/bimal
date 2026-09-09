"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/data";
import { Led } from "./ui/Led";
import { Readout } from "./ui/Readout";
import { ToggleSwitch } from "./ui/ToggleSwitch";
import { Waveform } from "./ui/Waveform";
import { PowerGridViz } from "./PowerGridViz";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden circuit-grid-bg pt-28 pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 75% 30%, rgba(255,212,0,0.10), transparent 70%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(255,177,0,0.06), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* left column: identity + status */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="flex items-center gap-2 rounded-sm border border-volt-dim bg-volt/5 px-3 py-1.5">
              <Led size={7} />
              <span className="font-mono-label text-[11px] uppercase tracking-widest text-volt">
                System Status: Online
              </span>
            </span>
            <span className="font-mono-label text-[11px] uppercase tracking-widest text-steel">
              SYS-00 // IDENTITY MODULE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-heading)] text-[13vw] font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-6xl md:text-7xl"
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-volt-glow">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-mono-label text-sm uppercase tracking-[0.2em] text-amber"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg text-base leading-relaxed text-paper-dim sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-sm border border-volt bg-volt px-6 py-3 font-mono-label text-xs font-semibold uppercase tracking-widest text-ink transition-transform active:scale-[0.98]"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 -translate-x-full bg-volt-bright transition-transform duration-300 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-graphite-2 px-6 py-3 font-mono-label text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:border-volt-dim hover:text-volt"
            >
              Open Channel
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-4 border-t border-graphite pt-6 sm:grid-cols-4"
          >
            <Readout label="Voltage" value={profile.metrics.voltage} />
            <Readout label="Current" value={profile.metrics.current} />
            <Readout label="Frequency" value={profile.metrics.frequency} />
            <Readout label="Grid Load" value={profile.metrics.load} />
          </motion.div>
        </div>

        {/* right column: control panel visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="corner-brackets panel relative rounded-md p-5 sm:p-7"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono-label text-[10px] uppercase tracking-widest text-steel">
              SYS-01 // POWER MANAGEMENT
            </span>
            <div className="flex gap-1.5">
              <Led size={6} color="ok" />
              <Led size={6} color="volt" />
              <Led size={6} animate="blink" />
            </div>
          </div>

          <div className="mb-5 flex items-center justify-center gap-6 rounded-sm border border-graphite bg-ink/40 py-5">
            <div className="flex flex-col items-center gap-2">
              <span className="beacon h-10 w-10" />
              <span className="font-mono-label text-[10px] uppercase tracking-widest text-paper-dim">
                Power On
              </span>
            </div>
            <ToggleSwitch label="Aux Power" defaultOn />
            <div className="hidden flex-col items-center gap-1 sm:flex">
              <Waveform width={140} height={44} />
              <span className="font-mono-label text-[9px] uppercase tracking-widest text-steel">
                Grid Connection: Stable
              </span>
            </div>
          </div>

          <PowerGridViz />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-graphite pt-4 font-mono-label text-[10px] uppercase tracking-widest text-steel">
            <span>L1 / L2 / L3 / N</span>
            <span className="text-volt">Grid Connection: Stable</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono-label text-[9px] uppercase tracking-[0.3em] text-steel">Scroll</span>
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-volt to-transparent" />
      </motion.a>
    </section>
  );
}
