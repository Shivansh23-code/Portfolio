// ══════════════════════════════════════════════════════════════════
//  CONTENT — single source of truth (typed).
//  Update your resume here and the whole site updates. Nothing in
//  /components needs to change for a content edit.
// ══════════════════════════════════════════════════════════════════

export interface Profile {
  name: string;
  role: string;
  tagline: string[];
  location: string;
  available: boolean;
  careerStart: string; // ISO date — powers the live "in production" uptime
  summary: string;
  specs: { k: string; v: string }[];
}

export interface Contact {
  email: string;
  phone: string;
  github: string;
  githubLabel: string;
  linkedin: string;
  linkedinLabel: string;
  resumeUrl: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
}

export interface StackLayer {
  layer: string;
  code: string;
  items: string[];
}

export type JobStatus = "running" | "shipped";

export interface Job {
  company: string;
  title: string;
  location: string;
  period: string;
  status: JobStatus;
  stack: string[];
  highlights: string[]; // 3-4 short, punchy lines shown by default
  points: string[]; // full detail, revealed on "Show details"
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  subtitle: string;
  status: string;
  blurb: string;
  stack: string[];
  links: ProjectLink[];
}

export interface Achievement {
  tag: string;
  title: string;
  detail: string;
}

export interface Education {
  degree: string;
  school: string;
  university: string;
  gpa: string;
  year: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export const profile: Profile = {
  name: "Shivansh Tiwari",
  role: "Java Full Stack Developer",
  tagline: ["Backend-focused", "Spring Boot", "React"],
  location: "Jabalpur, MP — India",
  available: true,
  careerStart: "2026-04-01T09:00:00",
  summary:
    "Backend-focused Java Full Stack Developer with production experience building CRM modules, call-queue & escalation systems, and salary-management workflows in Spring Boot. I work across REST API design, event-driven notifications, Redis caching, JWT & Spring Security, Flyway migrations, MySQL, and React dashboards — with a bias toward clean architecture, debugging, and API performance.",
  specs: [
    { k: "role", v: "Java Developer @ MBG Card India" },
    { k: "based", v: "Jabalpur, Madhya Pradesh" },
    { k: "focus", v: "Backend systems / Spring Boot" },
    { k: "degree", v: "B.Tech CSE — RGPV (2025)" },
    { k: "status", v: "Open to SDE-1 roles" },
  ],
};

export const contact: Contact = {
  email: "shivanshtiwari887@gmail.com",
  phone: "+91-6264646145",
  github: "https://github.com/Shivansh23-code",
  githubLabel: "github.com/Shivansh23-code",
  linkedin: "https://linkedin.com/in/shivansh-tiwari-53485327bs",
  linkedinLabel: "linkedin.com/in/shivansh-tiwari-53485327bs",
  resumeUrl: "/Shivansh_Tiwari_Resume.pdf", // drop your PDF in /public to enable
};

export const metrics: Metric[] = [
  { label: "endpoints tested", value: 297, suffix: "+" },
  { label: "controllers", value: 44, suffix: "" },
  { label: "REST APIs built", value: 10, suffix: "+" },
  { label: "test pass rate", value: 90, suffix: "%" },
];

export const stack: StackLayer[] = [
  {
    layer: "Backend",
    code: "L1",
    items: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "REST APIs",
      "Microservices",
      "JPA",
      "Hibernate",
      "WebSockets (STOMP)",
      "Apache Kafka",
    ],
  },
  {
    layer: "Frontend",
    code: "L2",
    items: [
      "React.js",
      "Vite",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    layer: "Data",
    code: "L3",
    items: ["MySQL", "MongoDB", "Redis", "Flyway"],
  },
  {
    layer: "Tooling",
    code: "L4",
    items: [
      "Git",
      "Maven",
      "Docker",
      "Postman",
      "Swagger",
      "JUnit",
      "CI/CD",
      "Railway",
      "Vercel",
    ],
  },
  {
    layer: "Concepts",
    code: "L5",
    items: [
      "OOP",
      "Data Structures & Algorithms",
      "MVC",
      "RBAC",
      "Event-Driven Architecture",
      "Agile",
      "API Documentation",
    ],
  },
];

export const experience: Job[] = [
  {
    company: "MBG Card India Pvt Ltd",
    title: "Java Developer",
    location: "Jabalpur, MP",
    period: "Apr 2026 — Present",
    status: "running",
    stack: ["Spring Boot", "MySQL", "Redis", "Flyway", "React"],
    highlights: [
      "Built & maintained 10+ REST APIs across a 44-controller, ~297-endpoint production system.",
      "Shipped a Service Delivery call-queue & escalation engine — Flyway migrations + STOMP push.",
      "Worked event-driven: Kafka notifications, Redis caching, ShedLock jobs, Dockerized deploys.",
      "Delivered the Salary Management module — approval workflows, attendance & incentive logic.",
    ],
    points: [
      "Designed and shipped an end-to-end Service Delivery call-queue & escalation module — Flyway-versioned schema migrations, a scheduled escalation engine that auto-escalates overdue calls (10-second sweep), and real-time WebSocket (STOMP) push notifications to department heads.",
      "Developed & maintained 10+ Spring Boot REST APIs for internal CRM and customer-support modules (ticket status, priority changes, customer detail retrieval) in a production system spanning 44 controllers and ~297 endpoints.",
      "Worked within an event-driven architecture using Kafka-decoupled notifications, Redis caching, ShedLock-guarded scheduled jobs, and Dockerized blue-green deployments.",
      "Systematically tested & triaged ~297 endpoints across 44 controllers (~90% pass rate), identifying and escalating blocking defects — a missing global exception handler and a data-integrity bug in queue-assignment logic.",
      "Built Salary Management module APIs with Super Admin & Department Head approval workflows, attendance tracking, daily performance tracking, and incentive calculation logic.",
      "Integrated Redis caching for hot customer/department data to cut repeated DB fetches, and implemented role-based access control (RBAC) in React dashboards.",
    ],
  },
  {
    company: "Zidio Development",
    title: "Full-Stack Developer Intern",
    location: "Remote",
    period: "Jul 2025 — Oct 2025",
    status: "shipped",
    stack: ["Java", "Spring Boot", "React"],
    highlights: [
      "Built a full-stack Job Portal with Java, Spring Boot, React & JavaScript.",
      "Owned REST API design, DB integration & frontend–backend wiring in an Agile team.",
    ],
    points: [
      "Developed a full-stack Job Portal web application using Java, Spring Boot, React.js, HTML, CSS, and JavaScript.",
      "Worked on REST API design, database integration, and frontend–backend connectivity in an Agile team environment.",
    ],
  },
  {
    company: "Techplement",
    title: "Frontend Developer Intern",
    location: "Remote",
    period: "May 2025 — Jun 2025",
    status: "shipped",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Built a responsive course-selling web app with HTML, CSS & JavaScript.",
      "Focused on responsive UI and clear user-experience improvements.",
    ],
    points: [
      "Developed a course-selling web application using HTML, CSS, and JavaScript, focusing on responsive UI and user-experience improvements.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "SIA — Smart Inventory",
    subtitle: "Inventory & Product Management Platform",
    status: "stable",
    blurb:
      "Modular Spring Boot backend for product, category, and inventory management with JWT-secured REST APIs. Endpoints tested with Postman and documented with Swagger for easy integration.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "Hibernate",
      "MySQL",
      "Swagger",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Shivansh23-code/SIA-Smart-Inventory---Backend",
      },
    ],
  },
  {
    name: "Privoraa",
    subtitle: "Your Private AI Companion",
    status: "live",
    blurb:
      "A responsive frontend UI for a private, offline-first AI assistant — refined for a smooth, consistent experience across every device.",
    stack: ["React.js", "Vite", "JavaScript", "HTML5", "CSS3"],
    links: [
      { label: "Live Demo", href: "https://privoraaai.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Shivansh23-code/Privoraa" },
    ],
  },
  {
    name: "Job Portal",
    subtitle: "Full-Stack Hiring Platform",
    status: "shipped",
    blurb:
      "A full-stack job portal built during my Zidio internship — Spring Boot REST APIs and MySQL on the backend, a React.js client on the front, wired together in an Agile team.",
    stack: ["Java", "Spring Boot", "REST APIs", "MySQL", "React.js"],
    links: [
      {
        label: "Backend",
        href: "https://github.com/Shivansh23-code/Job_Portal_Backend",
      },
      {
        label: "Frontend",
        href: "https://github.com/Shivansh23-code/Job_Portal_Frontend",
      },
    ],
  },
  {
    name: "Resume System",
    subtitle: "Resume Builder & Career Ecosystem",
    status: "live",
    blurb:
      "Backend APIs for a next-gen resume builder — Spring Boot 3 / Java 21 with Spring Security (BCrypt), JPA & MySQL for auth and resume management, paired with a React.js client.",
    stack: ["Java 21", "Spring Boot", "Spring Security", "JPA", "MySQL", "React.js"],
    links: [
      { label: "Live Demo", href: "https://resume-system-pi.vercel.app" },
      {
        label: "Backend",
        href: "https://github.com/Shivansh23-code/Resume_System_Backend",
      },
    ],
  },
  {
    name: "RightAway",
    subtitle: "E-commerce Storefront",
    status: "live",
    blurb:
      "A responsive e-commerce storefront with product browsing and a clean, modern shopping experience, deployed on Vercel.",
    stack: ["React.js", "JavaScript", "CSS3", "Vite"],
    links: [
      { label: "Live Demo", href: "https://ecommerce-right-away.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/Shivansh23-code/Ecommerce-RightAway",
      },
    ],
  },
  {
    name: "System Configurator",
    subtitle: "Component-Based Microservice",
    status: "stable",
    blurb:
      "A Spring Boot microservice exposing RESTful CRUD over modular vehicle system models (engine, braking, …) for component-based design — MySQL persistence, Swagger-documented endpoints.",
    stack: ["Java", "Spring Boot", "Microservices", "REST APIs", "MySQL", "Swagger"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Shivansh23-code/system-model-service",
      },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    tag: "GATE 2026",
    title: "GATE Score 286 — Computer Science (CS)",
    detail: "Marks 24.49/100 · GATE Score 286 · All India Rank 52,096.",
  },
  {
    tag: "Hackathon",
    title: "Smart India Hackathon 2023 — Finalist",
    detail: "Reached the college-level finals and ranked among the Top 15 teams.",
  },
  {
    tag: "Athletics",
    title: "State-level Cricket — U-17 & U-19",
    detail:
      "Represented at state level and qualified for inter-state trials across Odisha, Chhattisgarh, and Madhya Pradesh.",
  },
];

export const education: Education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Gyan Ganga College of Technology (GGCT), Jabalpur",
  university: "RGPV",
  gpa: "8.3 / 10",
  year: "2025",
};

export const nav: NavItem[] = [
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "experience", label: "experience" },
  { id: "work", label: "work" },
  { id: "extras", label: "extras" },
  { id: "contact", label: "contact" },
];
