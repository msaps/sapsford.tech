import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      // If scrolled to the bottom, activate the last section
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].href);
        return;
      }

      const sections = navLinks.map((l) => l.href.slice(1));
      const scrollY = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(`#${sections[i]}`);
          return;
        }
      }
      setActiveSection("#home");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
    >
      <nav className="flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-black/60">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full px-5 py-2 text-base font-medium transition-colors ${
              activeSection === link.href
                ? "bg-[#0A84FF]/10 text-[#0A84FF]"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
