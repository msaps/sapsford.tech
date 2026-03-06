export interface Project {
  title: string;
  description: string;
  url?: string;
  tags: string[];
  size: "small" | "medium" | "large";
  gradient: string;
  image?: string;
  imageDark?: string;
}

export const projects: Project[] = [
  {
    title: "Loungebird",
    description: "Real-time airport lounge occupancy at London Heathrow. Available on iPhone, iPad and Mac.",
    url: "https://loungebird.app",
    tags: ["iOS", "macOS", "Backend"],
    size: "large",
    image: "/images/loungebird-light.png",
    imageDark: "/images/loungebird-dark.png",
    gradient: "from-sky-200 to-blue-200 dark:from-blue-800 dark:to-sky-900",
  },
  {
    title: "Tabman",
    description: "A powerful paging view controller with interactive indicator bars.",
    url: "https://github.com/uias/Tabman",
    tags: ["★ 2.9K", "iOS", "Open Source"],
    size: "medium",
    gradient: "from-violet-200 to-purple-200 dark:from-violet-950 dark:to-purple-950",
  },
  {
    title: "Pageboy",
    description: "A simple, highly informative page view controller.",
    url: "https://github.com/uias/Pageboy",
    tags: ["★ 2K", "iOS", "Open Source"],
    size: "medium",
    gradient: "from-blue-100 to-indigo-200 dark:from-blue-950 dark:to-indigo-950",
  },
];
