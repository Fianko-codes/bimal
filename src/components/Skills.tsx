import { skillCategories } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Led } from "./ui/Led";

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-graphite bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          code="04 // INSTRUMENTATION"
          title="Skills"
          subtitle="The disciplines, tools, and languages this workstation is calibrated for."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <Reveal key={category.code} delay={ci * 0.1}>
              <div className="panel h-full rounded-md p-6">
                <div className="flex items-center justify-between border-b border-graphite pb-3">
                  <div>
                    <span className="font-mono-label text-[9px] uppercase tracking-widest text-steel">
                      {category.code}
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold uppercase tracking-tight text-paper">
                      {category.title}
                    </h3>
                  </div>
                  <Led size={6} />
                </div>

                <ul className="mt-5 flex flex-col gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 rounded-sm border border-graphite-2 bg-ink-3 px-3 py-2.5 transition-colors hover:border-volt-dim"
                    >
                      <Led size={6} />
                      <span className="font-mono-label text-xs uppercase tracking-wide text-paper-dim">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
