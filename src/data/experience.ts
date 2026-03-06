export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  size: "small" | "medium";
  gradient: string;
  url?: string;
}

export const experience: Experience[] = [
  {
    company: "Oviva",
    role: "Director Engineering",
    period: "2021 - Present",
    description:
      "Leading cross-functional teams to support a digital health platform used by hundreds of thousands of patients across Europe.",
    size: "medium",
    gradient: "from-emerald-100 to-emerald-200 dark:from-emerald-600 dark:to-teal-700",
    url: "https://www.oviva.com",
  },
  {
    company: "Mimi",
    role: "Mobile Lead",
    period: "2017 - 2021",
    description: "Led mobile engineering for consumer and B2B hearing health products.",
    size: "small",
    gradient: "from-blue-100 to-violet-200 dark:from-indigo-800 dark:to-violet-950",
    url: "https://www.mimi.io",
  },
  {
    company: "Apadmi",
    role: "Software Engineer",
    period: "2015 - 2017",
    description: "Delivered mobile apps for large-scale clients across the UK.",
    size: "small",
    gradient: "from-orange-100 to-red-200 dark:from-orange-800 dark:to-orange-900",
    url: "https://www.apadmi.com",
  },
];
