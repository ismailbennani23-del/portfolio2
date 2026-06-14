// All site content lives here so you can edit copy without touching components.
// Source of truth: Ismail Bennani's résumé.

export const profile = {
  name: "Ismail Bennani",
  initials: "IB",
  positioning: "Finance & Data Analytics Candidate · Accounting Minor",
  tagline: "Finance, with the data to back it up.",
  location: "Rock Island, IL",
  email: "m.ismailbennani@gmail.com",
  phone: "+1 (309) 631-9688",
  linkedin: "https://linkedin.com/in/ismail-bennani",
  linkedinLabel: "/in/ismail-bennani",
  resumeUrl: "/resume.pdf", // ← add your résumé PDF to /public as resume.pdf
  photo: "/profile.png", // ← your headshot (already added)
  education: "Augustana College",
  degree: "BA, Data Analytics & Finance",
  minor: "Accounting",
  gpa: "3.7 / 4.0",
  graduation: "May 2027",
  languages: "EN · FR · AR · ES",
};

export const heroSubhead =
  "Finance and Data Analytics student at Augustana College with hands-on experience in accounting operations, tax preparation, financial analysis, and reporting automation — turning financial data into actionable insights using Excel, Power BI, R, Python, and SQL.";

export const heroMetrics = [
  { name: "Reporting accuracy", value: "+15%" },
  { name: "Manual work saved / month", value: "10+ hrs" },
  { name: "Approval times reduced", value: "10–15%" },
  { name: "Capital efficiency (model)", value: "+18%" },
];

export const aboutParagraphs = [
  "I'm a Finance and Data Analytics candidate at Augustana College with an Accounting minor. My work sits where two disciplines meet: the precision of **accounting and tax operations**, where accuracy and compliance are non-negotiable, and the leverage of **data analytics**, where the right model turns raw numbers into a clear recommendation.",
  "Across roles in finance operations, tax, and analysis, I've reconciled institutional accounts, prepared federal and state returns, and **automated Power BI and Excel reporting that improved accuracy by 15% and saved 10+ hours of manual work each month**. I care about clean data, defensible analysis, and reporting that people can actually act on.",
  "I'm focused on **financial analysis, accounting operations, business intelligence, reporting automation, and corporate strategy** — and I'm looking for internships and entry-level roles in finance, analytics, consulting, and financial services where that mix makes a difference.",
];

// Quick snapshot card shown in the About section (complements the Education section).
export const snapshot: { k: string; v: string }[] = [
  { k: "Open to", v: "Internships & entry-level" },
  { k: "Focus", v: "Finance · Analytics · BI" },
  { k: "GPA", v: "3.7 / 4.0" },
  { k: "Graduation", v: "May 2027" },
  { k: "Location", v: "Rock Island, IL" },
  { k: "Languages", v: "EN · FR · AR · ES" },
];

export const education = {
  school: "Augustana College",
  location: "Rock Island, IL",
  degree: "Bachelor of Arts in Data Analytics and Finance",
  minor: "Minor in Accounting",
  graduation: "Expected May 2027",
  gpa: "GPA 3.7 / 4.0",
  coursework: [
    {
      group: "Finance & Accounting",
      items: [
        "Financial Management",
        "Security Analysis & Portfolio Management",
        "Money and Banking",
        "Accounting Fundamentals",
        "Intermediate Accounting I & II",
      ],
    },
    {
      group: "Analytics & Technical",
      items: [
        "Applied Business Analytics",
        "Data Engineering",
        "Data Mining",
        "Introduction to Data Analysis",
        "Python",
        "Business Statistics",
        "Applied Business Statistics",
      ],
    },
    {
      group: "Business",
      items: ["Marketing", "Organizational Behavior"],
    },
  ],
};

export type Experience = {
  role: string;
  org: string;
  date: string;
  location: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Finance & Accounting Operations Specialist",
    org: "Augustana College — Business Office",
    date: "May 2026 — Present",
    location: "Rock Island, IL",
    bullets: [
      "Process and reconcile **50+ weekly journal entries**, P-Card transactions, and invoices, ensuring accurate financial reporting across institutional accounts.",
      "Identified and resolved documentation discrepancies in **accounts payable** workflows, improving recordkeeping accuracy and audit readiness across a **7+ person finance team**.",
      "Streamlined expense tracking and invoice verification, contributing to **faster approval cycles** and cleaner financial data for institutional reporting.",
    ],
  },
  {
    role: "Tax Associate",
    org: "H&R Block",
    date: "Nov 2025 — Apr 2026",
    location: "Moline, IL",
    bullets: [
      "Prepared and reviewed **50–100 individual federal and state tax returns** in full compliance with IRS standards, deductions, and filing requirements.",
      "Conducted thorough review of client financial documents — **W-2s, 1099s, and income records** — ensuring accuracy and completeness before submission.",
      "Managed sensitive client data with full discretion in a fast-paced, deadline-driven environment serving a diverse base of individual filers.",
    ],
  },
  {
    role: "Operations & Financial Analyst Intern",
    org: "Laboralim",
    date: "Jun 2025 — Sep 2025",
    location: "Casablanca, Morocco",
    bullets: [
      "Performed post-trade financial analysis, reconciliations, and budget variance reviews, helping identify **~2–3% cost-saving opportunities**.",
      "Automated Excel and Power BI reporting workflows, improving **reporting accuracy by 15%** and saving **10+ hours of manual work per month**.",
      "Partnered with finance and operations teams to resolve budget variances and **reduce approval times by 10–15%** through clearer KPI tracking.",
    ],
  },
];

