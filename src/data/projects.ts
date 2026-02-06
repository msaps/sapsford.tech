export interface Project {
  title: string;
  description: string;
  url?: string;
  tags: string[];
  size: "small" | "medium" | "large" | "wide";
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Loungebird",
    description:
      "Real-time airport lounge occupancy tracking for iOS, iPad and Mac.",
    url: "https://loungebird.app",
    tags: ["Swift", "iOS", "SwiftUI"],
    size: "large",
    gradient: "from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-950",
  },
  {
    title: "Project Alpha",
    description: "A placeholder project showcasing modern web technologies.",
    tags: ["React", "TypeScript"],
    size: "small",
    gradient: "from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950",
  },
  {
    title: "Project Beta",
    description: "Another placeholder project with innovative features.",
    tags: ["Swift", "Vapor"],
    size: "small",
    gradient: "from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-950",
  },
  {
    title: "Project Gamma",
    description:
      "A wide placeholder project demonstrating cross-platform development.",
    tags: ["Kotlin", "Android"],
    size: "wide",
    gradient: "from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-950",
  },
];
