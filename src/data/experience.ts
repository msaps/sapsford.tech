export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  size: "small" | "medium" | "wide";
  gradient: string;
}

export const experience: Experience[] = [
  {
    company: "Oviva",
    role: "Director Engineering",
    period: "🇩🇪 2021 - Present",
    description: "Leading engineering teams to deliver impactful products.",
    size: "wide",
    gradient: "from-teal-100 to-teal-200 dark:from-teal-700 dark:to-teal-950",
  },
  {
    company: "Mimi Hearing Technologies",
    role: "Mobile Lead",
    period: "🇩🇪 2018 - 2021",
    description: "Building scalable mobile applications and platform tools.",
    size: "small",
    gradient: "from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-950",
  },
  {
    company: "Apadmi",
    role: "Software Engineer",
    period: "🇬🇧 2015 - 2017",
    description: "Developing innovative solutions across iOS and web platforms.",
    size: "small",
    gradient: "from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-900",
  },
];
