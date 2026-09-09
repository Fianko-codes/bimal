import { profile } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Led } from "./ui/Led";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, code: "L1" },
  { label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github, code: "L2" },
  { label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin, code: "L3" },
];

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-graphite bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading code="07 // COMMS" title="Establish Connection" align="center" />

        <Reveal delay={0.1}>
          <div className="corner-brackets panel mt-14 rounded-md">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-graphite px-6 py-4">
              <span className="font-mono-label text-[10px] uppercase tracking-widest text-steel">
                TERMINAL // COMMS-01
              </span>
              <div className="flex items-center gap-4 font-mono-label text-[10px] uppercase tracking-widest">
                <span className="flex items-center gap-1.5 text-paper-dim">
                  <Led size={6} />
                  Channel: Secure
                </span>
                <span className="text-volt">Connection: Ready</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 sm:p-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-sm border border-graphite-2 bg-ink-3 px-4 py-4 transition-colors hover:border-volt-dim"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono-label text-[10px] text-steel">{link.code}</span>
                    <div>
                      <p className="font-mono-label text-[10px] uppercase tracking-widest text-volt">
                        {link.label}
                      </p>
                      <p className="text-sm text-paper-dim group-hover:text-paper">{link.value}</p>
                    </div>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-graphite-2 transition-colors group-hover:bg-volt group-hover:shadow-[0_0_8px_rgba(255,212,0,0.8)]" />
                </a>
              ))}

              <div className="mt-1 rounded-sm border border-graphite bg-ink/40 px-4 py-3 font-mono-label text-[10px] uppercase tracking-widest text-steel">
                Response Time: ~24-48H // AC BUS
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
