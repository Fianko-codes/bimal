import { research } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const fields: { key: keyof (typeof research)[number]; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "methodology", label: "Methodology" },
  { key: "findings", label: "Findings" },
];

export function Research() {
  return (
    <section id="research" className="relative overflow-hidden border-t border-graphite bg-ink-2 py-24 sm:py-32">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="schematic" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 H80 M40 0 V80" stroke="var(--volt)" strokeWidth="1" />
            <circle cx="40" cy="40" r="3" fill="none" stroke="var(--volt)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#schematic)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          code="06 // LAB REPORTS"
          title="Research"
          subtitle="Technical investigations, written up the way an engineering lab report demands."
        />

        <div className="mt-14 flex flex-col gap-6">
          {research.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <article className="panel rounded-md p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-graphite pb-4">
                  <span className="font-mono-label text-[10px] uppercase tracking-widest text-volt">
                    {item.code}
                  </span>
                  <span className="font-mono-label text-[10px] uppercase tracking-widest text-steel">
                    {item.publication}
                  </span>
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-paper sm:text-2xl">
                  {item.title}
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {fields.map((field) => (
                    <div key={field.label}>
                      <span className="font-mono-label text-[10px] uppercase tracking-widest text-volt">
                        {field.label}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-paper-dim">
                        {item[field.key] as string}
                      </p>
                    </div>
                  ))}
                </div>

                {(item.paper || item.github) && (
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-graphite pt-5">
                    {item.paper && (
                      <a
                        href={item.paper}
                        className="flex items-center gap-1.5 rounded-sm border border-graphite-2 px-3 py-1.5 font-mono-label text-[10px] uppercase tracking-widest text-paper-dim transition-colors hover:border-volt-dim hover:text-volt"
                      >
                        <span className="h-1 w-1 rounded-full bg-current" /> Read Paper
                      </a>
                    )}
                    {item.github && (
                      <a
                        href={item.github}
                        className="flex items-center gap-1.5 rounded-sm border border-graphite-2 px-3 py-1.5 font-mono-label text-[10px] uppercase tracking-widest text-paper-dim transition-colors hover:border-volt-dim hover:text-volt"
                      >
                        <span className="h-1 w-1 rounded-full bg-current" /> Source
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
