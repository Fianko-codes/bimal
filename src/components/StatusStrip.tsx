import { Led } from "./ui/Led";
import { ToggleSwitch } from "./ui/ToggleSwitch";
import { Reveal } from "./ui/Reveal";

const readouts = [
  { label: "Thermal", value: "Normal", tone: "ok" as const },
  { label: "Voltage", value: "Stable", tone: "volt" as const },
  { label: "Load", value: "42%", tone: "volt" as const },
];

export function StatusStrip() {
  return (
    <section className="relative border-y border-graphite bg-ink-3/60" aria-label="System status strip">
      <div className="hazard-stripe h-1.5 w-full opacity-70" />
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3 rounded-sm border border-volt/50 bg-volt/5 px-3 py-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-volt text-volt">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 L2 20 H22 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <line x1="12" y1="9" x2="12" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="17" r="1" fill="currentColor" />
                </svg>
              </span>
              <div>
                <p className="font-mono-label text-[10px] font-bold uppercase tracking-widest text-volt">
                  High Voltage
                </p>
                <p className="font-mono-label text-[9px] uppercase tracking-widest text-steel">Caution</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {readouts.map((r) => (
                <div key={r.label} className="flex items-center gap-2">
                  <Led size={7} color={r.tone === "ok" ? "ok" : "volt"} />
                  <div>
                    <p className="font-mono-label text-[9px] uppercase tracking-widest text-steel">{r.label}</p>
                    <p className="font-mono-label text-xs uppercase tracking-widest text-paper">{r.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <ToggleSwitch label="Ctrl Breaker" defaultOn />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
