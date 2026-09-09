"use client";

import { useState } from "react";
import { clsx } from "clsx";

interface ToggleSwitchProps {
  label: string;
  defaultOn?: boolean;
  onLabel?: string;
  offLabel?: string;
}

export function ToggleSwitch({ label, defaultOn = true, onLabel = "ON", offLabel = "OFF" }: ToggleSwitchProps) {
  const [on, setOn] = useState(defaultOn);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="font-mono-label text-[10px] uppercase tracking-widest text-steel">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={`${label} ${on ? onLabel : offLabel}`}
        onClick={() => setOn((v) => !v)}
        className={clsx(
          "relative h-9 w-16 rounded-sm border transition-colors duration-200 cursor-pointer",
          on ? "border-volt-dim bg-volt/10" : "border-graphite-2 bg-ink-3",
        )}
      >
        <span
          className={clsx(
            "absolute top-1 h-7 w-7 rounded-sm border transition-all duration-200 flex items-center justify-center",
            on
              ? "left-8 border-volt bg-gradient-to-b from-volt-bright to-amber shadow-[0_0_10px_rgba(255,212,0,0.7)]"
              : "left-1 border-graphite-2 bg-ink-4",
          )}
        >
          <span className={clsx("h-1 w-3 rounded-full", on ? "bg-ink/60" : "bg-steel/50")} />
        </span>
      </button>
      <span className="font-mono-label text-[10px] tracking-widest text-paper-dim">
        {on ? onLabel : offLabel}
      </span>
    </div>
  );
}
