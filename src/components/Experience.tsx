import { clsx } from "clsx";
import { timeline, type TimelineType } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Led } from "./ui/Led";

const typeLabel: Record<TimelineType, string> = {
  education: "Education",
  experience: "Experience",
  research: "Research",
};

const typeColor: Record<TimelineType, string> = {
  education: "text-paper-dim border-graphite-2",
  experience: "text-volt border-volt-dim",
  research: "text-ok border-ok/40",
};

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          code="03 // TRANSMISSION LOG"
          title="Experience &amp; Education"
          subtitle="A timeline of study, research, and fieldwork — each node a point of energy transfer."
        />

        <div className="relative mt-16 pl-10 sm:pl-14">
          <div className="transmission-line absolute left-3 top-1 bottom-1 w-[2px] sm:left-5" />

          <ol className="flex flex-col gap-12">
            {timeline.map((event, i) => (
              <Reveal key={`${event.year}-${event.title}`} delay={i * 0.06} direction="left" y={16}>
                <li className="group relative">
                  <span
                    className={clsx(
                      "absolute -left-10 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border bg-ink-2 transition-shadow duration-300 sm:-left-14",
                      event.current ? "border-volt shadow-[0_0_14px_rgba(255,212,0,0.6)]" : "border-graphite-2",
                      "group-hover:border-volt group-hover:shadow-[0_0_14px_rgba(255,212,0,0.6)]",
                    )}
                  >
                    <Led size={7} animate={event.current ? "pulse" : "none"} />
                  </span>

                  <div className="panel rounded-md p-5 transition-colors duration-300 group-hover:border-volt-dim">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono-label text-lg font-bold text-volt-glow">{event.year}</span>
                      <span
                        className={clsx(
                          "rounded-sm border px-2 py-0.5 font-mono-label text-[10px] uppercase tracking-widest",
                          typeColor[event.type],
                        )}
                      >
                        {typeLabel[event.type]}
                      </span>
                      {event.current && (
                        <span className="font-mono-label text-[10px] uppercase tracking-widest text-volt">
                          Active
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-paper">
                      {event.title}
                    </h3>
                    <p className="font-mono-label text-xs uppercase tracking-wide text-steel">{event.org}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-paper-dim">{event.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
