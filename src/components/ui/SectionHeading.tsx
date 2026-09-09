import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  code: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ code, title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-volt-dim" aria-hidden="true" />
        <span className="font-mono-label text-xs uppercase tracking-[0.3em] text-volt">{code}</span>
      </div>
      <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold uppercase tracking-tight text-paper sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl font-mono-label text-sm leading-relaxed text-paper-dim">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
