interface WaveformProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

function buildSinePath(width: number, height: number, cycles: number) {
  const points: string[] = [];
  const steps = 120;
  const mid = height / 2;
  const amp = height * 0.36;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y = mid + Math.sin((i / steps) * cycles * Math.PI * 2) * amp;
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `M${points.join(" L")}`;
}

export function Waveform({ width = 240, height = 60, className, color = "var(--volt)" }: WaveformProps) {
  const path = buildSinePath(width, height, 3);
  const viewW = width * 2;

  return (
    <div className={className} style={{ width, height, overflow: "hidden" }} aria-hidden="true">
      <svg width={viewW} height={height} viewBox={`0 0 ${viewW} ${height}`} className="marquee-track">
        <g stroke={color} strokeWidth="1.5" fill="none" style={{ filter: "drop-shadow(0 0 3px rgba(255,212,0,0.5))" }}>
          <path d={path} />
          <path d={path} transform={`translate(${width}, 0)`} />
        </g>
      </svg>
    </div>
  );
}