export type Project = {
  no: string;
  tag: string;
  tools: string;
  title: string;
  description: string;
  skills: string[];
  metric: string;
  metricLabel: string;
  link?: string; // ← replace "#" with a GitHub repo or write-up link
};

export const projects: Project[] = [
  {
    no: "01",
    tag: "R",
    tools: "R · tidyverse",
    title: "Investment Portfolio & Risk Analysis",
    description:
      "Analyzed monthly returns for MSFT, AGG, XLK, and VOO against the S&P 500 — calculating beta, volatility, risk-return metrics, and Sharpe-like ratios to recommend an optimal allocation strategy.",
    skills: ["Portfolio analysis", "Risk metrics", "Statistical modeling"],
    metric: "Sharpe-ratio",
    metricLabel: "driven allocation strategy",
    link: "#",
  },
  {
    no: "02",
    tag: "R",
    tools: "R · dplyr · ggplot2",
    title: "Premier League Performance Analytics",
    description:
      "Cleaned and analyzed league, team, and player datasets, then built a regression model to quantify how goal difference predicts team points.",
    skills: ["Data cleaning", "Regression", "Data visualization"],
    metric: "Regression",
    metricLabel: "goal diff → points model",
    link: "#",
  },
  {
    no: "03",
    tag: "Excel",
    tools: "Excel · VBA",
    title: "Cash Reserve & Liquidity Forecasting Model",
    description:
      "Simulated T+1/T+2 settlement cycles, reserve targets, and cash-flow scenarios to stress-test operational capital under varying conditions.",
    skills: ["Cash flow analysis", "Financial modeling", "Forecasting"],
    metric: "+18%",
    metricLabel: "simulated capital efficiency",
    link: "#",
  },
  {
    no: "04",
    tag: "Python",
    tools: "Python · OOP",
    title: "Solitaire Game Development",
    description:
      "Designed a fully playable Solitaire game using object-oriented programming, modular functions, and rule-based logic, with core gameplay mechanics and debugging workflows.",
    skills: ["OOP", "Modular design", "Debugging"],
    metric: "OOP",
    metricLabel: "modular, rule-based engine",
    link: "#",
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Technical & Analytics",
    items: [
      "Excel", "Power BI", "SQL", "Python", "R", "VBA", "MS SQL Server",
      "ggplot2", "tidyverse", "Data Visualization", "Data Cleaning", "Microsoft Office", "Google Analytics",
    ],
  },
  {
    title: "Finance & Accounting",
    items: [
      "Financial Analysis", "Financial Modeling", "Forecasting", "Budgeting",
      "KPI Tracking", "Variance Analysis", "Reconciliation", "Accounts Payable",
      "Tax Preparation", "Portfolio Analysis", "Risk Management", "Cash Flow Analysis",
    ],
  },
  {
    title: "Business",
    items: [
      "Business Intelligence", "Reporting Automation", "Client Communication",
      "Problem Solving", "Team Leadership", "Presentation Skills",
    ],
  },
  {
    title: "Languages",
    items: ["English", "French", "Arabic", "Spanish"],
  },
];

export const leadership = {
  role: "Student-Athlete, Captain",
  org: "Augustana College Soccer Team",
  date: "Sep 2023 — Present",
  location: "Rock Island, IL",
  heading: "Captain on the pitch, the same discipline off it.",
  body:
    "As a student-athlete and captain of the Augustana College soccer team, I balance 20+ hours of weekly training and competition with a full finance, accounting, and analytics course load. Leading 25+ teammates has built the discipline, communication, and accountability I bring to every team I join.",
  stats: [
    { n: "20+", l: "Weekly athletic hours balanced with a full course load" },
    { n: "25+", l: "Teammates led as captain" },
  ],
};

export const resumeBlurb =
  "My résumé covers experience in finance and accounting operations, tax preparation, business intelligence, reporting automation, and analytics projects.";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
];
