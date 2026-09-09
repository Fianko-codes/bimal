import { clsx } from "clsx";
import type { ProjectStatus } from "@/lib/data";
import { Led } from "./Led";

const statusStyles: Record<ProjectStatus, string> = {
  OPERATIONAL: "text-volt border-volt-dim bg-volt/5",
  PROTOTYPE: "text-amber border-amber/40 bg-amber/5",
  RESEARCH: "text-paper-dim border-graphite-2 bg-white/5",
  ARCHIVED: "text-steel border-graphite bg-white/0",
};

const statusLed: Record<ProjectStatus, "volt" | "danger" | "ok"> = {
  OPERATIONAL: "volt",
  PROTOTYPE: "volt",
  RESEARCH: "ok",
  ARCHIVED: "danger",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono-label text-[10px] uppercase tracking-widest",
        statusStyles[status],
      )}
    >
      <Led size={6} color={statusLed[status]} animate={status === "ARCHIVED" ? "none" : "pulse"} />
      {status}
    </span>
  );
}
