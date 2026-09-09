import { profile } from "@/lib/data";
import { Led } from "./ui/Led";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-graphite bg-ink py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="font-mono-label text-[11px] uppercase tracking-widest text-steel">
          © {year} {profile.name}
        </p>
        <div className="flex items-center gap-2">
          <Led size={7} />
          <span className="font-mono-label text-[11px] uppercase tracking-widest text-paper-dim">
            System Status: Online
          </span>
        </div>
      </div>
    </footer>
  );
}
