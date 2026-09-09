// ============================================================================
// SINGLE SOURCE OF CONTENT — edit this file to make the site yours.
// Every visible piece of personal/portfolio content is defined below.
// ============================================================================

export type ProjectStatus = "OPERATIONAL" | "PROTOTYPE" | "RESEARCH" | "ARCHIVED";

export interface Profile {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  university: string;
  degree: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  metrics: {
    voltage: string;
    current: string;
    frequency: string;
    load: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  code: string;
}

export interface Project {
  id: string;
  code: string;
  name: string;
  description: string;
  problem: string;
  result: string;
  technologies: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
  paper?: string;
  metric: { label: string; value: string };
}

export type TimelineType = "education" | "experience" | "research";

export interface TimelineEvent {
  year: string;
  type: TimelineType;
  title: string;
  org: string;
  description: string;
  current?: boolean;
}

export interface SkillCategory {
  code: string;
  title: string;
  skills: string[];
}

export interface Honor {
  id: string;
  code: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface ResearchItem {
  id: string;
  code: string;
  title: string;
  problem: string;
  methodology: string;
  findings: string;
  publication: string;
  paper?: string;
  github?: string;
}

export const profile: Profile = {
  name: "Alex Carter",
  initials: "AC",
  title: "Electrical Engineering Student",
  tagline:
    "I design, simulate, and build power electronics and control systems — from breadboard to substation.",
  bio: "Undergraduate Electrical Engineering student focused on power systems, embedded control, and renewable energy integration. I like taking a system from a schematic to a working, measurable piece of hardware.",
  location: "Boston, MA",
  university: "Colton Institute of Technology",
  degree: "B.S. Electrical Engineering — Class of 2027",
  status: "Available for Internships — Summer 2027",
  email: "alex.carter@example.edu",
  github: "https://github.com/alexcarter",
  linkedin: "https://linkedin.com/in/alexcarter",
  resumeUrl: "#",
  metrics: {
    voltage: "230.4V",
    current: "4.82A",
    frequency: "50.0Hz",
    load: "42%",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", code: "00" },
  { label: "About", href: "#about", code: "01" },
  { label: "Projects", href: "#projects", code: "02" },
  { label: "Experience", href: "#experience", code: "03" },
  { label: "Skills", href: "#skills", code: "04" },
  { label: "Honors", href: "#honors", code: "05" },
  { label: "Research", href: "#research", code: "06" },
  { label: "Contact", href: "#contact", code: "07" },
];

export const projects: Project[] = [
  {
    id: "smart-grid-balancer",
    code: "SYS-01",
    name: "Smart Grid Load Balancer",
    description:
      "An IoT-connected load balancing node that monitors real-time current draw across three branch circuits and sheds non-critical load before breaker trip thresholds.",
    problem:
      "Residential sub-panels have no visibility into per-circuit load until a breaker trips.",
    result: "Reduced nuisance trips by 100% across 6 weeks of field testing on a 3-branch test panel.",
    technologies: ["ESP32", "Embedded C", "Current Transformers", "MQTT", "KiCad"],
    status: "OPERATIONAL",
    github: "https://github.com/alexcarter/smart-grid-balancer",
    demo: "#",
    metric: { label: "LOAD REDUCTION", value: "31%" },
  },
  {
    id: "vfd-motor-controller",
    code: "SYS-02",
    name: "3-Phase Induction Motor Speed Controller",
    description:
      "A variable-frequency drive built around SVPWM generation to control the speed of a 1/2 HP three-phase induction motor with closed-loop tachometer feedback.",
    problem:
      "Off-the-shelf VFDs hide the control loop — needed a transparent platform to study torque-speed behavior.",
    result: "Achieved stable closed-loop speed regulation within ±2% across 200–2400 RPM.",
    technologies: ["MATLAB/Simulink", "PIC32", "Power Electronics", "SVPWM"],
    status: "PROTOTYPE",
    github: "https://github.com/alexcarter/vfd-controller",
    metric: { label: "SPEED ACCURACY", value: "±2%" },
  },
  {
    id: "mppt-charge-controller",
    code: "SYS-03",
    name: "Solar MPPT Charge Controller",
    description:
      "A synchronous buck converter charge controller implementing Perturb & Observe MPPT to maximize harvested power from a 100W photovoltaic panel.",
    problem: "Fixed-voltage charging wastes 20–30% of available panel output under variable irradiance.",
    result: "Measured 27% average efficiency gain over direct panel-to-battery charging.",
    technologies: ["LTspice", "ATmega328", "Buck Converter", "C++"],
    status: "OPERATIONAL",
    github: "https://github.com/alexcarter/mppt-controller",
    metric: { label: "EFFICIENCY GAIN", value: "+27%" },
  },
  {
    id: "microgrid-simulation",
    code: "SYS-04",
    name: "Campus Microgrid Stability Study",
    description:
      "An ETAP and Simulink model of a renewable-integrated campus microgrid, evaluating frequency stability under sudden load transients and solar intermittency.",
    problem: "High renewable penetration destabilizes grid frequency without adequate inertia modeling.",
    result: "Identified minimum battery inertia constant required to keep frequency deviation under 0.5Hz.",
    technologies: ["ETAP", "Simulink", "MATLAB", "Power Systems Analysis"],
    status: "RESEARCH",
    paper: "#",
    metric: { label: "FREQ. DEVIATION", value: "<0.5Hz" },
  },
  {
    id: "dual-rail-psu",
    code: "SYS-05",
    name: "Dual-Rail Regulated Bench PSU",
    description:
      "A ±15V linear regulated power supply with short-circuit and thermal protection, designed and fabricated as a two-layer PCB for personal lab use.",
    problem: "Needed a reliable, protected bench supply for prototyping other projects in this list.",
    result: "In continuous personal use since fabrication with zero component failures.",
    technologies: ["KiCad", "Linear Regulation", "PCB Fabrication"],
    status: "ARCHIVED",
    github: "https://github.com/alexcarter/bench-psu",
    metric: { label: "RIPPLE", value: "<10mV" },
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2023",
    type: "education",
    title: "B.S. Electrical Engineering",
    org: "Colton Institute of Technology",
    description: "Started undergraduate coursework in circuits, fields, and digital logic.",
  },
  {
    year: "2024",
    type: "experience",
    title: "Lab Assistant — Power Systems Lab",
    org: "Colton Institute of Technology",
    description: "Maintained lab equipment and supported experiments on three-phase machines and protective relaying.",
  },
  {
    year: "2025",
    type: "experience",
    title: "Summer Intern — Substation Operations",
    org: "Northgate Regional Utility Co.",
    description: "Assisted with protective relay testing and SCADA data review for a 115kV distribution substation.",
  },
  {
    year: "2025",
    type: "research",
    title: "Undergraduate Researcher — Microgrid Stability",
    org: "Colton Power Systems Research Group",
    description: "Modeling frequency stability of renewable-integrated microgrids under load transients.",
  },
  {
    year: "2026",
    type: "experience",
    title: "Teaching Assistant — Circuits II",
    org: "Colton Institute of Technology",
    description: "Leading lab sections on AC steady-state analysis and two-port networks.",
    current: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    code: "GRP-01",
    title: "Electrical",
    skills: ["Circuit Design", "Power Systems", "Electronics", "Control Systems", "Electrical Machines"],
  },
  {
    code: "GRP-02",
    title: "Engineering Tools",
    skills: ["MATLAB", "Simulink", "LTspice", "KiCad", "AutoCAD", "ETAP"],
  },
  {
    code: "GRP-03",
    title: "Programming",
    skills: ["Python", "C / C++", "Embedded Programming"],
  },
];

export const honors: Honor[] = [
  {
    id: "dean-list",
    code: "HNR-01",
    title: "Dean's List",
    issuer: "Colton Institute of Technology",
    year: "2024 · 2025",
    description: "Recognized for academic standing in the top 10% of the Electrical Engineering cohort.",
  },
  {
    id: "ieee-design-competition",
    code: "HNR-02",
    title: "1st Place — IEEE Student Design Competition",
    issuer: "IEEE Region Student Chapter",
    year: "2025",
    description: "Awarded for the Solar MPPT Charge Controller entry among 40+ regional teams.",
  },
  {
    id: "research-symposium",
    code: "HNR-03",
    title: "Best Poster Award",
    issuer: "Colton Undergraduate Research Symposium",
    year: "2026",
    description: "Awarded for the microgrid stability research poster, presented to the engineering faculty panel.",
  },
  {
    id: "scholarship",
    code: "HNR-04",
    title: "Power & Energy Society Scholarship",
    issuer: "IEEE Power & Energy Society",
    year: "2024",
    description: "Merit-based scholarship supporting undergraduate study in power systems engineering.",
  },
];

export const research: ResearchItem[] = [
  {
    id: "microgrid-stability",
    code: "PAPER-01",
    title: "Stability Analysis of Renewable-Integrated Microgrids Under Load Transients",
    problem:
      "As campus and community microgrids add solar and battery capacity, reduced rotational inertia makes frequency regulation harder to guarantee during sudden load or generation changes.",
    methodology:
      "Built a reduced-order Simulink model of a campus feeder with PV, battery storage, and a diesel backup generator; applied step-load and irradiance-drop transients while sweeping battery inertia constant (H).",
    findings:
      "Frequency deviation stayed under the 0.5Hz stability threshold once battery-emulated inertia exceeded H = 3.2s, independent of PV penetration up to 60%.",
    publication: "Colton Undergraduate Research Symposium, 2026 — Poster Presentation",
    paper: "#",
  },
];

export const socials = {
  email: profile.email,
  github: profile.github,
  linkedin: profile.linkedin,
};
