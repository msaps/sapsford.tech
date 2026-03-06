import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // If scrolled to the bottom, activate the last section
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
    >
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-black/60">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`relative rounded-full px-5 py-2 text-base font-medium transition-colors ${
              activeSection === link.href
                ? "text-[#0A84FF] dark:text-[#5AC8FA]"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            {activeSection === link.href && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute inset-0 rounded-full bg-[#0A84FF]/10 dark:bg-[#5AC8FA]/10"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </a>
        ))}
        <a
          href="/docs/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 rounded-full bg-[#0A84FF] px-5 py-2 text-base font-medium text-white transition-colors hover:bg-[#0066CC] dark:bg-[#5AC8FA] dark:text-black dark:hover:bg-[#4AB8EA]"
        >
          Resume
        </a>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full max-w-xs">
        <div className="rounded-2xl border border-white/80 bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-black/60 overflow-hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-between w-full px-5 py-2"
            aria-label="Toggle menu"
          >
            <span className="text-base font-medium text-[#0A84FF] dark:text-[#5AC8FA]">
              {navLinks.find((link) => link.href === activeSection)?.label || "Menu"}
            </span>
            <motion.svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </button>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200/50 dark:border-white/10 pb-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-5 py-2.5 text-base font-medium transition-colors ${
                        activeSection === link.href
                          ? "text-[#0A84FF] bg-[#0A84FF]/10 dark:text-[#5AC8FA] dark:bg-[#5AC8FA]/10"
                          : "text-gray-700 hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="px-3 pt-2">
                    <a
                      href="/docs/Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-full bg-[#0A84FF] px-5 py-2 text-center text-base font-medium text-white transition-colors hover:bg-[#0066CC] dark:bg-[#5AC8FA] dark:text-black dark:hover:bg-[#4AB8EA]"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
