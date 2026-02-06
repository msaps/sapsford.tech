import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <span className="mb-4 inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white dark:bg-gray-100 dark:text-gray-900">
          Projects
        </span>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Things I've built
        </h2>

        <BentoGrid>
          {projects.map((project) => (
            <BentoCard
              key={project.title}
              size={project.size}
              gradient={project.gradient}
              href={project.url}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
