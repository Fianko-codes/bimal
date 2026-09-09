import { clsx } from "clsx";

interface LedProps {
  size?: number;
  animate?: "pulse" | "blink" | "none";
  color?: "volt" | "danger" | "ok";
  className?: string;
}

const colorMap: Record<NonNullable<LedProps["color"]>, string> = {
  volt: "bg-volt shadow-[0_0_6px_1px_rgba(255,212,0,0.9),0_0_14px_4px_rgba(255,212,0,0.4)]",
  danger: "bg-danger shadow-[0_0_6px_1px_rgba(255,59,48,0.9),0_0_14px_4px_rgba(255,59,48,0.4)]",
  ok: "bg-ok shadow-[0_0_6px_1px_rgba(46,204,113,0.9),0_0_14px_4px_rgba(46,204,113,0.4)]",
};

export function Led({ size = 8, animate = "pulse", color = "volt", className }: LedProps) {
  return (
    <span
      className={clsx(
        "inline-block rounded-full",
        colorMap[color],
        animate === "pulse" && "led-pulse",
        animate === "blink" && "led-blink",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
