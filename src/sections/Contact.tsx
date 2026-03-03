import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="rounded-2xl bg-white/60 p-8 ring-1 ring-black/5 backdrop-blur-sm sm:p-12 dark:bg-white/5 dark:ring-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">Get in touch</h2>
          <p className="mt-3 max-w-lg text-gray-600 dark:text-gray-400">
            Interested in a project or something else? I'd love to hear from you.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
