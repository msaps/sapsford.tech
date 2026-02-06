export interface Project {
  title: string;
  description: string;
  url?: string;
  tags: string[];
  size: "small" | "medium" | "large" | "wide";
  gradient: string;
  image?: string;
  imageDark?: string;
}

export const projects: Project[] = [
  {
    title: "Loungebird",
    description: "Real-time airport lounge occupancy tracking for iPhone, iPad and Mac.",
    url: "https://loungebird.app",
    tags: ["iOS", "macOS", "TypeScript"],
    size: "large",
    image: "/public/images/loungebird-light.png",
    imageDark: "/public/images/loungebird-dark.png",
    gradient: "from-[#f0f5ff] to-[#f1f5ff] dark:from-[#0c3048] dark:to-[#002035]",
  },
  {
    title: "Tabman",
    description: "A powerful paging view controller with interactive indicator bars.",
    url: "https://github.com/uias/Tabman",
    tags: ["★ 2.9K", "Swift", "Open Source"],
    size: "small",
    gradient: "from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-950",
  },
  {
    title: "Pageboy",
    description: "UIPageViewController done properly.",
    url: "https://github.com/uias/Pageboy",
    tags: ["★ 2K", "Swift", "Open Source"],
    size: "small",
    gradient: "from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950",
  },
  {
    title: "Project Gamma",
    description: "A wide placeholder project demonstrating cross-platform development.",
    tags: ["Kotlin", "Android"],
    size: "wide",
    gradient: "from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-950",
  },
];
