import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          Merrick Sapsford
        </a>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
