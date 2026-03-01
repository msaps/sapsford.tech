import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <span className="mb-4 inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white dark:bg-gray-100 dark:text-gray-900">
          Experience
        </span>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Where I've worked</h2>

        <BentoGrid>
          {experience.map((exp) => (
            <BentoCard key={exp.company} size={exp.size} gradient={exp.gradient} href={exp.url}>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-white/70">{exp.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
                <p className="text-sm font-medium text-gray-700 dark:text-white/90">{exp.role}</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-white/80">{exp.description}</p>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
