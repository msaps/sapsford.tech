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
    company: "Company One",
    role: "Engineering Leader",
    period: "2022 - Present",
    description: "Leading engineering teams to deliver impactful products.",
    size: "wide",
    gradient: "from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900",
  },
  {
    company: "Company Two",
    role: "Senior Engineer",
    period: "2019 - 2022",
    description: "Building scalable mobile applications and platform tools.",
    size: "small",
    gradient: "from-sky-50 to-cyan-100 dark:from-sky-950 dark:to-cyan-950",
  },
  {
    company: "Company Three",
    role: "Software Engineer",
    period: "2017 - 2019",
    description: "Developing innovative solutions across iOS and web platforms.",
    size: "small",
    gradient: "from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-950",
  },
  {
    company: "Company Four",
    role: "Junior Developer",
    period: "2015 - 2017",
    description: "Kickstarting a career in software development.",
    size: "wide",
    gradient: "from-lime-50 to-green-100 dark:from-lime-950 dark:to-green-950",
  },
];
