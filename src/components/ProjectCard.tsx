import type { Project } from "@/lib/data";
import { StatusBadge } from "./ui/StatusBadge";
import { Reveal } from "./ui/Reveal";

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 rounded-sm border border-graphite-2 px-2.5 py-1.5 font-mono-label text-[10px] uppercase tracking-widest text-paper-dim transition-colors hover:border-volt-dim hover:text-volt"
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {label}
    </a>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <div className="group panel relative overflow-hidden rounded-md transition-colors duration-300 hover:border-volt-dim">
        {/* activating circuit trace along the top edge */}
        <svg className="absolute inset-x-0 top-0 h-6 w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" preserveAspectRatio="none" viewBox="0 0 400 24">
          <path
            d="M0 12 H140 L160 2 H240 L260 12 H400"
            fill="none"
            stroke="var(--volt)"
            strokeWidth="1.5"
            className="current-flow"
          />
        </svg>

        <div className="flex items-center justify-between border-b border-graphite px-5 py-3">
          <span className="font-mono-label text-[10px] uppercase tracking-widest text-steel group-hover:text-volt-dim">
            {project.code}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div className="p-5">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-paper">
            {project.name}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-paper-dim">{project.description}</p>

          <div className="mt-4 grid grid-cols-1 gap-3 border-y border-graphite py-4 sm:grid-cols-2">
            <div>
              <span className="font-mono-label text-[9px] uppercase tracking-widest text-volt">Problem</span>
              <p className="mt-1 text-xs leading-relaxed text-paper-dim">{project.problem}</p>
            </div>
            <div>
              <span className="font-mono-label text-[9px] uppercase tracking-widest text-volt">Result</span>
              <p className="mt-1 text-xs leading-relaxed text-paper-dim">{project.result}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-graphite-2 bg-ink-3 px-2 py-1 font-mono-label text-[10px] text-steel"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {project.github && <ExternalLink href={project.github} label="GitHub" />}
              {project.demo && <ExternalLink href={project.demo} label="Live Demo" />}
              {project.paper && <ExternalLink href={project.paper} label="Paper" />}
            </div>

            <div className="flex flex-col items-end opacity-70 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-mono-label text-[9px] uppercase tracking-widest text-steel">
                {project.metric.label}
              </span>
              <span className="font-mono-label text-sm font-semibold text-volt-glow">{project.metric.value}</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
