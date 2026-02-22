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
    description: "Real-time airport lounge occupancy at London Heathrow. Available on iPhone, iPad and Mac.",
    url: "https://loungebird.app",
    tags: ["iOS", "macOS", "Backend"],
    size: "large",
    image: "/images/loungebird-light.png",
    imageDark: "/images/loungebird-dark.png",
    gradient: "from-[#f0f5ff] to-[#f1f5ff] dark:from-[#0c3048] dark:to-[#002035]",
  },
  {
    title: "Tabman",
    description: "A powerful paging view controller with interactive indicator bars.",
    url: "https://github.com/uias/Tabman",
    tags: ["★ 2.9K", "iOS", "Open Source"],
    size: "small",
    gradient: "from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-950",
  },
  {
    title: "Pageboy",
    description: "A simple, highly informative page view controller.",
    url: "https://github.com/uias/Pageboy",
    tags: ["★ 2K", "iOS", "Open Source"],
    size: "small",
    gradient: "from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950",
  },
  {
    title: "XH558 - Vulcan to the Sky",
    description: "A wide placeholder project demonstrating cross-platform development.",
    tags: ["iOS", "Android"],
    size: "large",
    gradient: "from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-950",
  },
  {
    title: "AviationLogic - Apps for General Aviation",
    description: "A wide placeholder project demonstrating cross-platform development.",
    tags: ["iOS"],
    size: "wide",
    gradient: "from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-950",
  },
];
