import { type ReactNode } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const sizeClasses: Record<string, string> = {
  small: "col-span-1 row-span-1",
  medium: "col-span-2 row-span-1",
  large: "col-span-2 row-span-2",
};

const mobileSizeClasses: Record<string, string> = {
  small: "max-md:col-span-2",
  medium: "max-md:col-span-2",
  large: "max-md:col-span-2",
};

const mobileHeightClasses: Record<string, string> = {
  medium: "max-md:min-h-[240px]",
};

interface BentoGridProps {
  children: ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-4 md:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

interface BentoCardProps {
  size: string;
  gradient: string;
  children: ReactNode;
  href?: string;
}

export function BentoCard({ size, gradient, children, href }: BentoCardProps) {
  const gridClassName = `${sizeClasses[size] ?? ""} ${mobileSizeClasses[size] ?? ""}`;
  const mobileHeight = mobileHeightClasses[size] ?? "";
  const cardClassName = `rounded-2xl bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between min-h-[180px] md:min-h-[220px] ${mobileHeight} h-full`;

  const content = (
    <motion.div
      className={cardClassName}
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={gridClassName}>
        {content}
      </a>
    );
  }

  return <div className={gridClassName}>{content}</div>;
}
