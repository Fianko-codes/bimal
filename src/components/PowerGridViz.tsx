const NODES = [
  { x: 110, cx: 110, code: "SYS-01", label: "CTRL" },
  { x: 210, cx: 210, code: "SYS-02", label: "MTR" },
  { x: 310, cx: 310, code: "SYS-03", label: "PWR" },
  { x: 410, cx: 410, code: "SYS-04", label: "AUX" },
];

export function PowerGridViz() {
  return (
    <div className="relative w-full" aria-hidden="true">
      <svg viewBox="0 0 520 400" className="h-auto w-full overflow-visible">
        <defs>
          <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* background decorative faint traces */}
        <g stroke="rgba(255,212,0,0.08)" strokeWidth="1" fill="none">
          <path d="M20 40 H500" />
          <path d="M20 360 H500" />
          <path d="M20 40 V360" />
          <path d="M500 40 V360" />
        </g>

        {/* incoming three-phase lines */}
        <g stroke="var(--volt)" strokeWidth="2" fill="none" opacity="0.9">
          <path d="M180 20 V70 L245 100" className="current-flow" style={{ animationDelay: "0s" }} />
          <path d="M260 20 V85" className="current-flow" style={{ animationDelay: "0.3s" }} />
          <path d="M340 20 V70 L275 100" className="current-flow" style={{ animationDelay: "0.6s" }} />
        </g>
        <g className="font-mono-label" fill="var(--steel)" fontSize="10" letterSpacing="1">
          <text x="172" y="14">L1</text>
          <text x="252" y="14">L2</text>
          <text x="332" y="14">L3</text>
        </g>

        {/* transformer symbol: two coil stacks */}
        <g filter="url(#softGlow)">
          <g fill="none" stroke="var(--volt-bright)" strokeWidth="2">
            <circle cx="248" cy="100" r="16" />
            <circle cx="248" cy="122" r="16" />
            <circle cx="248" cy="144" r="16" />
            <circle cx="272" cy="100" r="16" />
            <circle cx="272" cy="122" r="16" />
            <circle cx="272" cy="144" r="16" />
          </g>
        </g>
        <line x1="260" y1="82" x2="260" y2="162" stroke="var(--graphite-2)" strokeWidth="1" strokeDasharray="2 3" />

        {/* transformer output to bus */}
        <path
          d="M260 160 V210"
          stroke="var(--volt)"
          strokeWidth="2.5"
          className="current-flow"
          style={{ animationDelay: "0.9s" }}
        />

        {/* distribution bus bar */}
        <line x1="70" y1="212" x2="450" y2="212" stroke="var(--volt-bright)" strokeWidth="3" filter="url(#softGlow)" />
        <text x="70" y="200" className="font-mono-label" fill="var(--paper-dim)" fontSize="11" letterSpacing="1.5">
          AC BUS
        </text>

        {/* branches down to load nodes */}
        {NODES.map((n, i) => (
          <g key={n.code}>
            <path
              d={`M${n.x} 212 V250`}
              stroke="var(--volt)"
              strokeWidth="2"
              className="current-flow"
              style={{ animationDelay: `${1.1 + i * 0.25}s` }}
            />
            <circle
              cx={n.cx}
              cy="278"
              r="20"
              fill="var(--ink-3)"
              stroke="var(--volt)"
              strokeWidth="1.5"
              filter="url(#softGlow)"
            />
            <circle cx={n.cx} cy="278" r="4" fill="var(--volt)" className="led-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
            <text
              x={n.cx}
              y="316"
              textAnchor="middle"
              className="font-mono-label"
              fill="var(--paper-dim)"
              fontSize="10"
              letterSpacing="1"
            >
              {n.label}
            </text>
            <text
              x={n.cx}
              y="330"
              textAnchor="middle"
              className="font-mono-label"
              fill="var(--steel)"
              fontSize="8"
              letterSpacing="1"
            >
              {n.code}
            </text>
          </g>
        ))}

        {/* neutral / ground */}
        <g transform="translate(460, 212)">
          <path d="M0 0 V30" stroke="var(--steel)" strokeWidth="1.5" />
          <line x1="-8" y1="30" x2="8" y2="30" stroke="var(--steel)" strokeWidth="1.5" />
          <line x1="-5" y1="34" x2="5" y2="34" stroke="var(--steel)" strokeWidth="1.5" />
          <line x1="-2" y1="38" x2="2" y2="38" stroke="var(--steel)" strokeWidth="1.5" />
          <text x="6" y="-4" className="font-mono-label" fill="var(--steel)" fontSize="9">N</text>
        </g>
      </svg>
    </div>
  );
}
