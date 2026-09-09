import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Led } from "./ui/Led";

const dataCards = [
  { label: "Engineering Discipline", value: "Electrical Engineering" },
  { label: "Current Status", value: profile.status },
  { label: "Institution", value: profile.university },
  { label: "Location", value: profile.location },
];

const interests = ["Power Systems", "Electronics", "Embedded Systems", "Control"];

export function About() {
  return (
    <section id="about" className="relative border-t border-graphite bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading code="01 // PROFILE" title="About the Engineer" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal direction="left">
            <div className="corner-brackets panel relative mx-auto aspect-square w-full max-w-xs rounded-md p-3">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm bg-gradient-to-br from-ink-4 via-ink-3 to-ink border border-graphite">
                <div className="circuit-grid-bg absolute inset-0 opacity-40" />
                <span className="relative font-[family-name:var(--font-heading)] text-6xl font-bold text-volt-glow">
                  {profile.initials}
                </span>
                <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-sm border border-volt-dim bg-ink/70 px-2 py-1">
                  <Led size={5} />
                  <span className="font-mono-label text-[8px] uppercase tracking-widest text-volt">Live</span>
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono-label text-[9px] uppercase tracking-widest text-steel">
                <span>IMG-ID: 0x{profile.initials.toUpperCase()}7F</span>
                <span>SCALE 1:1</span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.05}>
              <p className="max-w-2xl text-base leading-relaxed text-paper-dim sm:text-lg">{profile.bio}</p>
              <p className="mt-4 max-w-2xl font-mono-label text-xs uppercase tracking-widest text-steel">
                {profile.degree}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {dataCards.map((card) => (
                  <div key={card.label} className="panel rounded-sm p-4">
                    <span className="font-mono-label text-[10px] uppercase tracking-widest text-volt">
                      {card.label}
                    </span>
                    <p className="mt-1.5 text-sm text-paper">{card.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="panel mt-4 rounded-sm p-4">
                <span className="font-mono-label text-[10px] uppercase tracking-widest text-volt">Interests</span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {interests.map((interest, i) => (
                    <span
                      key={interest}
                      className="flex items-center gap-1.5 rounded-sm border border-graphite-2 bg-ink-3 px-2.5 py-1 font-mono-label text-[11px] text-paper-dim"
                    >
                      <Led size={5} animate={i % 2 === 0 ? "pulse" : "blink"} />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
