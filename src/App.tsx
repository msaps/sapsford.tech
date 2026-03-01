import Header from "./components/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-gray-400 dark:text-gray-600">
        &copy; {new Date().getFullYear()} Merrick Sapsford
      </footer>
    </div>
  );
}
