import { clsx } from "clsx";

interface ReadoutProps {
  label: string;
  value: string;
  className?: string;
  valueClassName?: string;
}

export function Readout({ label, value, className, valueClassName }: ReadoutProps) {
  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <span className="font-mono-label text-[10px] uppercase text-steel">{label}</span>
      <span className={clsx("font-mono-label text-sm text-paper", valueClassName)}>{value}</span>
    </div>
  );
}
