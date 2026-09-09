import { honors } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

function MedalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 2 L4 9 L9 9 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 2 L20 9 L15 9 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="15" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 11.5 L13.2 14 L16 14.4 L14 16.3 L14.5 19 L12 17.6 L9.5 19 L10 16.3 L8 14.4 L10.8 14 Z" fill="currentColor" />
    </svg>
  );
}

export function Honors() {
  return (
    <section id="honors" className="relative border-t border-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          code="05 // COMMENDATIONS"
          title="Honors &amp; Awards"
          subtitle="Recognitions logged to date."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {honors.map((honor, i) => (
            <Reveal key={honor.id} delay={(i % 2) * 0.08}>
              <div className="group panel flex h-full gap-4 rounded-md p-5 transition-colors duration-300 hover:border-volt-dim">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-volt-dim bg-volt/5 text-volt transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(255,212,0,0.35)]">
                  <MedalIcon />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-label text-[9px] uppercase tracking-widest text-steel">
                      {honor.code}
                    </span>
                    <span className="font-mono-label text-[10px] uppercase tracking-widest text-volt">
                      {honor.year}
                    </span>
                  </div>
                  <h3 className="mt-1 font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-paper">
                    {honor.title}
                  </h3>
                  <p className="font-mono-label text-[11px] uppercase tracking-wide text-steel">{honor.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper-dim">{honor.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
